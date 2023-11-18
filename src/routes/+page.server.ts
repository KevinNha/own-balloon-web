import type { PageServerLoad } from './$types';
import { Table } from 'sst/node/table';
import { getItemData } from '$lib/server/dynamodb';

export const load: PageServerLoad = async () => {
	const { items } = await getItemData(Table.Items.tableName);
	items.map(async (item: Item) => {
		const imgURL = `https://${process.env.IMAGES_CLOUDFRONT_URL}/${item.imageBucketKey}`;
		item.imageURL = imgURL;
	});

	return { items };
};
