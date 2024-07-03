<script lang="ts">
	export let onChange: (isChecked: boolean) => void;
	export let label: string = '';
	export let disabled: boolean = false;

	let isChecked = false;

	function toggle() {
		isChecked = !isChecked;
		onChange(isChecked);
	}
</script>

<label>
	<input
		type="checkbox"
		bind:checked={isChecked}
		on:change={toggle}
		{disabled}
	/>
	{label}
</label>
