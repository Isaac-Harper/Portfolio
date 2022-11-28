<script>
	import UniCard from '$lib/elements/UniCard.svelte';
    import Page from './../lib/elements/Page.svelte';
	
	import { image, initialize } from 'svelte-cloudinary'
	import { browser } from '$app/env'
	
	initialize({ cloud_name: 'dn0dhuunu' })
	
	const src = 'portrait'
    let portrait2 = '/images/portrait.jpg'

    const now = new Date();
    const birthday = new Date(99, 11, 13)

    const difference = now.getTime() - birthday.getTime()
    const difference_in_days = Math.trunc(difference / (1000 * 3600 * 24))
    const string = difference_in_days.toString() + " days"
</script>


<Page>
    <svelte:fragment  slot="title">Isaac Harper</svelte:fragment>
    <svelte:fragment  slot="intro">My homebase on the internet. A growing collection of projects I'm working on and anything I think is valuable enough to write down.</svelte:fragment>

    <svelte:fragment slot="contents">
        <h2 class="highlight">About Me</h2>
        <img use:image={{ src, options: { width: 500, height: 400, crop: 'fill' }, lazy: true}} alt="Portait"  class="img"/>
        <p>I'm Isaac (He/Him/They). I am a <span class="highlight" title={string}>22</span> year old Arizonan who is interested in a lot of things.  A couple of the things I'm interested in that may be featured on this site include web development, hobby electronics, worldbuilding, CAD, coffee brewing, video games, backpacking, and fishing. </p>

        <p>Take a look around to see the new stuff I've been up to. Also feel free to get in touch at <a href="mailto:isaacharperdev@gmail.com" class="highlight">IsaacHarperDev@gmail.com</a></p>

        <p>Take a look at the source for this site at <a class="highlight" href="https://github.com/Voldari/Portfolio">Github</a></p>
    </svelte:fragment>
</Page>

<style>
    .highlight {
        color: var(--font-color-highlight);
        text-decoration: none;
    }

    img {
        max-width: 100%;
		object-fit: cover;
        border-radius: var(--vu-4);
        margin-bottom: var(--vu-1);
    }
</style>
