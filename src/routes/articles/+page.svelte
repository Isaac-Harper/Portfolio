<script>
	import Page from '$lib/elements/Page.svelte';
	import UniCard from '$lib/elements/UniCard.svelte';

	let svelteSvg = 'svelte.svg';

	export /**
	 * @type {any}
	 */
	let data;

	const summary = Object.keys(data).map((key) => {
		return data[key];
	});
</script>

<Page>
	<span slot="title">My thoughts</span>
	<span slot="intro">My writtings ranging from notes to essays</span>

	<div
		slot="contents"
		class=" flex flex-nowrap flex-col justify-start items-start content-start gap-8"
	>
		{#each summary as article}
			<UniCard>
				<a href="/articles/{article.slug}" slot="title">{article.title} </a>
				<span slot="summary">{article.intro}</span>
			</UniCard>
		{/each}
	</div>
</Page>
