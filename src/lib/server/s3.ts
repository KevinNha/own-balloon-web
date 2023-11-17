import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client();

export const getPresignedURL = async (key: string, bucketName?: string) => {
	const command = new GetObjectCommand({
		Bucket: bucketName,
		Key: key
	});

	return await getSignedUrl(s3, command, { expiresIn: 3600 });
};
