import { s3Bucket, s3BucketPolicy } from '@cdktf/provider-aws';
import { DataDatabricksAwsBucketPolicy } from '@cdktf/provider-databricks/lib/data-databricks-aws-bucket-policy';
import { MwsStorageConfigurations } from '@cdktf/provider-databricks/lib/mws-storage-configurations';
import { DatabricksProvider } from '@cdktf/provider-databricks/lib/provider';
import { Construct } from 'constructs';

export interface StorageConfig {
  readonly provider: DatabricksProvider;
  readonly databricksAccountId: string;
  readonly storageConfigurationName?: string;
  readonly region?: string;
  readonly bucketName?: string;
}

export class Storage extends Construct {
  public readonly accountId: string;
  public readonly storageConfigurationId: string;
  public readonly storageConfigurationName: string;
  public readonly bucketName: string;

  /**
   * Databricks stores your account-wide assets, such as libraries, in an AWS S3 bucket that you must configure in your AWS account using a policy supplied by Databricks.
   */
  constructor(scope: Construct, id: string, config: StorageConfig) {
    super(scope, id);

    // Validate that exactly one of bucket or region is defined
    const hasBucket = config.bucketName !== undefined;
    const hasRegion = config.region !== undefined;
    if (hasBucket && hasRegion) {
      throw new Error(
        'Cannot specify both bucket and region. Please specify only one.',
      );
    } else if (!hasBucket && !hasRegion) {
      throw new Error(
        'Must specify either bucket or region. Please specify one.',
      );
    }

    const { provider, region } = config;
    const databricksAccountId =
      config.databricksAccountId ?? provider.accountId ?? '';
    let bucketName = config.bucketName;
    const storageConfigurationName =
      config.storageConfigurationName ?? this.node.path;

    if (bucketName === undefined) {
      const bucket = new RootBucket(this, 'bucket', {
        region,
        forceDestroy: true,
      });
      bucketName = bucket.id;
    }

    const storage = new MwsStorageConfigurations(this, 'resource', {
      provider,
      accountId: databricksAccountId,
      storageConfigurationName,
      bucketName,
    });

    this.accountId = storage.accountId;
    this.storageConfigurationId = storage.storageConfigurationId;
    this.storageConfigurationName = storage.storageConfigurationName;
    this.bucketName = storage.bucketName;
  }
}

export class RootBucket extends s3Bucket.S3Bucket {
  public readonly bucketPolicy: s3BucketPolicy.S3BucketPolicy;

  constructor(scope: Construct, id: string, config: s3Bucket.S3BucketConfig) {
    let bucketPrefix: string | undefined;
    if (config.bucket === undefined) {
      bucketPrefix = `${scope.node.path}-${id}-`
        .replace(/\//g, '-')
        .toLowerCase()
        .slice(0, 37);
    }

    super(scope, id, { ...config, bucketPrefix });

    const bucketName = this.id;

    const bucketPolicyDocument = new DataDatabricksAwsBucketPolicy(
      this,
      'bucket-policy-document',
      {
        bucket: bucketName,
      },
    );

    this.bucketPolicy = new s3BucketPolicy.S3BucketPolicy(
      this,
      'bucket-policy',
      {
        region: config.region,
        bucket: bucketName,
        policy: bucketPolicyDocument.json,
      },
    );
  }
}
