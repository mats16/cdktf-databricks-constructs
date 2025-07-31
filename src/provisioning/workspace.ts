import { Construct } from "constructs";
import { DatabricksProvider } from "@cdktf/provider-databricks/lib/provider";
import { MwsWorkspaces } from "@cdktf/provider-databricks/lib/mws-workspaces";
import { Storage } from "./storage";
//import { Network } from "./network";
import { Credentials } from "./credentials";
import { UnityCatalogMetastore } from "../unity-catalog";

type ComputeMode = "SERVERLESS";

export interface WorkspaceConfig {
  provider: DatabricksProvider;
  databricksAccountId: string;
  workspaceName?: string;
  workspaceUrl?: string;
  region: string;
  storage?: Storage;
  credentials?: Credentials;
  //network?: Network;
  metastore?: UnityCatalogMetastore;
  computeMode?: ComputeMode;
}

export class Workspace extends Construct {
  public readonly accountId: string;
  public readonly workspaceId: number;
  public readonly workspaceName: string;
  public readonly workspaceUrl: string;
  public readonly region: string;
  public readonly cloud: string;
  public readonly deploymentName: string;
  public readonly storage?: Storage;
  public readonly credentials?: Credentials;
  //public readonly network?: Network;
  public readonly metastore?: UnityCatalogMetastore;
  /**
   * Classic Workspace
   */
  constructor(scope: Construct, id: string, config: WorkspaceConfig) {
    super(scope, id);

    const { provider, region, computeMode } = config;
    const databricksAccountId =
      config.databricksAccountId ?? provider.accountId ?? "";
    const workspaceName =
      config.workspaceName ?? this.node.path.replace(/\//g, "-");

    let storage: Storage | undefined = undefined;
    let credentials: Credentials | undefined = undefined;
    if (computeMode !== "SERVERLESS") {
      storage =
        config.storage ??
        new Storage(this, "storage", {
          provider,
          databricksAccountId,
          region,
        });
      credentials =
        config.credentials ??
        new Credentials(this, "credentials", {
          provider,
          databricksAccountId,
          policyType: "managed",
          //policyType: network == undefined ? "managed" : "customer",
        });
    }

    const workspace = new MwsWorkspaces(this, "resource", {
      provider,
      accountId: databricksAccountId,
      workspaceName,
      awsRegion: region,
      storageConfigurationId: storage?.storageConfigurationId,
      credentialsId: credentials?.credentiasId,
      //networkId: network?.networkId,
      computeMode: computeMode,
    });

    //const metastore = config.metastore ?? new UnityCatalogMetastore(this, "metastore", {
    //  provider,
    //  databricksAccountId,
    //  region,
    //  owner: "admins",
    //});

    //metastore.assign("default", workspace.workspaceId);

    this.accountId = workspace.accountId;
    this.workspaceId = workspace.workspaceId;
    this.workspaceName = workspace.workspaceName;
    this.workspaceUrl = workspace.workspaceUrl;
    this.region = workspace.awsRegion;
    this.deploymentName = workspace.deploymentName;
    this.cloud = workspace.cloud;
    this.storage = storage;
    this.credentials = credentials;
    //this.network = network;
    //this.metastore = metastore;
  }
}

export class ServerlessWorkspace extends Workspace {
  /**
   * Serverless Workspace
   */
  constructor(scope: Construct, id: string, config: WorkspaceConfig) {
    const { provider, databricksAccountId, region, metastore } = config;
    super(scope, id, {
      provider,
      databricksAccountId,
      region,
      //network,
      metastore,
      computeMode: "SERVERLESS",
    });
  }
}
