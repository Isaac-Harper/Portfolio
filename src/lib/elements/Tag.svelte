<script>
	export /**
	 * @type {string | null | undefined}
	 */
	let href;
</script>

<a
	{href}
	class="flex text-black border-2 border-black w-fit min-w-fit rounded-3xl p-2 pl-4 pr-4 z-10"
>
	<slot name="image" class="block w-full h-auto">img</slot>

	<p class="m-auto text-lg">
		<slot name="tagName">tag</slot>
	</p>
</a>
