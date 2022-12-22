<script>
	import Header from '$lib/elements/Header.svelte';
	import '/node_modules/modern-normalize/modern-normalize.css';
	import { webVitals } from '$lib/vitals'
	import { browser } from '$app/env';
  	import { page } from '$app/stores';

    import { inject } from '@vercel/analytics';
    
    import 'reset.css';

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
    <link rel="stylesheet" href="/reset.css">
</svelte:head>



<Header/>
<div class="container">
    <slot></slot>
</div>

<style>
:global(*) {
    margin: 0;
    padding: 0;
}




:global(body) {
    background-color: var(--background-color);
    font-family: var(--normal-font);
}

/* Text element default styling */
    :global(h1) {
        font-variation-settings: var(--wght-bold);
        margin: 0 0 var(--vu-1) 0;
        font-size: var(--font-mega);
    }

    :global(h2) {
        font-variation-settings: var(--wght-bold);
        font-size: var(--font-subtitle);
        margin: 0 0 var(--vu-1);
    }

    :global(p) {
        font-variation-settings: var(--wght-normal);
        font-size: var(--font-text);
        margin: 0 0 var(--vu-2);
    }

.container {
    padding: var(--vu-4);
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
