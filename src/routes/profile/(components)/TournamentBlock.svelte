<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { User, Zap, Star } from 'lucide-svelte';

  type $$Props = {
    title: string;
    slug: string;
    date: Date | string;
    class?: string | undefined;
    participantsCount: number;
    gamesPlayedCount: number;
    customText: string;
  };

  export let title: string;
  export let slug: string;
  export let date: Date | string;
  export let participantsCount: number;
  export let gamesPlayedCount: number;
  export let customText: string;

  let className: $$Props['class'] = undefined;
  export { className as class };

  function formatDate(date: Date | string) {
    if (typeof date === 'string') {
      return new Date(date).toLocaleDateString();
    }
    return date.toLocaleDateString();
  }
</script>

<a href={`/tournament/${slug}`} class={cn('shadow-[0_0_4px_2px_#0000003f] hover pl-6 pr-6 rounded-[16px] py-5', className)}>
  <div class="flex flex-wrap justify-between items-center">
    <div class="text-2xl font-bold">{title}</div>
    <div class="text-foreground-select-option mt-1">{formatDate(date)}</div>
  </div>
  <div class="flex items-center mt-4">
    <User class="w-6 h-6 mr-2 text-nav-inactive" fill="currentColor" />
    <p class="text-foreground-select-option leading-7 font-medium outline-none">{participantsCount} participants</p>
  </div>
  <div class="flex items-center mt-2">
    <Zap class="w-6 h-6 mr-2 text-nav-inactive" fill="currentColor" />
    <p class="text-foreground-select-option leading-7 font-medium outline-none">{gamesPlayedCount} games played</p>
  </div>
  <div class="flex items-center mt-2">
    <Star class="w-6 h-6 mr-2 text-nav-inactive" fill="currentColor" />
    <p class="leading-7 font-medium outline-none">{customText}</p>
  </div>
</a>
