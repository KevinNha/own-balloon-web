import type { PageServerLoad } from './$types';
import { getItemData } from '$lib/server/dynamodb';
import { getPresignedURL } from '$lib/server/s3';

export const load: PageServerLoad = async () => {
	const tableName = process.env.TABLE_NAME;
	const bucketName = process.env.BUCKET_NAME;

	const { items } = await getItemData(tableName);
	items.map(async (item: Item) => {
		const presignedURL = await getPresignedURL(item.imageBucketKey, bucketName);
		item.imageURL = presignedURL;
	});

	return { items };
};
