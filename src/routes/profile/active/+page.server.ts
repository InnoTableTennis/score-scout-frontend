import { getTournaments } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (() => {
  const tournaments = getTournaments();

  return {
    tournaments,
  };
}) satisfies PageServerLoad;
