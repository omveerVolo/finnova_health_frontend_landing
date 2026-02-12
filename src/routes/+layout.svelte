<script lang="ts">
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
