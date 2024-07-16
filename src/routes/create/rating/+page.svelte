<script>
  import Switch from '$lib/components/switch.svelte';
  import Navbar from '$lib/components/navbar.svelte';
  import Page from '$lib/components/page.svelte';
  import NavButtons from '../(components)/NavButtons.svelte';
  import { customGoto } from '$lib/utils';
</script>

<Navbar
  title="Create tournament"
  links={[
    { name: 'Choose rating', href: '/create/rating', active: true },
    { name: 'Add players', href: '/create/players' },
    { name: 'Number of stages', href: '/create/stages' },
    { name: 'First stage', href: '/create/stage_1' },
    { name: 'Second stage', href: '/create/stage_2' },
  ]}
></Navbar>

<Page>
  <div class="flex h-screen w-full bg-white p-4 flex-row gap-5 pt-[225px] pl-[50px]">
    <Switch />
    <div class="text-lg text-foreground-hint">Use rating system</div>
  </div>
</Page>
<NavButtons
  next={() => {
    customGoto('/create/players');
  }}
/>
