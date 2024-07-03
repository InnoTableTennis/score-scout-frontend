<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	export let onChange: (value: string) => void = () => {};
	export let value: string = '';
	export let placeholder: string = '';
	export let disabled: boolean = false;
	export let label: string = '';

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		onChange(target.value);
	}

	type $$Props = HTMLAttributes<HTMLInputElement> & {
		value?: string;
		placeholder?: string;
		disabled?: boolean;
		onChange?: (value: string) => void;
		label?: string;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div>
	<label class="text-sm font-normal text-gray-500">
		{#if label}
			{label}
			<br />
		{/if}
		<input
			type="text"
			bind:value
			{placeholder}
			{disabled}
			on:input={handleChange}
			class={cn(
				'border-secondary rounded-20 border-2 p-2.5 px-5 text-foreground-primary text-xl leading-7 font-medium focus:border-primary outline-none transition-all placeholder-foreground-hint',
				className
			)}
			class:mt-1={label}
		/>
	</label>
</div>
