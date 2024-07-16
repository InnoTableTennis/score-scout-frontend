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
	type $$Events = InputEvents;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'] = '';
	export { className as class };
	export let readonly: $$Props['readonly'] = false;
</script>

<input
	style="box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25)"
	class={cn(
    'input rounded-[16px] p-2.5 px-5 md:text-xl leading-7 font-medium outline-none placeholder-foreground-hint',
    className
  )}
	bind:value
	{readonly}
	{...$$restProps}
/>


<!--/* Bacground Colors/Background */-->
<!--background: #FFFFFF;-->
<!--/* shadow */-->
<!--box-shadow: ;-->
<!--border-radius: 16px;-->


<!--/* Player’s name */-->

<!--position: absolute;-->
<!--width: 129px;-->
<!--height: 20px;-->
<!--left: 20px;-->
<!--top: calc(50% - 20px/2 - 95px);-->

<!--font-family: 'Inter';-->
<!--font-style: normal;-->
<!--font-weight: 400;-->
<!--font-size: 20px;-->
<!--line-height: 20px;-->
<!--/* identical to box height, or 100% */-->
<!--display: flex;-->
<!--align-items: center;-->

<!--/* Text colors/Text Hint */-->
<!--color: #ACA4A2;-->

