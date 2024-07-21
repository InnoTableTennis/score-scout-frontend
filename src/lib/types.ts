export interface ITournament {
  title: string;
  slug: string;
  date: Date | string;
  participantsCount: number;
  gamesPlayedCount: number;
  customText: string;
}
