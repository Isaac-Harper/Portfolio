<script>

    
</script>

<p>
    <slot name="date"></slot>
</p>
<h1>
    <slot name="title"></slot>
</h1>
<hr>
<div class="container">

</div>

<slot name="body"></slot>

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

.container {
    margin: var(--spacing-small);
}
</style>
