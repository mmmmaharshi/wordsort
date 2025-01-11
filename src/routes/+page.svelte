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

<main class="container mx-auto h-full w-full max-w-screen-sm text-pretty px-4 font-mono">
	<section class="mt-10 flex w-full flex-col items-center justify-center gap-2 text-center">
		<h3 class="text-primary text-5xl font-black">Word Sort</h3>
	</section>
	<section class="mt-6 w-full">
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
				rows="5"
				class="textarea textarea-bordered w-full resize-none text-pretty rounded-md text-base"
				placeholder="Paste your text here... We’ll take care of sorting!"
			></textarea>
			<div class="grid place-items-center">
				<button type="submit" class="btn btn-primary mx-auto mt-4 !font-bold">Sort It!</button>
			</div>
		</form>

		{#if outputText}
			<section class="card bg-base-300 mt-5 w-full rounded-md shadow-xl">
				<div class="card-body p-7">
					<h2 class="card-title font-bold">Result:</h2>
					<pre class="whitespace-pre-wrap break-words">{outputText}</pre>
					<div class="card-actions mt-3 justify-end">
						<button type="button" onclick={copyToClipboard} class="btn btn-neutral"
							>📋 Copy Text</button
						>
					</div>
				</div>
			</section>
		{/if}

		<section class="bg-base-200 mt-4 flex flex-col gap-5 rounded-md p-5 text-sm">
			<p>
				Word Sort is a simple web app that rearranges the letters of each word in your text into
				alphabetical order. Just paste your text, like this:
			</p>
			<p class=" font-bold">Input: "Maharshi"</p>
			<p>And the app will sort the letters of each word:</p>
			<p class=" font-bold">Output: "Aahhimrsh"</p>
			<p>
				Sorce code: <a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/mmmmaharshi/wordsort"
					class="text-primary underline">Github</a
				>
			</p>
			<p>
				I got this idea from a <a
					class="text-primary underline"
					target="_blank"
					rel="noopener noreferrer"
					href="https://x.com/WendigoWear/status/1877794346625286175">tweet</a
				>
			</p>
			<p>
				Follow Me : <a
					target="_blank"
					rel="noopener noreferrer"
					href="https://x.com/mmmmaharshi"
					class="text-primary underline">X(@mmmmaharshi)</a
				>
			</p>
			<p>It's a fun app, don't sue me! 😄</p>
		</section>
	</section>
</main>
