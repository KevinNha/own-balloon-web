import { sendContactEmail } from '$lib/server/sns';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;

		try {
			await sendContactEmail({ name, email, message });
			return { success: true };
		} catch (error) {
			console.error(error);
			return {
				success: false,
				statusCode: 500,
				body: JSON.stringify({ message: 'Failed to send message' })
			};
		}
	}
} satisfies Actions;
