<script type="ts">
	import Button from '$lib/components/button.svelte';

	export let next = false;
	export let prev = false;
</script>

<div class="flex flex-row pb-[20px] mr-12 fixed bottom-0 right-0">
	{#if prev}
		<Button class="mr-4" variant="secondary"><img class="w-[25px]" src="/arrow_left.png" alt="al" />Back</Button>
	{/if}
	{#if next}
		<Button>Next<img class="w-[25px]" src="/arrow_right.png" alt="ar" /></Button>
	{/if}
</div>