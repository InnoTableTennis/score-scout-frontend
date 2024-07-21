import Database from 'better-sqlite3';
import type { ITournament, IUser } from '$lib/types';
import { init } from '$lib/server/db/init';

export const db = new Database('db.sqlite', { verbose: console.log });
init();

export function getTournaments(): ITournament[] {
  const stmt = db.prepare('SELECT * FROM tournaments');
  const tournaments = stmt.all();
  return tournaments as ITournament[];
}

export function addUser(email: string, password: string) {
  const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
  stmt.run(email, password);
}

export function getUser(email: string): IUser | undefined {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email) as IUser;
}
