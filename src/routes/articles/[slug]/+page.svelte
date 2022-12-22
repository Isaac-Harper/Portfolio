<!-- article.svelte -->
<!-- template for articles using mdsvex -->
<script>
	import BackButton from '$lib/elements/BackButton.svelte';
	import Page from '$lib/elements/Page.svelte';
 
    export let data
</script>
    


<Page>
  <svelte:fragment  slot="title">{data.title}</svelte:fragment>
  <svelte:fragment  slot="intro">{data.date}</svelte:fragment>

  <svelte:fragment slot="contents">
    <svelte:component this={data.content} />
    <BackButton/>
  </svelte:fragment>
</Page>