
    <div class="body">
        <h1>
            <slot name="title">Title</slot>
        </h1>
        <div class="intro">
            <slot name="intro">Intro</slot>
        </div>
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
            line-height: normal;
            
            color: var(--font-color);
            font-size: var(--font-text);
            font-family: var(--normal-font);
        }
    
        h1 {
            font-size: var(--font-mega);
            font-family: var(--bold-font);
            margin-bottom: var(--vu-1);
        }

        .contents {
            margin: var(--vu-4);
        }

        .intro {
            margin-bottom: var(--vu-1);
        }
    </style>
    