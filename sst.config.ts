import type { SSTConfig } from "sst";
import { Table , SvelteKitSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "own-balloon-web",
      region: "us-west-2",
      profile: _input.stage === "production" ? "ownballoon-prod" : "ownballoon-dev",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack, app }) {
      const stage = app.stage;
      const table = new Table(stack, `${stage}-Items`, {
        fields: {
         id: "string"
        },
        primaryIndex: {partitionKey: "id"}
      })


      const site = new SvelteKitSite(stack, "site", {
        bind: [table],
        environment: {
          TABLE_NAME: table.tableName
        }
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
