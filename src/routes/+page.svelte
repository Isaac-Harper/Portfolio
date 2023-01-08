<script>
	import UniCard from '$lib/elements/UniCard.svelte';
	import Page from '$lib/elements/Page.svelte';

	let portrait = '/images/portrait3.webp';

	const now = new Date();
	const birthday = new Date(99, 11, 13);

	const difference = now.getTime() - birthday.getTime();
	const difference_in_days = Math.trunc(difference / (1000 * 3600 * 24));
	const string = difference_in_days.toString() + ' days';
</script>

<Page>
	<svelte:fragment slot="title">Isaac Harper</svelte:fragment>
	<svelte:fragment slot="intro"
		>On this site, you'll find a collection of my most recent projects, as well as any valuable
		insights and thoughts I've written down. I'm always working on something new, so be sure to
		check back often to see what I've been up to.
	</svelte:fragment>

	<svelte:fragment slot="contents">
		<h2 class="highlight">About Me</h2>
		<img src={portrait} alt="Portait" class="img" />

		<p>
			I am a software developer with a passion for creating functional and visually appealing
			websites.
		</p>

		<p>
			In addition to my love for coding, I am also an avid fan of a variety of hobbies including
			electronics, worldbuilding, CAD, coffee brewing, video games, backpacking, and fishing. These
			diverse interests allow me to bring a unique perspective and creative flair to my work.
		</p>

		<p>
			Thank you for visiting my portfolio website. I hope you enjoy exploring my projects and
			learning more about me. If you have any questions or would like to collaborate, don't hesitate
			to reach out to me at <a href="mailto:isaacharperdev@gmail.com" class="highlight"
				>IsaacHarperDev@gmail.com</a
			>. You can also check out the source code for this website on my
			<a class="highlight" href="https://github.com/Voldari/Portfolio">Github</a> page.
		</p>
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
		border: solid black;
	}
</style>
