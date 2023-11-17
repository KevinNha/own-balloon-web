import type { SSTConfig } from 'sst';
import { Bucket, Table, SvelteKitSite } from 'sst/constructs';

export default {
	config(_input) {
		return {
			name: 'own-balloon-web',
			region: 'us-west-2',
			profile: _input.stage === 'production' ? 'ownballoon-prod' : 'ownballoon-dev'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack, app }) {
			const stage = app.stage;
			const table = new Table(stack, `${stage}-Items`, {
				fields: {
					id: 'string'
				},
				primaryIndex: { partitionKey: 'id' }
			});

			const bucket = new Bucket(stack, `${stage}-own-balloon-images`);

			const site = new SvelteKitSite(stack, 'site', {
				bind: [table, bucket],
				environment: {
					TABLE_NAME: table.tableName,
					BUCKET_NAME: bucket.bucketName
				}
			});
			stack.addOutputs({
				url: site.url
			});
		});
	}
} satisfies SSTConfig;
