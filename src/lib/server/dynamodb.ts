import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

import { unmarshall } from '@aws-sdk/util-dynamodb';
import { error } from '@sveltejs/kit';
import mockData from '../../mock/mockItemsResponse.json';

const db = new DynamoDBClient();

export const getItemData = async (tableName?: string) => {
	// if (!tableName) {
	// 	throw error(404, `Table "${tableName}" not found`);
	// }

	// const scanParam = new ScanCommand({
	// 	TableName: tableName
	// });

	// const results = await db.send(scanParam);

	// if (results.Items && results.Items.length > 0) {
	// 	const unmarshalledData = results.Items.map((item) => {
	// 		return unmarshall(item);
	// 	});
	// 	return { items: unmarshalledData as Item[] };
	// }

	// return { items: [] };

	// TODO Use above to get real data
	return {
		items: mockData.items
	};
};
