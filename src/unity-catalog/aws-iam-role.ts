import { iamRole, iamRolePolicy } from '@cdktf/provider-aws';
import { DataAwsCallerIdentity } from '@cdktf/provider-aws/lib/data-aws-caller-identity';
import { DataDatabricksAwsUnityCatalogAssumeRolePolicy as UnityCatalogAssumeRolePolicy } from '@cdktf/provider-databricks/lib/data-databricks-aws-unity-catalog-assume-role-policy';
import { DataDatabricksAwsUnityCatalogPolicy as UnityCatalogPolicy } from '@cdktf/provider-databricks/lib/data-databricks-aws-unity-catalog-policy';
import { Construct } from 'constructs';

export interface UnityCatalogRoleConfig {
  readonly externalId: string;
  readonly bucketName: string;
  readonly roleName?: string;
}

export class UnityCatalogRole extends Construct {
  public readonly roleName: string;
  public readonly roleArn: string;

  constructor(scope: Construct, id: string, config: UnityCatalogRoleConfig) {
    super(scope, id);

    const { externalId, bucketName } = config;
    const roleName =
      config.roleName ?? this.node.path.replace(/\//g, '-').toLowerCase();

    const callerIdentity = new DataAwsCallerIdentity(this, 'caller-identity');
    const awsAccountId = callerIdentity.accountId;

    const assumeRolePolicy = new UnityCatalogAssumeRolePolicy(
      this,
      'assume-role-policy',
      {
        awsAccountId,
        externalId,
        roleName,
      },
    );

    const role = new iamRole.IamRole(this, 'resource', {
      name: roleName,
      assumeRolePolicy: assumeRolePolicy.json,
      forceDetachPolicies: true,
    });

    const policyDocument = new UnityCatalogPolicy(role, 'policy-document', {
      awsAccountId,
      bucketName,
      roleName,
    });

    new iamRolePolicy.IamRolePolicy(role, 'policy', {
      role: roleName,
      name: 'unity-catalog-policy',
      policy: policyDocument.json,
    });

    this.roleName = role.name;
    this.roleArn = role.arn;
  }
}
