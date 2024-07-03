<script lang="ts">
	export let onChange: (selectedOption: string) => void;
	export let options: string[] = [];
	export let defaultOption: string | null = null;

	let selectedOption: string = '';

	function handleChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedOption = target.value;
		onChange(selectedOption);
	}
</script>

<select bind:value={selectedOption} on:change={handleChange}>
	{#if defaultOption === null}
		<option value="">Select an option</option>
	{/if}
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>
