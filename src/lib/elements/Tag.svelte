<script>
	export /**
	 * @type {string | null | undefined}
	 */
	let href;
</script>

<a {href}>
	<slot name="image" class="image">img</slot>

	<p>
		<slot name="tagName">tag</slot>
	</p>
</a>

<style>
	a {
		display: flex;

		color: black;
		text-decoration: none;

		z-index: 1;
		border: solid black;
		border-radius: 2rem;
		padding: 1rem;
	}

	.image {
		color: black;
	}

	p {
		padding-left: 1rem;
		margin: auto;
		font-size: var(--font-tiny);
	}
</style>
