<script lang="ts">
  import Input from '$lib/components/Input.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Page from '$lib/components/Page.svelte';
  import Button from '$lib/components/Button.svelte';
  import NavButtons from '../(components)/NavButtons.svelte';
  import { customGoto } from '$lib/utils';
  import { Plus, Upload } from 'lucide-svelte';
  import Table from '$lib/components/Table.svelte';

  let rankingsColumns = ['Name', 'Rating'];
  let rankingsRows = [
    ['Name Surname', '184'],
    ['Eman Emanrus', '123'],
  ];
</script>

<Navbar
  title="Create tournament"
  links={[
    { name: 'Choose rating', href: '/create/rating' },
    { name: 'Add players', href: '/create/players', active: true },
    { name: 'Number of stages', href: '/create/stages' },
    { name: 'First stage', href: '/create/stage_1' },
    { name: 'Second stage', href: '/create/stage_2' },
  ]}
></Navbar>

<Page>
  <div class="h-screen w-full bg-white p-4 gap-5 pt-52 px-8">
    <div class="flex flex-col md:flex-row gap-10">
      <div class="flex flex-col">
        <div class="font-bold text-[22px] text-primary pb-5">Add player</div>
        <Input variant="shadowed" class="mt-1 mb-5 w-[300px]" placeholder="Player's name" />
        <Input variant="shadowed" class="mt-1 w-[300px] mb-8" placeholder="Rating (optional)" />
        <Button class="w-[140px] mb-9">
          Add
          <Plus class="w-6 h-6" />
        </Button>
        <div class="flex flex-col items-center gap-2 md:pl-[6rem] md:items-start">
          <div class="text-xl">or upload csv</div>
          <Button variant="secondary">
            Upload
            <Upload class="w-6 h-6" />
          </Button>
        </div>
      </div>
      <div class="ml-auto">
        <Table columns={rankingsColumns} rows={rankingsRows} />
      </div>
    </div>
  </div>
</Page>

<NavButtons
  next={() => {
    customGoto('/create/stages');
  }}
  prev={() => {
    customGoto('/create/rating');
  }}
/>
