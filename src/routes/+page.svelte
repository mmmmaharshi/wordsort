<script lang="ts">
	let inputText = $state('');
	let outputText = $state('');

	function processText() {
		outputText = inputText
			.split(' ')
			.map((word) =>
				word
					.split('')
					.sort((a, b) => a.localeCompare(b))
					.join('')
			)
			.join(' ');
	}

	function copyToClipboard() {
		if (!navigator.clipboard) {
			alert('Clipboard API not available');
			return;
		}
		if (!outputText) {
			alert('No text to copy');
			return;
		}
		navigator.clipboard.writeText(outputText).then(
			() => {
				console.log('Text copied to clipboard');
			},
			(err) => {
				alert('Could not copy text: ' + err);
			}
		);
	}
</script>

<main class="container mx-auto h-full w-full max-w-screen-sm text-pretty px-4">
	<section class="mt-10 flex w-full flex-col items-center justify-center gap-2 text-center">
		<h3 class="text-primary text-5xl font-black">Word Sort</h3>
		<p class="italic">Because your words clearly need some help getting in order.</p>
		<a
			href="https://github.com/mmmmaharshi/wordsort"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="github_source_link"
			class="github mt-2"
		></a>
	</section>
	<section class="mt-4 w-full">
		<form
			onsubmit={(e) => {
				e.preventDefault();
				processText();
			}}
		>
			<textarea
				required
				bind:value={inputText}
				name="area"
				rows="10"
				class="textarea placeholder:text-base-content/80 textarea-bordered w-full resize-none text-pretty rounded-md text-base"
				placeholder="Paste your text here... We’ll take care of sorting!"
			></textarea>
			<div class="grid place-items-center">
				<button type="submit" class="btn btn-primary mx-auto mt-4">Make It Neat!</button>
			</div>
		</form>

		{#if outputText}
			<div class="card bg-base-300 mb-20 mt-5 w-full rounded-md shadow-xl">
				<div class="card-body p-7">
					<h2 class="card-title">Result:</h2>
					<pre class="whitespace-pre-wrap break-words">{outputText}</pre>
					<div class="card-actions mt-3 justify-end">
						<button type="button" onclick={copyToClipboard} class="btn btn-neutral"
							>📋 Copy Text</button
						>
					</div>
				</div>
			</div>
		{/if}
	</section>
</main>
