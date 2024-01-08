<script lang="ts">
	import Navlink from '$lib/elements/Navlink.svelte';
	import { page } from '$app/stores';

	let width: any;
</script>

<svelte:window bind:innerWidth={width} />

<div class="bg-neutral z-20 flex gap-4 p-8 w-full sticky top-0">
	<div class="flex flex-grow">
		<Navlink link="/" selected={$page.url.pathname === '/'}>Home</Navlink>
	</div>

	<Navlink link="/projects" selected={$page.url.pathname === '/projects'}>Projects</Navlink>
	<Navlink link="/articles" selected={$page.url.pathname === '/articles'}>Articles</Navlink>
	<Navlink link="/uses" selected={$page.url.pathname === '/uses'}>Uses</Navlink>
</div>
