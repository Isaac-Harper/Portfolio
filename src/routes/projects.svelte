<script>
import Card from '$lib/elements/Card.svelte';
import Main from '$lib/blocks/Main.svelte';

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
</script>



<Page>
    <span slot="title">Projects</span>
    <span slot="intro">Here are some of the things that I've been working on</span>

    <div slot="contents" class="project-grid">

        <Card git="https://github.com/Voldari/VibiasMarket">
            <span slot="title">Vibia's Market</span>
            <img src={gh} alt="gh" slot="subtitle">
            
            <span slot="body">Create a virtual bazar for you and your friends to trade whatever goods you can think of. Created for my own use running TTRPG games this tool is great for anyone looking to simulate a market. Currently a WIP</span>

            <div slot="foot" class="tags">
                <Tag href="https://svelte.dev/">
                    <img src={svelteSvg} alt="svelte" slot="image">
                    <span slot="tagName">Svelte</span>
                </Tag>
                <Tag href="https://supabase.com/">
                    <img src={supabaseSvg} alt="supabase" slot="image">
                    <span slot="tagName">Supabase</span>
                </Tag>
            </div>
        </Card>

        <Card git="https://github.com/Voldari/corner-store">
            <span slot="title">Corner Store</span>
            <img src={gh} alt="gh"  slot="subtitle">
            <span slot="body">Track what you have in your fridge and all the various possible recipe combinations you can make. Put items you need on the shopping list and save your favorite recipes for later.</span>
            <div slot="foot" class="tags">
                <Tag href="https://developer.android.com/studio">
                    <img src={androidstudioSvg} alt="androidstudio" slot="image">
                    <span slot="tagName">AndroidStudio</span>
                </Tag>
                <Tag href="https://www.java.com/en/">
                    <img src={javaSvg} alt="java" slot="image">
                    <span slot="tagName">Java</span>
                </Tag>
                <Tag href="https://kotlinlang.org/">
                    <img src={kotlinSvg} alt="kotlin" slot="image">
                    <span slot="tagName">Kotlin</span>
                </Tag>
            </div>
        </Card>

        <Card git="https://github.com/Voldari/juno">
            <span slot="title">JUNO</span>
            <img src={gh} alt="gh" slot="subtitle">
            <span slot="body">Custom written firmware for the Kyria. My first introduction to C and a fun challenge to work on.</span>
            <div slot="foot" class="tags">
                <Tag href="https://en.wikipedia.org/wiki/C_(programming_language)">
                    <img src={cSvg} alt="c" slot="image">
                    <span slot="tagName">C</span>
                </Tag>
            </div>
        </Card>

        <Card git="https://github.com/Voldari/chicken-game">
            <span slot="title">Chicken Game</span>
            <img src={gh} alt="gh" slot="subtitle">
            <span slot="body">Raise chickens in the fertile ground of a abandoned dye factory. Still a work in progress this is my first experience with the LoVE2D engine. Currently a WIP</span>
            <div slot="foot" class="tags">
                <Tag href="https://love2d.org/">
                    <img src={loveSvg} alt="love" slot="image">
                    <span slot="tagName">LÖVE2D</span>
                </Tag>
                <Tag href="https://www.lua.org/">
                    <img src={luaSvg} alt="lua" slot="image">
                    <span slot="tagName">Lua</span>
                </Tag>
            </div>
        </Card>

    </div>
</Page>

<style>
.project-grid {
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;

    gap: var(--spacing-small);

}

    .tags {
        display: flex;
        gap: var(--spacing-small);
    }

</style>
