import { Construct } from "constructs";
import {
  s3Bucket,
  s3BucketPolicy,
  s3BucketPublicAccessBlock,
} from "@cdktf/provider-aws";
import { DatabricksProvider } from "@cdktf/provider-databricks/lib/provider";
import { DataDatabricksAwsBucketPolicy } from "@cdktf/provider-databricks/lib/data-databricks-aws-bucket-policy";
import { MwsStorageConfigurations } from "@cdktf/provider-databricks/lib/mws-storage-configurations";

interface StorageConfig {
  provider: DatabricksProvider;
  databricksAccountId: string;
  storageConfigurationName?: string;
  region?: string;
  bucketName?: string;
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
        "Cannot specify both bucket and region. Please specify only one.",
      );
    } else if (!hasBucket && !hasRegion) {
      throw new Error(
        "Must specify either bucket or region. Please specify one.",
      );
    }

    const { provider, region } = config;
    const accountId = config.databricksAccountId ?? provider.accountId ?? "";
    let bucketName = config.bucketName;
    const storageConfigurationName =
      config.storageConfigurationName ?? this.node.path;

    if (bucketName === undefined) {
      const bucket = new s3Bucket.S3Bucket(this, "root-bucket", {
        region,
        bucket:
          storageConfigurationName.replace(/\//g, "-").toLowerCase() +
          "-root-bucket",
        forceDestroy: true,
      });
      bucketName = bucket.id;
    }

    const storage = new MwsStorageConfigurations(this, "resource", {
      provider,
      accountId,
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
    super(scope, id, config);

    const bucketName = this.id;

    const publicAccessBlock =
      new s3BucketPublicAccessBlock.S3BucketPublicAccessBlock(
        this,
        "public-access-block",
        {
          bucket: bucketName,
          blockPublicAcls: true,
          blockPublicPolicy: true,
          ignorePublicAcls: true,
          restrictPublicBuckets: true,
        },
      );

    const bucketPolicyDocument = new DataDatabricksAwsBucketPolicy(
      this,
      "bucket-policy-document",
      {
        bucket: bucketName,
        dependsOn: [publicAccessBlock],
      },
    );

    this.bucketPolicy = new s3BucketPolicy.S3BucketPolicy(
      this,
      "bucket-policy",
      {
        bucket: bucketName,
        policy: bucketPolicyDocument.json,
      },
    );
  }
}
