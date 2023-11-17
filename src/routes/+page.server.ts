import type { PageServerLoad } from './$types';
import { scanTable } from '$lib/server/dynamodb';

export const load: PageServerLoad = async () => {
	const tableName = process.env.TABLE_NAME;

	return scanTable(tableName);
};
