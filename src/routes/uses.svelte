<script>
    import Page from "$lib/elements/Page.svelte";
</script>

<Page>
    <span slot="title">Uses</span>
    <span slot="intro">A collection of the things I use to do what I do. Inspired by <a href="https://uses.tech">uses.tech</a></span>

    <div slot="contents">
        <h2>Dev tools</h2>
        <ul>
            <li>VSCode</li>
            <li>Alacritty</li>
            <li>zsh</li>
            <li>zim</li>
            <li>gitfiend</li>
            <li>Love2D</li>
            <li>QMK</li>
        </ul>
        <h2>Computer</h2>
        <ul>
            <li>i9 desktop</li>
            <li>Arch Linux</li>
            <li>wacom drawing tablet</li>
            <li>Reflector</li>
            <li>Sway</li>
            <li>waybar</li>
            <li>wofi</li>
            <li>yay</li>
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
        <h2>Design</h2>
        <ul>
            <li>Aseprite</li>
            <li>Figma</li>
            <li>Inkscaper</li>
            <li>QCAD</li>
            <li>Solvespace</li>
        </ul>
        <h2>Gaming</h2>
        <ul>
            <li>Amidst</li>
            <li>PolyMC</li>
            <li>Steam</li>
        </ul>
        <h2>Misc Software</h2>
        <ul>            
            <li>bitWarden</li>
            <li>Discord</li>
            <li>Firefox</li>
            <li>Fluent Reader</li>
            <li>Obsidian</li>
            <li>Pacfinder</li>
            <li>PrimeNote</li> 
            <li>Spotify</li>
            <li>Todoist</li>
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
