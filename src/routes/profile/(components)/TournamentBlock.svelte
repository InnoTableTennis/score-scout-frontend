<script lang="ts">
  import { User, Zap, Star } from 'lucide-svelte';

  export let title = '';
  export let date: Date | string = '';
  export let className = '';
  export let participantsCount = 0;
  export let gamesPlayedCount = 0;
  export let customText = '';

  function formatDate(date: Date | string) {
    if (typeof date === 'string') {
      return new Date(date).toLocaleDateString();
    }
    return date.toLocaleDateString();
  }
</script>

<div style="box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25)" class={`hover pl-6 pr-6 rounded-[16px] shadow ${className} py-5`}>
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
</div>
