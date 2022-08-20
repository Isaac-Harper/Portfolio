<script>
import {
    loadArticle
} from '$lib/db';
import {
    page
} from "$app/stores";
const slug = $page.params.slug;
let article = loadArticle(slug);
import BackButton from "$lib/elements/BackButton.svelte";
</script>

<div class="container">
    {#await article then article}
    <p>{article.date}</p>
    <h1>{article.title}</h1>
    <hr>
    <p>{article.intro}</p>

    <div class="content">
        {#each article.sections as section}
        <h2>{section.title}</h2>
        {#each section.content as paragraph}
        <p>{paragraph}</p>
        {/each}
        {/each}
    </div>

    {/await}

    <BackButton/>
</div>

<style>
h1 {
    font-size: var(--font-title);
    margin-bottom: var(--spacing-small);
}

h2 {
    font-size: var(--font-subtitle);
    margin-bottom: var(--spacing-small);
}

p {
    font-size: var(--font-text);
    margin-bottom: var(--spacing-small);
}

.content {
    margin: var(--spacing-small);
}

.container {
    padding: var(--spacing-medium);
    max-width: 100rem;
    line-height: 1.3;
}
</style>
