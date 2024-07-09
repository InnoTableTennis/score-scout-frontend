import type { Actions, PageServerLoad } from './$types';
import { schema } from './schema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(schema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(schema));
		await new Promise((resolve) => setTimeout(resolve, 2000));
		if (!form.valid) {
			return fail(400, { form });
		}
		return { form };
	},
};
