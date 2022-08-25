<script>
    import { loadArticle } from '$lib/db';
    import { page } from "$app/stores";
    const slug = $page.params.slug;
    let article = loadArticle(slug);
    import BackButton from "$lib/elements/BackButton.svelte";
    import Page from '$lib/elements/Page.svelte';
</script>


{#await article then article}
    <Page>
        <span slot="title">{article.title}</span>
        <span slot="intro">{article.date}</span>
        <div slot="contents">
            <p>{article.intro}</p>
            {#each article.sections as section}
                <h2>{section.title}</h2>
                {#each section.content as paragraph}
                    <p>{paragraph}</p>
                {/each}
            {/each}
            <BackButton/>
        </div>
    </Page> 
{/await}
