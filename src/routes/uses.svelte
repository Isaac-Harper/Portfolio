<script>
    import Page from "$lib/elements/Page.svelte";
</script>

<Page>
    <span slot="title">Uses</span>
    <span slot="intro">A collection of the things I use to do what I do. Inspired by <a href="https://uses.tech">uses.tech</a></span>

    <div slot="contents">

        <h2>Design and Dev tools</h2>
        <ul>
            <li>VSCode</li>
            <li>Alacritty</li>
            <li>zsh</li>
            <li>zim</li>
        </ul>
        <h2>Computer</h2>
        <ul>
            <li>i9 desktop</li>
            <li>Arch Linux</li>
            <li>2015 MacBook Pro</li>
            <li>OSX</li>
            <li>wacom drawing tablet</li>
        </ul>
        <h2>Keyboard</h2>
        <ul>
            <li>Kyria self made kb</li>
        </ul>
        <h2>Pockets</h2>
        <ul>
            <li>airpods</li>
            <li>iPhone</li>
        </ul>
        <h2>Desk</h2>
        <ul>
            <li>NerdDesk standing desk</li>
            <li>Comfy orange chair</li>
        </ul>
    </div>
</Page>

<style>
ul {
    margin-bottom: var(--vu-1);
    list-style: disc in;
}

li {
    font-size: var(--font-text);
    margin-left: var(--vu-4);
}
</style>
