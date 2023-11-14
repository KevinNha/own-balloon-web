import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'
import { unmarshall } from '@aws-sdk/util-dynamodb';

export const load = async () => {
  const tableName = process.env.TABLE_NAME
  const db = new DynamoDBClient()

  const scan = new ScanCommand({
    TableName: tableName,
  })

  const results = await db.send(scan);
  if (results.Items && results.Items.length > 0) {
    const unmarshalledData = results.Items.map(item => {
      return unmarshall(item)
    })
    return { items: unmarshalledData } 
  }

  return { items: [] }
}