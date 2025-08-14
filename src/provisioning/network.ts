import { MwsNetworks } from '@cdktf/provider-databricks/lib/mws-networks';
import { DatabricksProvider } from '@cdktf/provider-databricks/lib/provider';
import { Construct } from 'constructs';

export interface NetworkConfig {
  readonly provider: DatabricksProvider;
  readonly databricksAccountId: string;
  readonly networkName?: string;
  readonly vpcId: string;
  readonly subnetIds: string[];
  readonly securityGroupIds: string[];
}

export class Network extends Construct {
  public readonly accountId: string;
  public readonly networkId: string;
  public readonly networkName: string;

  constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id);

    const { provider, vpcId, subnetIds, securityGroupIds } = config;
    const databricksAccountId =
      config.databricksAccountId ?? provider.accountId ?? '';
    const networkName = config.networkName ?? this.node.path;

    const network = new MwsNetworks(this, 'resource', {
      provider,
      accountId: databricksAccountId,
      networkName,
      vpcId,
      subnetIds,
      securityGroupIds,
    });

    this.accountId = network.accountId;
    this.networkId = network.networkId;
    this.networkName = network.networkName;
  }
}
