import { Construct } from "constructs";
import { iamRole, iamRolePolicy } from '@cdktf/provider-aws'
import { DatabricksProvider } from '@cdktf/provider-databricks/lib/provider';
import { DataDatabricksAwsAssumeRolePolicy } from '@cdktf/provider-databricks/lib/data-databricks-aws-assume-role-policy';
import { DataDatabricksAwsCrossaccountPolicy } from '@cdktf/provider-databricks/lib/data-databricks-aws-crossaccount-policy';
import { MwsCredentials } from '@cdktf/provider-databricks/lib/mws-credentials';
import { TimeProvider } from '@cdktf/provider-time/lib/provider';
import { Sleep } from '@cdktf/provider-time/lib/sleep';

type PolicyType = "managed" | "customer" | "restricted";

export interface CredentialsConfig {
  provider: DatabricksProvider;
  databricksAccountId?: string;
  credentialsName?: string;
  policyType?: PolicyType;
}

export class Credentials extends Construct {
  public readonly databricksAccountId: string;
  public readonly credentiasId: string;
  public readonly credentialsName: string;
  public readonly iamRole: CrossAccountRole;

  /**
   * Databricks Credentials Configuration
   */
  constructor(scope: Construct, id: string, config: CredentialsConfig) {
    super(scope, id);

    const { provider } = config;
    const databricksAccountId = config.databricksAccountId ?? provider.accountId ?? "unknown";
    const credentialsName = config.credentialsName ?? this.node.path;
    const policyType = config.policyType ?? "managed";

    const crossAccountRole = new CrossAccountRole(this, 'cross-account-role', {
      externalId: databricksAccountId,
      roleName: credentialsName.replace(/\//g, '-') + "-cross-account-role",
      policyType,
    });

    // Add a 5 second delay to ensure the policy attachment has time to propagate
    new TimeProvider(this, 'time');
    const waitPolicyPropagation = new Sleep(this, 'wait-policy-propagation', {
      createDuration: '10s',
      dependsOn: [crossAccountRole.policy],
    });

    // Create Databricks Credential
    const credential = new MwsCredentials(this, 'resource', {
      provider,
      credentialsName,
      roleArn: crossAccountRole.roleArn,
      dependsOn: [waitPolicyPropagation],
    });

    this.databricksAccountId = credential.accountId;
    this.credentiasId = credential.credentialsId;
    this.credentialsName = credential.credentialsName;
    this.iamRole = crossAccountRole;
  }
}

interface CrossAccountRoleConfig {
  externalId: string;
  roleName?: string;
  policyType?: PolicyType;
}

export class CrossAccountRole extends Construct {
  public readonly roleArn: string;
  public readonly roleName: string;
  public readonly policy: iamRolePolicy.IamRolePolicy;

  /**
   * Cross Account IAM Role for Databricks
   */
  constructor(scope: Construct, id: string, config: CrossAccountRoleConfig) {

    super(scope, id);

    const externalId = config.externalId;
    const roleName = config.roleName ?? scope.node.path.replace(/\//g, '-').toLowerCase();
    const policyType = config.policyType ?? "managed";

    const assumeRolePolicy = new DataDatabricksAwsAssumeRolePolicy(this, 'assume-role-policy', { externalId });

    const role = new iamRole.IamRole(this, 'resource', {
      name: roleName,
      description: `Databricks Cross Account Role (${scope.node.path})`,
      assumeRolePolicy: assumeRolePolicy.json,
    });

    const crossAccountPolicyDocument = new DataDatabricksAwsCrossaccountPolicy(this, 'policy-document', { policyType });

    // Attach inline policy
    this.policy = new iamRolePolicy.IamRolePolicy(this, 'policy', {
      role: roleName,
      name: 'databricks-cross-account-policy',
      policy: crossAccountPolicyDocument.json,
    });

    this.roleArn = role.arn;
    this.roleName = role.name;
  }
}
