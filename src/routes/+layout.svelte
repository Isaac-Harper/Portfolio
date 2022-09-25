<script>
	import Header from '$lib/elements/Header.svelte';
	import '/node_modules/modern-normalize/modern-normalize.css';
	import { webVitals } from '$lib/vitals'
	import { browser } from '$app/env';
  	import { page } from '$app/stores';


	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
	
	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
	      	params: $page.params,
	        analyticsId
	    })
	}

</script>

<Header/>
<div class="container">
    <slot></slot>
</div>

<style>
:global(*) {
    margin: 0;
    padding: 0;
}

/* fonts */
    @font-face {
        font-family: Recursive;
        src: url('/src/fonts/Recursive_VF_1.084.woff2');
    }

:root {
    /* Colors defined */
        --black-h: 0;
        --black-s: 0%;
        --black-l: 0%;
        --black: hsl(var(--black-h), var(--black-s), var(--black-l));

        --white-h: 90;
        --white-s: 29%;
        --white-l: 97%;
        --white: hsl(var(--white-h), var(--white-s), var(--white-l));

        --red-h: 0;
        --red-s: 100%;
        --red-l: 68%;
        --red: hsl(var(--red-h), var(--red-s), var(--red-l));

        --yellow-h: 33;
        --yellow-s: 36%;
        --yellow-l: 53%;
        --yellow: hsl(var(--yellow-h), var(--yellow-s), var(--yellow-l));

        --blue-h: 251;
        --blue-s: 25%;
        --blue-l: 40%;
        --blue: hsl(var(--blue-h), var(--blue-s), var(--blue-l));

        --green-h: 156;
        --green-s: 23%;
        --green-l: 34%;
        --green: hsl(var(--green-h), var(--green-s), var(--green-l));

        /* Color uses defined */
        --background-color: var(--white);
        --font-color: var(--black);
        --font-color-light: var(--black);
        --font-color-highlight: var(--green);
        --ui-color: var(--green);
        --ui-color-h: var(--green-h);
        --ui-color-s: var(--green-s);
        --ui-color-l: var(--green-l);

    /* Type defined */
        --normal-font: "Recursive";
        --bold-font: "Recursive";

        font-size: 62.5%;

        --mono: "MONO" 0;
        --casl: "CASL" 0;

        --wght-normal: "wght" 500;
        --wght-bold: "wght" 800;
        
        --slnt: "slnt" -0;
        --crsv: "CRSV" 0.5;

        font-variation-settings: var(--mono), var(--casl), var(--wght-normal), var(--slnt), var(--crsv);


    /* Font sizes defined | 12-20 grow at 1.333 scale*/
        --font-tiny: clamp(1rem, 0.6rem + 0.8vw, 1.4rem);
        --font-text: clamp(1.45rem, 0.8rem + 1.3vw, 2.1rem);
        --font-subtitle: clamp(1.7rem, 0.67rem + 2.06vw, 2.73rem);
        --font-title: clamp(2.1rem, 0.8rem + 2.6vw, 3.4rem);
        --font-mega: clamp(2.5rem, 0.73rem + 3.54vw, 4.27rem);

    /* Spacing sizes defined | 1-10 grow at 1.333 scale */
        --spacing-small: 1rem;
        --spacing-medium: 4rem;
        --spacing-large: 10rem;
        
        --vu-05: clamp(0.43rem, 0.43rem + 0.14vw, 0.5rem);
        --vu-1:  clamp(0.8rem, 0.6rem + 0.4vw, 1rem);
        --vu-2:  clamp(1.5rem, 1rem + 1vw, 2rem);
        --vu-4:  clamp(2.81rem, 1.62rem + 2.38vw, 4rem);
        --vu-8:  clamp(5.27rem, 2.54rem + 5.46vw, 8rem);

    
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
    margin: var(--vu-4);
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
