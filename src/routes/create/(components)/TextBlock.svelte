<script type="ts">

	export let title = '';
	export let value = '';
	export let className = '';

</script>


<div style="box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25)" class={`hover pl-6 rounded-[16px] w-[250px] h-[250px] shadow ${className}`}>
	<div class="text-primary pt-4 text-xl font-bold">{title}</div>
	<p class="p-3 px-2 text-s leading-7 font-medium outline-none placeholder-foreground-hint">{value}</p>
</div>

<style>
    .hover {
        transition: background-color 0.2s ease-out 100ms
    }

    .hover:hover {
        background-color: rgba(210, 45, 25, 1);
        color: white;
    }
		.hover:hover .text-primary {
			color: white;
		}
</style>