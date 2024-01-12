import type { PageServerLoad } from './$types';
import { Table } from 'sst/node/table';
import { getCategoriesData, getItemData } from '$lib/server/dynamodb';

export const load: PageServerLoad = async () => {
	const { items } = await getItemData(Table.Items.tableName);
	items.map(async (item: Item) => {
		const imgURL = `https://${process.env.IMAGES_CLOUDFRONT_URL}/featured/${item.id}.png`;
		item.imageURL = imgURL;
	});

	const { categories } = await getCategoriesData(Table.Categories.tableName);
	categories.map(async (category: Category) => {
		// TODO get real image
		const imgURL = `https://${process.env.IMAGES_CLOUDFRONT_URL}/categories/mockCategoryImage.png`;
		category.imageURL = imgURL;
	});

	return { items, categories };
};
