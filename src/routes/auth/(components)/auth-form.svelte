<script lang="ts">
	import Form from '$lib/components/form.svelte';
	import { fly } from 'svelte/transition';

	export let title: string;
	export let handleSubmit: () => void;
</script>

<div in:fly={{ y: 50 }} out:fly={{ y: -50 }}>
	<Form on:submit={handleSubmit} class="p-10 w-[560px] shadow-form rounded-30">
		<h1 class="text-4xl font-bold">{title}</h1>
		<slot name="inputs" />
		<div class="flex justify-end w-full">
			<slot name="button" />
		</div>
	</Form>
</div>
