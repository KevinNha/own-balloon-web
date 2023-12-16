import { PublishCommand, SNSClient } from '@aws-sdk/client-sns';

const sns = new SNSClient();

type ContactData = {
	name: string;
	email: string;
	message: string;
};

export const sendContactEmail = async (data: ContactData) => {
	const emailInput = {
		TopicArn: process.env.CONTACT_SNS_TOPIC_ARN,
		Message: `Requester: ${data.name}
Email: ${data.email}
    
${data.message}`,
		Subject: `Contact inquiry from ${data.name}`
	};
	const emailPublishCommand = new PublishCommand(emailInput);
	await sns.send(emailPublishCommand);
};
