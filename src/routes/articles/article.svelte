<!-- article.svelte -->
<!-- template for articles using mdsvex -->
<script>
	import BackButton from './../../lib/elements/BackButton.svelte';
	import Page from './../../lib/elements/Page.svelte';
    export let title
    export let date
</script>
    


<Page>
  <svelte:fragment  slot="title">{title}</svelte:fragment>
  <svelte:fragment  slot="intro">{date}</svelte:fragment>

  <svelte:fragment slot="contents">
    <slot />
    <BackButton/>
  </svelte:fragment>
</Page>