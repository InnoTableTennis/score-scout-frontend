<script lang="ts">
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
  <div class="flex flex-col">
    <div class="pt-4 text-2xl font-bold">{title}</div>
    <div class="text-foreground-select-option text-right mt-1">{formatDate(date)}</div>
  </div>
  <div class="flex items-center mt-4">
    <img src="/images/PeopleFilled.png" alt="Описание изображения 1" class="w-6 h-6 mr-2" />
    <p class="text-foreground-select-option leading-7 font-medium outline-none">{participantsCount} participants</p>
  </div>
  <div class="flex items-center mt-2">
    <img src="/images/flash.png" alt="Описание изображения 2" class="w-6 h-6 mr-2" />
    <p class="text-foreground-select-option leading-7 font-medium outline-none">{gamesPlayedCount} games played</p>
  </div>
  <div class="flex items-center mt-2">
    <img src="/images/ranking.png" alt="Описание изображения 3" class="w-6 h-6 mr-2" />
    <p class="leading-7 font-medium outline-none">{customText}</p>
  </div>
</div>
