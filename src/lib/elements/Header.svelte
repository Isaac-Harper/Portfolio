<script lang="ts">
	import Navlink from '$lib/elements/Navlink.svelte';
	import { page } from '$app/stores';

	let width: any;
</script>

<svelte:window bind:innerWidth={width} />

<div class="container">
	<div class="spacer">
		<div class="header">
			<Navlink
				link="/"
				selected={$page.url.pathname === '/'}
				--h="var(--ui-color-h)"
				--s="var(--ui-color-s)"
				--l="var(--ui-color-l)"
				--font-color="var(--white)">Home</Navlink
			>
		</div>

		<Navlink
			link="/projects"
			selected={$page.url.pathname === '/projects'}
			--h="var(--ui-color-h)"
			--s="var(--ui-color-s)"
			--l="var(--ui-color-l)"
			--font-color="var(--white)">Projects</Navlink
		>
		<Navlink
			link="/articles"
			selected={$page.url.pathname === '/articles'}
			--h="var(--ui-color-h)"
			--s="var(--ui-color-s)"
			--l="var(--ui-color-l)"
			--font-color="var(--white)">Articles</Navlink
		>
		<Navlink
			link="/uses"
			selected={$page.url.pathname === '/uses'}
			--h="var(--ui-color-h)"
			--s="var(--ui-color-s)"
			--l="var(--ui-color-l)"
			--font-color="var(--white)">Uses</Navlink
		>
	</div>
</div>

<style>
	.spacer {
		display: flex;
		gap: var(--vu-4);
		padding: var(--vu-4);
		width: 100%;
		max-width: 100rem;
	}

	.container {
		background-color: var(--black);
		position: sticky;
		top: 0;

		position: sticky;
		top: 0;
		display: flex;
		justify-content: center;
		z-index: 10;
	}

	.header {
		display: flex;
		flex-grow: 1;
	}
</style>
