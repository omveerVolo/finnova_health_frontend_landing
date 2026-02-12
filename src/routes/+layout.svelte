<script lang="ts">
	export const prerender = true;
	export const trailingSlash = 'always';
	import './layout.css';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<title>Finnova</title>
</svelte:head>

<div class="relative">
	<Navigation />
	{@render children()}
</div>
