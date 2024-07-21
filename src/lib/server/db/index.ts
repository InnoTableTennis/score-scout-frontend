import Database from 'better-sqlite3';
import type { ITournament } from '$lib/types';
import { init } from '$lib/server/db/init';

export const db = new Database('db.sqlite', { verbose: console.log });
init();

export function getTournaments(): ITournament[] {
  const stmt = db.prepare('SELECT * FROM tournaments');
  const tournaments = stmt.all();
  return tournaments as ITournament[];
}
