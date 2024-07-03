<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	export let onSubmit: () => void = () => {};

	type $$Props = HTMLAttributes<HTMLFormElement> & {
		onSubmit?: () => void;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<form
	on:submit|preventDefault={onSubmit}
	class={cn('flex flex-col gap-5', className)}
>
	<slot />
</form>
