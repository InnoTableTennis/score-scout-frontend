<script lang="ts">
	import FullScreenForm from '../(components)/full-screen-form.svelte';
	import AuthToggleBtn from '../(components)/auth-toggle-btn.svelte';
	import Input from '$lib/components/input.svelte';
	import Button from '$lib/components/button.svelte';
	import { LoaderCircle, SendHorizontal } from 'lucide-svelte';
	import AuthForm from '../(components)/auth-form.svelte';

	let email = '';
	let password = '';
	let confirmPassword = '';
	let isLoading = false;

	async function handleSubmit() {
		isLoading = true;
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
		} finally {
			isLoading = false;
		}
	}
</script>

<FullScreenForm>
	<AuthForm {handleSubmit} title="Sign up">
		<svelte:fragment slot="inputs">
			<Input
				value={email}
				placeholder="Write your email"
				disabled={isLoading}
				label="E-mail"
				class="w-full"
			/>
			<Input
				value={password}
				placeholder="Write your password"
				disabled={isLoading}
				label="Password"
				class="w-full"
			/>
			<Input
				value={confirmPassword}
				placeholder="Write your password again"
				disabled={isLoading}
				label="Confirm password"
				class="w-full"
			/>
		</svelte:fragment>
		<Button type="submit" disabled={isLoading} slot="button">
			{#if isLoading}
				<LoaderCircle class="w-5" />
			{:else}
				<SendHorizontal class="w-5" />
			{/if}
			Sign up
		</Button>
	</AuthForm>
	<AuthToggleBtn text="I already have an account" href="/auth/signin" />
</FullScreenForm>
