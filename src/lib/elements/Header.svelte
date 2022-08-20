<script>
import Navlink from '$lib/elements/Navlink.svelte';
import {
    page
} from '$app/stores';
</script>

<div class="container">
    <div class="header">
        <Navlink link="/" selected={$page.url.pathname === '/'} --h=var(--ui-color-h) --s=var(--ui-color-s) --l=var(--ui-color-l) --font-color=var(--white)>Home</Navlink>
    </div>

    <Navlink link="/projects" selected={$page.url.pathname ==="/projects"} --h=var(--ui-color-h) --s=var(--ui-color-s) --l=var(--ui-color-l) --font-color=var(--white)>Projects</Navlink>
    <Navlink link="/articles" selected={$page.url.pathname === "/articles"} --h=var(--ui-color-h) --s=var(--ui-color-s) --l=var(--ui-color-l) --font-color=var(--white)>Articles</Navlink>
    <Navlink link="/uses" selected={$page.url.pathname === "/uses"} --h=var(--ui-color-h) --s=var(--ui-color-s) --l=var(--ui-color-l) --font-color=var(--white)>Uses</Navlink>
</div>

<style>
.container {
    display: flex;
    gap: var(--spacing-large);
    padding: var(--spacing-medium);

    background-color: var(--black);
    z-index: -1;
}

.header {
    display: flex;
    flex-grow: 1;
}
</style>
