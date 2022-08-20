<script>
	import Page from './../lib/elements/Page.svelte';


    import data from  "/src/content/home.json";
</script>


<Page>
    <span slot="title">Isaac Harper</span>
    <span slot="intro">My homebase on the internet. A growing collection of projects I'm working on and anything I think is valuable enough to write down.</span>

    <div slot="contents">
        <h2>About Me kk</h2>
        <p>I'm Isaac (He/Him/They). I am a <span class="highlight">22</span> year old Arizonan who is interested in a lot of things.  A couple of the things I'm interested in that may be featured on this site include web development, hobby electronics, worldbuilding, CAD, coffee brewing, video games, backpacking, and fishing. </p>

        <p>Take a look around to see the new stuff I've been up to. Also feel free to get in touch at <span class="highlight">IsaacHarperDev@gmail.com</span> and check out the other places I'm at below</p>
    </div>
</Page>

<style>
    h2 { 
        color: var(--font-color-highlight);
        font-size: var(--font-subtitle);
        font-family: var(--bold-font);
        font-family: raleway, sans-serif;
        font-weight: bolder;
        margin-bottom: var(--vu-1);
    }


    p {
        margin-bottom: var(--vu-2);
    }

    .highlight {
        color: var(--font-color-highlight);
    }
</style>
