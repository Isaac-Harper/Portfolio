<script>
	import gh from '$lib/assets/github.svg';

	import svelteSvg from '$lib/assets/svelte.svg';
	import supabaseSvg from '$lib/assets/supabase.svg';

	import androidstudioSvg from '$lib/assets/androidstudio.svg';
	import javaSvg from '$lib/assets/java.svg';
	import kotlinSvg from '$lib/assets/kotlin.svg';

	import cSvg from '$lib/assets/c.svg';

	import loveSvg from '$lib/assets/love.svg';
	import luaSvg from '$lib/assets/lua.svg';

	import Tag from '$lib/elements/Tag.svelte';
	import Page from '$lib/elements/Page.svelte';
	import UniCard from '$lib/elements/UniCard.svelte';
	import Icon from '$lib/elements/Icon.svelte';
</script>

<Page>
	<span slot="title">Projects</span>
	<span slot="intro">Here are some of the things that I've been working on</span>

	<div
		slot="contents"
		class="flex flex-nowrap flex-col justify-start items-start content-start gap-8"
	>
		<UniCard>
			<svelte:fragment slot="title">Vibia's Market</svelte:fragment>
			<Icon slot="subtitle" link="https://github.com/Voldari/vibias-market" img={gh} />
			<svelte:fragment slot="summary">
				Create a virtual bazar for you and your friends to trade whatever goods you can think of.
				Created for my own use running TTRPG games this tool is great for anyone looking to simulate
				a market. Currently in public beta.
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<Tag href="https://svelte.dev/">
					<img src={svelteSvg} alt="svelte" slot="image" />
					<svelte:fragment slot="tagName">Svelte</svelte:fragment>
				</Tag>
				<Tag href="https://supabase.com/">
					<img src={supabaseSvg} alt="supabase" slot="image" />
					<svelte:fragment slot="tagName">Supabase</svelte:fragment>
				</Tag>
			</svelte:fragment>
		</UniCard>
		<UniCard>
			<svelte:fragment slot="title">Corner Store</svelte:fragment>
			<Icon slot="subtitle" link="https://github.com/Voldari/corner-store" img={gh} />
			<svelte:fragment slot="summary">
				Track what you have in your fridge and all the various possible recipe combinations you can
				make. Put items you need on the shopping list and save your favorite recipes for later.
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<Tag href="https://developer.android.com/studio">
					<img src={androidstudioSvg} alt="androidstudio" slot="image" />
					<svelte:fragment slot="tagName">AndroidStudio</svelte:fragment>
				</Tag>
				<Tag href="https://www.java.com/en/">
					<img src={javaSvg} alt="java" slot="image" />
					<svelte:fragment slot="tagName">Java</svelte:fragment>
				</Tag>
				<Tag href="https://kotlinlang.org/">
					<img src={kotlinSvg} alt="kotlin" slot="image" />
					<svelte:fragment slot="tagName">Kotlin</svelte:fragment>
				</Tag>
			</svelte:fragment>
		</UniCard>
		<UniCard>
			<svelte:fragment slot="title">JUNO</svelte:fragment>
			<Icon slot="subtitle" link="https://github.com/Voldari/juno" img={gh} />
			<svelte:fragment slot="summary">
				Custom written firmware for the Kyria. My first introduction to C and a fun challenge to
				work on.
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<Tag href="https://en.wikipedia.org/wiki/C_(programming_language)">
					<img src={cSvg} alt="c" slot="image" />
					<svelte:fragment slot="tagName">C</svelte:fragment>
				</Tag>
			</svelte:fragment>
		</UniCard>
		<UniCard>
			<svelte:fragment slot="title">Chicken Game</svelte:fragment>
			<Icon slot="subtitle" link="https://github.com/Voldari/chicken-game" img={gh} />
			<svelte:fragment slot="summary">
				Raise chickens in the fertile ground of a abandoned dye factory. Still a work in progress
				this is my first experience with the LoVE2D engine. Currently a WIP
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<Tag href="https://love2d.org/">
					<img src={loveSvg} alt="love" slot="image" />
					<svelte:fragment slot="tagName">LÖVE2D</svelte:fragment>
				</Tag>
				<Tag href="https://www.lua.org/">
					<img src={luaSvg} alt="lua" slot="image" />
					<svelte:fragment slot="tagName">Lua</svelte:fragment>
				</Tag>
			</svelte:fragment>
		</UniCard>
	</div>
</Page>
