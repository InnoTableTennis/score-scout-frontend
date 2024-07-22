<script lang="ts">
  import { cn, slugify } from '$lib/utils.js';
  import { User, Zap, Star, Trophy } from 'lucide-svelte';
  import Button from '$lib/components/Button.svelte';

  export let title: string;
  export let date: Date | string;
  export let participantsCount: number;
  export let gamesPlayedCount: number;
  export let customText: string;

  let className: string | undefined = undefined;
  export { className as class };

  function formatDate(date: Date | string) {
    if (typeof date === 'string') {
      return new Date(date).toLocaleDateString();
    }
    return date.toLocaleDateString();
  }

  function submitTitle(event: Event) {
    const form = (event.target as HTMLElement).closest('form');
    title = form?.querySelector('[contenteditable="true"]')?.textContent || title;
    form?.submit();
  }
</script>

<div class={cn('flex flex-col md:flex-row p-6 bg-secondary hover pt-20 w-full max-w-full', className)}>
  <div class="flex-1 flex flex-col">
    <form method="POST">
      <div class="text-2xl font-bold text-primary" contenteditable="true" on:blur={submitTitle}>
        {title}
      </div>
      <input type="hidden" name="slug" value={slugify(title)} />
      <input type="hidden" name="action" value="edit" />
      <input type="hidden" name="title" value={title} />
    </form>
    <div class="flex items-center mt-4">
      <User class="w-6 h-6 mr-2 text-nav-inactive" fill="currentColor" />
      <p class="text-black leading-7 font-medium outline-none">
        <span class="font-bold text-black">{participantsCount}</span> participants
      </p>
    </div>
    <div class="flex items-center mt-2">
      <Zap class="w-6 h-6 mr-2 text-nav-inactive" fill="currentColor" />
      <p class="text-black leading-7 font-medium outline-none">
        <span class="font-bold text-black">{gamesPlayedCount}</span> games played
      </p>
    </div>
    <div class="flex items-center mt-2">
      <Star class="w-6 h-6 mr-2 text-nav-inactive" fill="currentColor" />
      <p class="leading-7 font-medium outline-none"><span class="font-bold text-black">{customText}</span></p>
    </div>
  </div>

  <div class="flex flex-col justify-between ml-6 mt-4 md:mt-0">
    <div class="text-black text-right md:text-right mb-2">
      {formatDate(date)}
    </div>

    {#if customText === 'In progress'}
      <div class="flex justify-end mt-auto mb-5">
        <form method="POST">
          <input type="hidden" name="slug" value={slugify(title)} />
          <input type="hidden" name="action" value="archive" />
          <Button class="text-[20px] font-normal" type="submit">
            Finish tournament
            <Trophy class="w-6 h-6 ml-2 text-white" fill="currentColor" />
          </Button>
        </form>
      </div>
    {/if}
  </div>
</div>
