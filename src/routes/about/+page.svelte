<script lang="ts">
  import Checkbox from '$lib/components/Checkbox.svelte';
  import Button from '$lib/components/Button.svelte';
  import Input from '$lib/components/Input.svelte';
  import Select from '$lib/components/Select.svelte';
  import Label from '$lib/components/Label.svelte';
  import Textarea from '$lib/components/Textarea.svelte';
  import Switch from '$lib/components/Switch.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Page from '$lib/components/Page.svelte';
  import { Plus, LogOut, CircleCheck } from 'lucide-svelte';
  import { customGoto } from '$lib/utils';
  import Modal from '$lib/components/Modal.svelte';

  let dialogOpen = false;
</script>

<Navbar
  title="Example page"
  links={[
    { name: 'Main', href: '/', active: true },
    { name: 'Examples', href: '/example' },
    { name: 'Sign In', href: '/auth/signin' },
    { name: 'Sign Up', href: '/auth/signup' },
  ]}
>
  <div slot="before" class="flex justify-end md:justify-start">
    <Button variant="ghost" class="mt-10 mx-6 md:mx-10 text-2xl md:text-lg gap-3 md:gap-2 flex items-center justify-center">
      <LogOut class="w-8 h-8 md:w-6 md:h-6" />
      Logout
    </Button>
  </div>
  <div slot="after" class="flex justify-end">
    <Button
      class="rounded-full mb-8 mr-8 text-xl md:text-base leading-5 gap-2.5 flex items-center justify-center"
      on:click={() => {
        customGoto('/create/rating');
      }}
    >
      <Plus class="w-7 h-7 md:w-5 md:h-5" />
      Create tournament
    </Button>
  </div>
</Navbar>
<Page>
  <div class="h-screen w-full bg-white p-4">
    <!--  Write about page with team and github repository and license-->
  </div>
</Page>
