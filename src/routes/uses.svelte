<script>
import Main from "$lib/blocks/Main.svelte";
import Page from "$lib/elements/Page.svelte";
</script>

<Page>
    <span slot="title">Uses</span>
    <span slot="intro">A collection of the things I use to do what I do. Inspired by <a href="https://uses.tech">uses.tech</a></span>

    <div slot="contents" class="body">

        <h3>Design and Dev tools</h3>
        <ul>
            <li>VSCode</li>
            <li>Alacritty</li>
            <li>zsh</li>
            <li>zim</li>
        </ul>
        <h3>Computer</h3>
        <ul>
            <li>i9 desktop</li>
            <li>Arch Linux</li>
            <li>2015 MacBook Pro</li>
            <li>OSX</li>
            <li>wacom drawing tablet</li>
        </ul>
        <h3>Keyboard</h3>
        <ul>
            <li>Kyria self made kb</li>
        </ul>
        <h3>Pockets</h3>
        <ul>
            <li>airpods</li>
            <li>iPhone</li>
        </ul>
        <h3>Desk</h3>
        <ul>
            <li>NerdDesk standing desk</li>
            <li>Comfy orange chair</li>
        </ul>
    </div>
</Page>

<style>
.body {

    display: flex;
    flex-direction: column;
}

h3 {
    font-size: var(--font-subtitle);
}

ul {
    margin-bottom: var(--spacing-small);
    list-style: disc in;
}

li {
    font-size: var(--font-text);
    margin-left: var(--spacing-medium);
}
</style>
