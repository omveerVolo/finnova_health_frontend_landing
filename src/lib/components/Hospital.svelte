<script lang="ts">
	const logos = [
		{ src: '/hospitalLogos/1.webp', alt: 'Hospital 1' },
		{ src: '/hospitalLogos/2.webp', alt: 'Hospital 2' },
		{ src: '/hospitalLogos/3.webp', alt: 'Hospital 3' },
		{ src: '/hospitalLogos/4.webp', alt: 'Hospital 4' },
		{ src: '/hospitalLogos/1.webp', alt: 'Hospital 1' },
		{ src: '/hospitalLogos/2.webp', alt: 'Hospital 2' }
	];
</script>

<section class="w-full bg-white px-6 py-12 lg:px-16">
	<div class="relative mx-auto max-w-5xl overflow-hidden border border-slate-400 bg-white py-8">
		<div class="absolute top-0 left-4 -translate-y-1/2 bg-white px-2">
			<span class="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase"
				>Partner Network</span
			>
		</div>

		<div class="group flex overflow-hidden">
			<div class="animate-marquee flex shrink-0 items-center gap-16 px-8 md:gap-32">
				{#each logos as logo}
					<img
						src={logo.src}
						alt={logo.alt}
						class="logo-slate h-6 w-auto opacity-50 grayscale transition-opacity hover:opacity-100 md:h-8"
					/>
				{/each}
			</div>

			<div
				class="animate-marquee flex shrink-0 items-center gap-16 px-8 md:gap-32"
				aria-hidden="true"
			>
				{#each logos as logo}
					<img
						src={logo.src}
						alt={logo.alt}
						class="logo-slate h-6 w-auto opacity-50 grayscale md:h-8"
					/>
				{/each}
			</div>
		</div>

		<div
			class="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent"
		></div>
	</div>
</section>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.animate-marquee {
		animation: marquee 40s linear infinite;
	}

	.group:hover .animate-marquee {
		animation-play-state: paused;
	}

	/* Professional desaturation filter to push logos toward Slate 400 tones */
	.logo-slate {
		filter: grayscale(100%) brightness(1.2) contrast(0.8);
	}
</style>
