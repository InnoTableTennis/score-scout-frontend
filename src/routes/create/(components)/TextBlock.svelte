<script lang="ts">
  import { cn } from '$lib/utils';

  export let title: string;

  type $$Props = {
    title: string;
    class?: string | undefined;
  };

  let className: $$Props['class'] = undefined;
  export { className as class };
</script>

<div
  class={cn(
    'hover pl-6 rounded-[16px] w-[250px] h-[250px] shadow-[0_0_4px_2px_#0000003f] text-primary transition-colors ease-in-out hover:text-white hover:bg-primary',
    className
  )}
>
  <div class="pt-4 text-xl font-bold">{title}</div>
  <p class="p-3 px-2 text-s leading-7 font-medium outline-none text-placeholder-foreground-hint">
    <slot />
  </p>
</div>
