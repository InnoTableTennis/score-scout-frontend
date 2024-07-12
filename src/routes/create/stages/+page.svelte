<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Page from '$lib/components/page.svelte';
	import NavButtons from '../(components)/NavButtons.svelte';
	import TextBlock from '../(components)/TextBlock.svelte';
</script>


<Navbar
	title="Create tournament"
	links={[
		{ name: 'Choose rating', href: '/create/rating' },
		{ name: 'Add players', href: '/create/players' },
		{ name: 'Number of stages', href: '/create/stages', active: true},
		{ name: 'First stage', href: '/create/stage_1' },
		{ name: 'Second stage', href: '/create/stage_2' },
	]}
>
</Navbar>


<Page>
	<div class="flex h-screen w-full bg-white p-4 flex-col gap-5 pt-[225px] pl-[50px]">
		<div class="text-xl font-bold">Choose number of stages in your tournament</div>
		<div class="flex flex-row">

			<a href="/create/stage_1">
				<TextBlock title="1 stage" value="You will have only one stage. It can be groups or bracket."
									 className="pb-7 text-block mr-10" />
			</a>
			<a href="/create/stage_2">
				<TextBlock title="2 stage"
									 value="You will have two stages. First stage is groups, the second can be groups or bracket. You can have several finals." />
			</a>
		</div>
	</div>
</Page>

<NavButtons next={true} prev={true} />
