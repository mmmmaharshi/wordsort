<script lang="ts">
	import '../app.css';

	import { page } from '$app/state';
	import { deepMerge, MetaTags } from 'svelte-meta-tags';

	let { data, children } = $props();

	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
</script>

<MetaTags {...metaTags} />

{@render children()}
