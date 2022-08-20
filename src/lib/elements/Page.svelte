
    <div class="body">
        <h1>
            <slot name="title">Title</slot>
        </h1>
        <p class="intro">
            <slot name="intro">Intro</slot>
        </p>
        <hr>
        <div class="contents">
            <slot name="contents">content</slot>
        </div>    
    </div>
    
    <style>
        .body {
            max-width: 70rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            line-height: 1.3;
            
            color: var(--font-color);
            font-size: var(--font-text);
            font-family: var(--normal-font);
        }

        .contents {
            margin: var(--vu-4);
        }
    </style>
    