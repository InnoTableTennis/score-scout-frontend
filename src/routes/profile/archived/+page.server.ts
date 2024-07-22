import { getTournaments } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (() => {
  const tournaments = getTournaments('archived');
  return {
    tournaments,
  };
}) satisfies PageServerLoad;
