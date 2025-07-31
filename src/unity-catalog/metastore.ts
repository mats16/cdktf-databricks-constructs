import { s3Bucket, s3BucketCorsConfiguration } from '@cdktf/provider-aws';
import { Metastore as TfMetastore } from '@cdktf/provider-databricks/lib/metastore';
import { MetastoreDataAccess } from '@cdktf/provider-databricks/lib/metastore-data-access';
import { DatabricksProvider } from '@cdktf/provider-databricks/lib/provider';
import { Construct } from 'constructs';
import { UnityCatalogRole } from './aws-iam-role';

export interface UnityCatalogMetastoreConfig {
  readonly provider: DatabricksProvider;
  readonly databricksAccountId: string;
  readonly metastoreName?: string;
  readonly region: string;
  readonly storageRoot?: string;
  readonly role?: UnityCatalogRole;
  readonly owner?: string;
}

export class UnityCatalogMetastore extends Construct {
  public readonly provider: DatabricksProvider;
  public readonly metastoreName: string;
  public readonly metastoreId: string;
  public readonly globalMetastoreId: string;
  public readonly owner: string;
  public readonly deltaSharingScope: string;
  public readonly deltaSharingOrganizationName: string;
  public readonly cloud: string;
  public readonly region: string;

  public readonly storageRoot: string;
  public readonly bucketName: string;

  constructor(
    scope: Construct,
    id: string,
    config: UnityCatalogMetastoreConfig,
  ) {
    super(scope, id);

    const { provider, region, owner } = config;
    const databricksAccountId =
      config.databricksAccountId ?? provider.accountId ?? '';
    const metastoreName =
      config.metastoreName ?? this.node.path.replace(/\//g, '-').toLowerCase();

    let storageRoot = config.storageRoot;
    if (storageRoot === undefined) {
      // Create new bucket
      const bucket = new MetastoreBucket(this, 'bucket', {
        region,
        forceDestroy: true,
      });
      // Set storage-root
      storageRoot = `s3://${bucket.id}`;
    }

    const metastore = new TfMetastore(this, 'resource', {
      provider,
      name: metastoreName,
      region,
      storageRoot,
      owner,
      forceDestroy: true,
    });

    this.provider = provider;
    this.metastoreName = metastoreName;
    this.metastoreId = metastore.metastoreId;
    this.globalMetastoreId = metastore.globalMetastoreId;
    this.owner = metastore.owner;
    this.deltaSharingScope = metastore.deltaSharingScope;
    this.deltaSharingOrganizationName = metastore.deltaSharingOrganizationName;
    this.cloud = metastore.cloud;
    this.region = metastore.region;
    this.storageRoot = metastore.storageRoot;
    this.bucketName = storageRoot.split('/')[2];

    const unityCatalogRole =
      config.role ??
      new UnityCatalogRole(this, 'unity-catalog-role', {
        externalId: databricksAccountId,
        bucketName: this.bucketName,
        roleName: metastoreName + '-unity-catalog-role',
      });

    this.grant('default-role', unityCatalogRole.roleArn, true);
  }

  grant(
    id: string,
    roleArn: string,
    isDefault: boolean = false,
  ): MetastoreDataAccess {
    return new MetastoreDataAccess(this, id, {
      provider: this.provider,
      metastoreId: this.metastoreId,
      name: `${this.metastoreName}-${id}`,
      comment: `${this.node.path}/${id}`,
      awsIamRole: { roleArn },
      isDefault,
      forceDestroy: true,
    });
  }
}

export class MetastoreBucket extends s3Bucket.S3Bucket {
  constructor(scope: Construct, id: string, config: s3Bucket.S3BucketConfig) {
    let bucketPrefix: string | undefined;
    if (config.bucket === undefined) {
      bucketPrefix = `${scope.node.path}-${id}-`
        .replace(/\//g, '-')
        .toLowerCase()
        .slice(0, 37);
    }

    super(scope, id, { ...config, bucketPrefix });

    // Set CORS configuration
    new s3BucketCorsConfiguration.S3BucketCorsConfiguration(this, 'cors', {
      region: this.region,
      bucket: this.id,
      corsRule: [
        {
          allowedHeaders: [],
          allowedMethods: ['PUT'],
          allowedOrigins: ['https://*.databricks.com'],
          exposeHeaders: [],
          maxAgeSeconds: 1800,
        },
      ],
    });
  }
}
