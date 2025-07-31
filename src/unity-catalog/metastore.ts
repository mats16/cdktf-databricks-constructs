import { Construct } from "constructs";
import { s3Bucket, s3BucketCorsConfiguration } from "@cdktf/provider-aws";
import { DatabricksProvider } from "@cdktf/provider-databricks/lib/provider";
import { Metastore as RawMetastore } from "@cdktf/provider-databricks/lib/metastore";
import { MetastoreAssignment } from "@cdktf/provider-databricks/lib/metastore-assignment";
import { MetastoreDataAccess } from "@cdktf/provider-databricks/lib/metastore-data-access";
import { UnityCatalogRole } from "./aws-iam-role";

interface UnityCatalogMetastoreConfig {
  provider: DatabricksProvider;
  databricksAccountId: string;
  metastoreName?: string;
  region: string;
  storageRoot?: string;
  role?: UnityCatalogRole;
  owner?: string;
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
      config.databricksAccountId ?? provider.accountId ?? "";
    const metastoreName =
      config.metastoreName ?? this.node.path.replace(/\//g, "-").toLowerCase();

    let storageRoot = config.storageRoot;
    if (storageRoot === undefined) {
      // Create new bucket
      const bucket = new s3Bucket.S3Bucket(this, "bucket", {
        region,
        bucket: metastoreName,
        forceDestroy: true,
      });
      // Set CORS configuration
      new s3BucketCorsConfiguration.S3BucketCorsConfiguration(bucket, "cors", {
        bucket: bucket.id,
        corsRule: [
          {
            allowedHeaders: [],
            allowedMethods: ["PUT"],
            allowedOrigins: ["https://*.databricks.com"],
            exposeHeaders: [],
            maxAgeSeconds: 1800,
          },
        ],
      });
      // Set storage-root
      storageRoot = `s3://${bucket.id}`;
    }

    const metastore = new RawMetastore(this, "resource", {
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
    this.bucketName = storageRoot.split("/")[2];

    const unityCatalogRole =
      config.role ??
      new UnityCatalogRole(this, "unity-catalog-role", {
        externalId: databricksAccountId,
        bucketName: this.bucketName,
        roleName: metastoreName + "-unity-catalog-role",
      });

    this.grant("default-role", unityCatalogRole.roleArn, true);
  }

  grant(
    id: string,
    roleArn: string,
    isDefault: boolean = false,
  ): MetastoreDataAccess {
    return new MetastoreDataAccess(this, id, {
      provider: this.provider,
      metastoreId: this.metastoreId,
      name: this.metastoreName + "-" + id,
      comment: this.node.path + "/" + id,
      awsIamRole: { roleArn },
      isDefault,
      forceDestroy: true,
    });
  }

  assign(id: string, workspaceId: number): MetastoreAssignment {
    return new MetastoreAssignment(this, id, {
      provider: this.provider,
      metastoreId: this.metastoreId,
      workspaceId,
    });
  }
}
