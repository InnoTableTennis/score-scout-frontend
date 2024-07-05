<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type FormInputEvent<T extends Event = Event> = T & {
		currentTarget: EventTarget & HTMLInputElement;
	};

	interface InputEvents {
		blur: FormInputEvent<FocusEvent>;
		change: FormInputEvent<Event>;
		click: FormInputEvent<MouseEvent>;
		focus: FormInputEvent<FocusEvent>;
		focusin: FormInputEvent<FocusEvent>;
		focusout: FormInputEvent<FocusEvent>;
		keydown: FormInputEvent<KeyboardEvent>;
		keypress: FormInputEvent<KeyboardEvent>;
		keyup: FormInputEvent<KeyboardEvent>;
		mouseover: FormInputEvent<MouseEvent>;
		mouseenter: FormInputEvent<MouseEvent>;
		mouseleave: FormInputEvent<MouseEvent>;
		mousemove: FormInputEvent<MouseEvent>;
		paste: FormInputEvent<ClipboardEvent>;
		input: FormInputEvent<InputEvent>;
		wheel: FormInputEvent<WheelEvent>;
	}

	type $$Props = HTMLInputAttributes;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Events = InputEvents;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'] = '';
	export { className as class };
	export let readonly: $$Props['readonly'] = false;
</script>

<input
	class={cn(
		'border-secondary rounded-20 border-2 p-2.5 px-5 text-foreground-primary text-xl leading-7 font-medium focus:border-primary outline-none transition-all placeholder-foreground-hint disabled:opacity-50',
		className
	)}
	bind:value
	{readonly}
	on:blur
	on:change
	on:click
	on:focus
	on:focusin
	on:focusout
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:mousemove
	on:paste
	on:input
	on:wheel|passive
	{...$$restProps}
/>
