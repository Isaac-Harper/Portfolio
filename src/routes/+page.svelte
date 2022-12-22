<script>
	import UniCard from '$lib/elements/UniCard.svelte';
    import Page from '$lib/elements/Page.svelte';
	

    let portrait = '/images/portrait3.webp'

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
        <img src={portrait} alt="Portait" class="img"/>
        <p>I'm Isaac. I am a <span class="highlight" title={string}>23</span> year old developer originally from Arizona. I'm interested in many things including web development, hobby electronics, worldbuilding, CAD, coffee brewing, video games, backpacking, and fishing. </p>

        <p>Take a look around to see the new projects I've been working on. Also feel free to get in touch at <a href="mailto:isaacharperdev@gmail.com" class="highlight">IsaacHarperDev@gmail.com</a></p>

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
        border-radius: var(--vu-4);
        margin-bottom: var(--vu-1);
    }
</style>