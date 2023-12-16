import type { SSTConfig } from 'sst';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { Bucket, Table, SvelteKitSite } from 'sst/constructs';
import { EmailSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';
import { Topic } from 'aws-cdk-lib/aws-sns';

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
			const itemsTable = new Table(stack, 'Items', {
				fields: {
					id: 'string'
				},
				primaryIndex: { partitionKey: 'id' }
			});

			const categoriesTable = new Table(stack, 'Categories', {
				fields: {
					name: 'string',
					order: 'number'
				},
				primaryIndex: { partitionKey: 'name', sortKey: 'order' }
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

			const contactEmailSNSTopic = new Topic(stack, 'contactEmailSNSTopic');
			contactEmailSNSTopic.addSubscription(
				app.stage === 'prod'
					? new EmailSubscription('info@ownballoon.com ')
					: new EmailSubscription('developer.ownballoon@gmail.com')
			);

			const site = new SvelteKitSite(stack, 'site', {
				bind: [itemsTable, categoriesTable, carouselTable, imagesBucket],
				environment: {
					IMAGES_CLOUDFRONT_URL: imagesCloudFront.domainName,
					CONTACT_SNS_TOPIC_ARN: contactEmailSNSTopic.topicArn
				}
			});
			site.attachPermissions([contactEmailSNSTopic]);
			stack.addOutputs({
				url: site.url
			});
		});
	}
} satisfies SSTConfig;
