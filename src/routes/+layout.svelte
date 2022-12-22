<script>
	import Header from '$lib/elements/Header.svelte';
	import '/node_modules/modern-normalize/modern-normalize.css';
	import { webVitals } from '$lib/vitals'
	import { browser } from '$app/env';
  	import { page } from '$app/stores';

    import { inject } from '@vercel/analytics';

    inject()

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
	
	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
	      	params: $page.params,
	        analyticsId
	    })
	}
	
	const title = "Isaac Harper • Web App Developer • Portfolio"
	const description = "Isaac Harper's portfolio written in SvelteKit and hosted on Vercel, "

</script>


<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="theme-color" content="#1e190c"/>
    <link rel="stylesheet" href="/css/reset.css">
</svelte:head>



<Header/>
<div class="container">
    <slot></slot>
</div>

<style>

.container {
    padding: var(--vu-4);
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
