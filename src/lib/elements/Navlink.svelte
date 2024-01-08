<script>
	export let selected = false;

	export let link = '/';
</script>

<a
	href={link}
	class="button text-xl text-neutral-content hover:text-neutral-content hover:no-underline	"
	class:selected
>
	<div class="box bg-accent" />
	<slot>button</slot>
</a>

<style>
	slot {
		z-index: 20;
	}

	.button {
		--box-height: 80%;
		--box-width: 110%;

		position: relative;
		line-height: 1;
	}

	.button:hover {
		--box-height: 30%;
		--box-width: 120%;
		--color: hsl(var(--h, 245), var(--s, 91%), calc(var(--l, 88%) * 1));
	}

	.button:active {
		--box-height: 10%;
		--color: hsl(var(--h, 245), var(--s, 91%), calc(var(--l, 88%) * 0.8));
	}

	.button:focus-visible {
		--box-height: 40%;
	}

	.selected {
		--box-height: 20%;
		--box-width: 115%;
	}

	.box {
		position: absolute;
		left: 50%;
		bottom: -10%;
		transform: translate(-50%, 0%);
		width: var(--box-width);
		height: var(--box-height);

		box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.75);

		transition: height 0.1s linear, width 0.2s linear, background-color 0.2s ease;

		z-index: -1;
	}
</style>
