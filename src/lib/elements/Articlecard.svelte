<script>
</script>

<div class="card">
    <div class="grid">      
        <h2>
            <slot name="title">
                Title of Article
            </slot>
        </h2>
        
        <div class="subtitle">
            <slot name="subtitle"/>
        </div>
        <p class="body">
            <slot name="body">
                Somethings missing here
            </slot>
        </p>
        <div class="footer">
            <slot name="foot"/>
        </div>
    </div>
</div>


<style>
    .card {
        padding: var(--spacing-small);
        width: 100%;
        
        position: relative;
    }

    .card::before {
        content: '';
        position: absolute;
        border-top: solid;
        border-left: solid;
        top: 0;
        left: 0;
        right: 0%;
        bottom: 60%;
        transition: bottom .2s;
    }

    .card::after {
        content: '';
        position: absolute;
        border-bottom: solid;
        border-right: solid;
        bottom: 0;
        right: 0;
        left: 0%;
        top: 60%;
        transition: top .2s;
    }

    .card:hover::before {
        bottom: 80%;
    }

    .card:hover::after {
        top: 80%;
    }


    .grid {
        display: grid;
        grid-template-areas: 
            "title subtitle"
            "body body"
            "foot foot";
        grid-template-columns: 1fr auto;
        grid-template-rows: var(--font-subtitle);
        
        gap: var(--spacing-small);
        height: 100%;
        padding: var(--spacing-small);


    }

    h2 {
        font-size: var(--font-subtitle);
        font-family: var(--bold-font);
        grid-area: title;
        margin: 0;

        z-index: 1;
    }

    .subtitle {
        font-size: var(--font-text); 
        grid-area: subtitle;
        margin: 0;
        height: 100%;
        z-index: 1;
    }

    .body {
        font-size: var(--font-text);
        grid-area: body;
        padding-left: var(--spacing-small);
        margin: 0;
    }

    .footer {
        grid-area: foot;
        font-size: var(--font-tiny);
        margin: 0;
    }
</style>