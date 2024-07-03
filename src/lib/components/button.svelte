<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	export let onClick: () => void = () => {};
	export let disabled: boolean = false;
	export let type: 'button' | 'submit' | null | undefined = 'button';

	function handleClick() {
		if (disabled) return;
		onClick();
	}

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		type?: 'button' | 'submit' | null | undefined;
		disabled?: boolean;
		onClick?: () => void;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<button
	on:click={handleClick}
	{type}
	{disabled}
	class={cn(
		'text-white font-bold text-xl leading-6 flex items-center justify-center p-2.5 px-5 rounded-20 bg-primary gap-3',
		className
	)}
>
	<slot />
</button>
