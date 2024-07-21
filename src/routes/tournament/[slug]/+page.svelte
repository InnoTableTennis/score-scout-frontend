<script lang="ts">
  import TournamentTable from './(components)/TournamentTable.svelte';
  import TournamentHeader from './TournamentHeader.svelte';

  const tournamentInfo = {
    players: [
      {
        id: 0,
        name: 'Svetlana Kuznetsova',
      },
      {
        id: 1,
        name: 'Serena Williams',
      },
      {
        id: 2,
        name: 'Egor Gerasimov',
      },
      {
        id: 3,
        name: 'Daniil Medvedev',
      },
      {
        id: 4,
        name: 'Andrey Rublev',
      },
      {
        id: 5,
        name: 'Anastasia Pavlyuchenkova',
      },
    ],

    matches: [
      {
        firstPlayer: 0,
        secondPlayer: 1,
      },
      {
        firstPlayer: 2,
        secondPlayer: 3,
      },
      {
        firstPlayer: 4,
        secondPlayer: 5,
      },
    ],
  };
</script>

<TournamentHeader
  title="Fall Students Tournament"
  date={new Date('2023-10-22')}
  participantsCount={32}
  gamesPlayedCount={124}
  customText="In progress"
/>
<div class="p-4 md:p-6 w-screen">
  <div class="md:grid md:grid-cols-2 gap-6">
    <TournamentTable group="First group" {tournamentInfo} class="mb-4 md:mb-0 md:!w-full" />
    <TournamentTable group="Second group" {tournamentInfo} class="mb-4 md:mb-0 md:!w-full" />
    <TournamentTable group="Third group" {tournamentInfo} class="mb-4 md:mb-0 md:!w-full" />
    <TournamentTable group="Fourth group" {tournamentInfo} class="mb-4 md:mb-0 md:!w-full" />
  </div>
</div>
