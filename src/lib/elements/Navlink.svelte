<!---
    Variables:
        --color
        --active-color
        
        --box-height
--->

<script>
export let selected = false;

export let link = "/";
</script>

<div class="button" class:selected>
    <a href={link}  >
        <slot>button</slot>
    </a>
    <div class="box"/>
</div>

<style>
.button {
    --box-height: 60%;
    --box-width: 100%;
    --color: hsl(var(--h, 245), var(--s, 91%), calc(var(--l, 88%) * 0.9));

    height: var(--font-subtitle);
    font-size: var(--font-subtitle);
    text-decoration: none;
    color: var(--font-color);
    border: none;
    position: relative;
    line-height: 1;
    z-index: 2;
}





.button:hover {
    --box-height: 30%;
    --box-width: 110%;
    --color: hsl(var(--h, 245), var(--s, 91%), calc(var(--l, 88%) * 1));
}

.button:active {
    --box-height: 10%;
    --color: hsl(var(--h, 245), var(--s, 91%), calc(var(--l, 88%) * .8));
}

.button:focus-visible {
    --box-height: 60%;
}

.selected {
    --box-height: 20%;
    --box-width: 120%;
}


a {
    color: var(--font-color);
    text-decoration: none;
}

.box {

    background-color: var(--color);

    position: absolute;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, 0%);
    width: var(--box-width);
    height: var(--box-height);

    box-shadow: 2px 2px 1px 0px rgba(0,0,0,0.75);

    transition: height .1s linear, width .2s linear, background-color .2s ease;

    z-index: -1;
}
</style>
