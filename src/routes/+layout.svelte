<script lang="ts">
	export const prerender = true;
	export const trailingSlash = 'always';
	import './layout.css';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<link rel="canonical" href="https://finnova.health/" />
	<meta name="theme-color" content="#ad5389" />
	<title>Finnova | Instant Medical Financing for Patients and Hospitals</title>
	<meta
		name="description"
		content="Finnova gives patients instant, paperless medical loans and helps hospitals get paid faster. No-cost EMI, approval in minutes, 5,000+ partner hospitals across India."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Finnova" />
	<meta
		property="og:title"
		content="Finnova | Instant Medical Financing for Patients and Hospitals"
	/>
	<meta
		property="og:description"
		content="Instant, paperless medical loans for patients. Faster settlements and growth for partner hospitals."
	/>
	<meta property="og:url" content="https://finnova.health/" />
	<meta property="og:image" content="https://finnova.health/finnova_logo.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Finnova | Instant Medical Financing for Patients and Hospitals"
	/>
	<meta
		name="twitter:description"
		content="Instant, paperless medical loans for patients. Faster settlements and growth for partner hospitals."
	/>
</svelte:head>

<div class="relative">
	<Navigation />
	{@render children()}
</div>
