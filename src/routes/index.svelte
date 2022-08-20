<script>
	import UniCard from '$lib/elements/UniCard.svelte';
    import Page from './../lib/elements/Page.svelte';

    const now = new Date();
    const birthday = new Date(99, 11, 13)

    const difference = now.getTime() - birthday.getTime()
    const difference_in_days = Math.trunc(difference / (1000 * 3600 * 24))
    const string = difference_in_days.toString() + " days"
</script>


<Page>
    <span slot="title">Isaac Harper</span>
    <span slot="intro">My homebase on the internet. A growing collection of projects I'm working on and anything I think is valuable enough to write down.</span>

    <div slot="contents">
        <h2 class="highlight">About Me</h2>
        <p>I'm Isaac (He/Him/They). I am a <span class="highlight" title={string}>22</span> year old Arizonan who is interested in a lot of things.  A couple of the things I'm interested in that may be featured on this site include web development, hobby electronics, worldbuilding, CAD, coffee brewing, video games, backpacking, and fishing. </p>

        <p>Take a look around to see the new stuff I've been up to. Also feel free to get in touch at <a href="mailto:isaacharperdev@gmail.com" class="highlight">IsaacHarperDev@gmail.com</a> and check out the other places I'm at below</p>

        <p>Take a look at the source for this site at <a class="highlight" href="https://github.com/Voldari/Portfolio">Github</a></p>
    </div>
</Page>

<style>
    .highlight {
        color: var(--font-color-highlight);
        text-decoration: none;
    }
</style>
