<script lang="ts">
	import { trackEvent } from '$lib/utility/analytics';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let isVisible = $state(false); // Start false so it slides IN on load/scroll

	onMount(() => {
		const idsToWatch = ['normal_button', 'contact-form'];

		const observer = new IntersectionObserver(
			(entries) => {
				const anyIntersecting = entries.some((entry) => entry.isIntersecting);

				isVisible = !anyIntersecting;
			},
			{
				threshold: 0,

				rootMargin: '0px 0px -10px 0px'
			}
		);

		idsToWatch.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

{#if isVisible}
	<div
		id="sticky_button"
		onclick={() => {
			document
				.getElementById('contact-form')
				?.scrollIntoView({ behavior: 'smooth', block: 'center' });
			trackEvent('Contact us button non sticky');
		}}
		transition:fly={{ y: 100, duration: 300 }}
		class="fixed bottom-0 left-0 z-[999] flex w-full items-center justify-center bg-brand py-5 text-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)]"
	>
		<p class="font-semibold">Contact Us</p>
	</div>
{/if}
