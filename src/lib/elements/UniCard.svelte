<script>

</script>

<div class="box">
    <div class="flex">
        <h2>
            <slot name="title">Title</slot>
        </h2>
        <div class="subtitle">
            <slot name="subtitle"></slot>
        </div>
    </div>
    <p>
        <slot name="summary">summary</slot>
    </p>
    <div class="flex">
        <slot name="footer"></slot>
    </div>
</div>


<style>


    .box {
        width: 100%;
        position: relative;
        padding: var(--vu-2);
    }

    .box::before {
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

    .box::after {
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

    .box:hover::before {
        bottom: 80%;
    }

    .box:hover::after {
        top: 80%;
    }

    h2 {
        flex-grow: 1;
        z-index: 1;
    }

    .flex {
        display: flex;
        gap: var(--vu-2);
    }

    .subtitle {
        z-index: 1;
    }
</style>