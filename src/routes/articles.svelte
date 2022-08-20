<script>

    import { articleSummary, loadArticle } from "$lib/db";
    let summary = articleSummary();

    import Articlecard from "$lib/elements/Articlecard.svelte";
    import Page from "$lib/elements/Page.svelte";
    import UniCard from "$lib/elements/UniCard.svelte";

let svelteSvg = "svelte.svg"
</script>


<Page>
    <span slot="title">My thoughts</span>
    <span slot="intro">My writtings ranging from notes to essays</span>

    <div slot="contents" class="project-grid">
        {#await summary then summary}
            {#each summary as article}
                <UniCard>
                    <a href="/articles/{article.slug}" slot="title">{article.title} </a>
                    <span slot="summary">{article.intro}</span>
                </UniCard>
            {/each}
        {/await}
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

a {
    color: black;
}
</style>
