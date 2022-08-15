<div class="container">
    <h1 class="title">
        <slot name="title">Title</slot>
    </h1>
    <h2 class="subtitle">
        <slot name="subtitle">Subtitle</slot>
    </h2>
    <div class="body">
        <slot name="body">body</slot>
    </div>
</div>

<style>
.container {
    max-width: 70rem;
    width: 100%;
}

.title {
    font-size: var(--font-title);
    font-family: var(--bold-font);
}

.subtitle {
    color: var(--font-color-highlight);
    font-size: var(--font-subtitle);
    font-family: var(--bold-font);
    margin-bottom: var(--spacing-small);
}
</style>
