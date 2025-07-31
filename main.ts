#!/usr/bin/env node
import { App } from "cdktf";
import { Construct } from "constructs";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { DatabricksProvider } from "@cdktf/provider-databricks/lib/provider";
import { TerraformStack } from "cdktf";
import { 
  Workspace, 
} from "./src";

class DatabricksStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    
    new AwsProvider(this, "aws", {
      profile: process.env.AWS_PROFILE || "default",
    });

    const databricksProvider = new DatabricksProvider(this, "databricks", {
      alias: "mws",
      profile: process.env.DATABRICKS_PROFILE || "default",
    });

    new Workspace(this, "dev1", {
      provider: databricksProvider,
      databricksAccountId: "0d26daa6-5e44-4c97-a497-ef015f91254a",
      region: 'us-east-1',
    });
  }
}

const app = new App();
new DatabricksStack(app, "cdktf-constructs");
app.synth();
