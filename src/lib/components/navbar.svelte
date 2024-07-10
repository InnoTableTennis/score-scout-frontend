<script lang="ts">
  import { cn } from '$lib/utils';
  import { Menu, Plus } from 'lucide-svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  export let title: string | undefined = undefined;
  export let links: { name: string; href: string; active?: boolean }[] = [];
  export let customTitleStyles: string | undefined = undefined;

  let visible = false;

  function checkMobile() {
    if (window.innerWidth > 768) {
      visible = true;
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
      checkMobile();
    }
  });

  function handleClick() {
    visible = !visible;
  }
</script>

<button class="fixed top-4 left-4 w-10 h-10 z-50 md:hidden" on:click={handleClick}>
  {#if visible}
    <Plus class="h-full w-full transform rotate-45 text-primary" />
  {:else}
    <Menu class="h-full w-full text-primary" />
  {/if}
</button>
{#if visible}
  <div class="w-full md:w-[325px] h-full fixed bg-secondary z-10" in:fly={{ x: -500 }} out:fly={{ x: -500 }}>
    <slot />
    {#if title || links.length > 0}
      <div class="z-10 absolute flex h-full w-full items-end justify-center flex-col">
        {#if title}
          <h1 class={cn('text-3xl md:text-3xl w-full text-center text-primary font-medium py-10 select-none', customTitleStyles)}>
            {title}
          </h1>
        {/if}
        {#if links.length > 0}
          <ul class="pt-20">
            {#each links as { name, href, active }, _}
              <li>
                <a
                  {href}
                  class={cn(
                    'z-50 relative block py-1 my-3 px-7 text-2xl md:text-xl text-nav-inactive text-right font-medium transform transition-all ease hover:scale-102',
                    active
                      ? 'text-primary after:w-2 after:h-7 after:rounded-2 after:bg-primary after:right-0 after:block after:absolute after:top-0 after:bottom-0 after:m-auto'
                      : undefined
                  )}
                >
                  {name}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {/if}
  </div>
{/if}
