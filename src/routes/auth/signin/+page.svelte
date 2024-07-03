<script lang="ts">
	import FullScreenForm from '../(components)/full-screen-form.svelte';
	import AuthToggleBtn from '../(components)/auth-toggle-btn.svelte';
	import Input from '$lib/components/input.svelte';
	import Button from '$lib/components/button.svelte';
	import { LoaderCircle, SendHorizontal } from 'lucide-svelte';
	import { Field, Control, FieldErrors } from 'formsnap';
	import type { PageData } from './$types';
	import { schema } from './schema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms';

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance } = form;

	let isLoading = false;
</script>

<FullScreenForm>
	<form
		method="POST"
		class="flex gap-2.5 flex-col p-10 w-[560px] shadow-form rounded-30"
		use:enhance
	>
		<h1 class="text-4xl font-bold">Sign in</h1>
		<Field {form} name="email">
			<Control let:attrs>
				<Input
					{...attrs}
					bind:value={$formData.email}
					placeholder="Write your email"
					disabled={isLoading}
					label="E-mail"
					class="w-full"
				/>
			</Control>
			<FieldErrors class="text-red-500" />
		</Field>
		<Field {form} name="password">
			<Control let:attrs>
				<Input
					{...attrs}
					bind:value={$formData.password}
					placeholder="Write your password"
					disabled={isLoading}
					label="Password"
					class="w-full"
					type="password"
				/>
			</Control>
			<FieldErrors class="text-red-500" />
		</Field>
		<div class="flex justify-end w-full mt-2.5">
			<Button type="submit" disabled={isLoading}>
				{#if isLoading}
					<LoaderCircle class="w-5" />
				{:else}
					<SendHorizontal class="w-5" />
				{/if}
				Sign in
			</Button>
		</div>
	</form>
	<AuthToggleBtn text="I don't have an account" href="/auth/signup" />
</FullScreenForm>
