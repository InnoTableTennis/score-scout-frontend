<script>
	import InputShadowed from '$lib/components/Input_shadowed.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Page from '$lib/components/page.svelte';
	import Button from '$lib/components/button.svelte';
	import NavButtons from '../(components)/NavButtons.svelte';
</script>


<Navbar
	title="Create tournament"
	links={[
		{ name: 'Choose rating', href: '/create/rating' },
		{ name: 'Add players', href: '/create/players', active: true},
		{ name: 'Number of stages', href: '/create/stages' },
		{ name: 'First stage', href: '/create/stage_1' },
		{ name: 'Second stage', href: '/create/stage_2' },
	]}
>
</Navbar>


<Page>
	<div class="h-screen w-full bg-white p-4 gap-5 pt-[225px] pl-[50px]">
		<div class="flex flex-col">
			<div class="font-bold text-[22px] text-primary pb-5">Add player</div>
			<InputShadowed class="mt-1 mb-5 w-[300px]" placeholder="Player's name" />
			<InputShadowed class="mt-1 w-[300px] mb-8" placeholder="Rating (optional)" />
			<Button class="w-[140px] mb-9">Add +</Button>
			<div class="pl-[6rem] align-middle">
				<div class="text-xl">or you can upload csv</div>
				<Button class="ml-10 mt-3" variant="secondary">Upload <img class="w-[25px]" src="/upload_logo.png" alt="upload"/></Button>
			</div>
		</div>
	</div>
</Page>

<NavButtons next={true} prev={true}/>