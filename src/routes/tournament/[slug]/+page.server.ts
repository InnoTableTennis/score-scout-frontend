import type { PageServerLoad } from './$types';
import { archiveTournament, getTournament } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';

export const load = (async (event) => {
  const { slug } = event.params;
  const tournament = getTournament(slug);
  if (!tournament) throw redirect(303, '/profile/active');
  return {
    tournament,
  };
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    if (formData.has('slug')) {
      const slug = formData.get('slug') as string;
      archiveTournament(slug);
      throw redirect(303, '/profile/archived');
    }
  },
};
