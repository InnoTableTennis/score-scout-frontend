<script>
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  const currentPageStore = derived(page, ($page) => $page.url.pathname);
</script>

<div class="absolute top-5 right-10">
  <a href="/profile/active">
    {#if $currentPageStore.includes('/profile')}
      <img src="/images/profile.png" alt="Profile Icon" class="w-10 h-10" />
    {:else}
      <img src="/images/profile-inactive.png" alt="Default Icon" class="w-10 h-10" />
    {/if}
  </a>
</div>
