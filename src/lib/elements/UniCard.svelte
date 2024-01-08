<div class="p-8 w-full relative box">
	<div class="flex gap-4 flex-wrap">
		<h2 class="flex-grow z-10">
			<slot name="title">Title</slot>
		</h2>
		<div class="subtitle z-10">
			<slot name="subtitle" />
		</div>
	</div>
	<p class="mb-4">
		<slot name="summary">summary</slot>
	</p>
	<div class="flex gap-4">
		<slot name="footer" />
	</div>
</div>

<style>
	.box::before {
		content: '';
		position: absolute;
		border-top: solid;
		border-left: solid;
		top: 0;
		left: 0;
		right: 0%;
		bottom: 60%;
		transition: bottom 0.2s;
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
		transition: top 0.2s;
	}

	.box:hover::before {
		bottom: 80%;
	}

	.box:hover::after {
		top: 80%;
	}
</style>
