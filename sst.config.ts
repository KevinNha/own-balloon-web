import type { SSTConfig } from 'sst';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
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
		app.stack(function Site({ stack }) {
			const itemsTable = new Table(stack, 'Items', {
				fields: {
					id: 'string'
				},
				primaryIndex: { partitionKey: 'id' }
			});

			const carouselTable = new Table(stack, 'CarouselItems', {
				fields: {
					id: 'string', // UUID
					order: 'number'
				},
				primaryIndex: { partitionKey: 'id', sortKey: 'order' }
			});

			const imagesBucket = new Bucket(stack, 'OwnBalloonImages');

			const imagesCloudFront = new Distribution(stack, 'ImagesCloudFront', {
				defaultBehavior: { origin: new S3Origin(imagesBucket.cdk.bucket) }
			});

			const site = new SvelteKitSite(stack, 'site', {
				bind: [itemsTable, carouselTable, imagesBucket],
				environment: {
					IMAGES_CLOUDFRONT_URL: imagesCloudFront.domainName
				}
			});
			stack.addOutputs({
				url: site.url
			});
		});
	}
} satisfies SSTConfig;
