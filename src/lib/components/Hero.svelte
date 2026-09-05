<script lang="ts">
	import { page_context } from '$lib/state/PageContex.svelte';
	import { reveal } from '$lib/utility/reveal';
	import { ArrowRight } from '@lucide/svelte';

	const patientsLg = [
		'/heroImages/patients/D1.webp',
		'/heroImages/patients/D2.webp',
		'/heroImages/patients/D3.webp'
	];
	const patientsSm = [
		'/heroImages/patients/M1.webp',
		'/heroImages/patients/M2.webp',
		'/heroImages/patients/M3.webp'
	];
	const hospitalsLg = [
		'/heroImages/hospitals/D1.webp',
		'/heroImages/hospitals/D2.webp',
		'/heroImages/hospitals/D3.webp'
	];
	const hospitalsSm = [
		'/heroImages/hospitals/M1.webp',
		'/heroImages/hospitals/M2.webp',
		'/heroImages/hospitals/M3.webp'
	];

	let pageContext = $derived(page_context.current);

	let currentImage = $state(0);
	let startX = $state(0);
	let currentOffset = $state(0);
	let isDragging = $state(false);
	let isTransitioning = $state(true);

	const activeLg = $derived(pageContext === 'patients' ? patientsLg : hospitalsLg);
	const activeSm = $derived(pageContext === 'patients' ? patientsSm : hospitalsSm);

	const slidesLg = $derived([...activeLg, activeLg[0]]);
	const slidesSm = $derived([...activeSm, activeSm[0]]);

	function handleStart(e: MouseEvent | TouchEvent) {
		isDragging = true;
		startX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
	}

	function handleMove(e: MouseEvent | TouchEvent) {
		if (!isDragging) return;
		const x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
		currentOffset = x - startX;
	}

	function handleEnd() {
		if (!isDragging) return;
		isTransitioning = true;
		if (currentOffset < -70) {
			currentImage++;
		} else if (currentOffset > 70) {
			if (currentImage === 0) {
				isTransitioning = false;
				currentImage = activeLg.length;
				setTimeout(() => {
					isTransitioning = true;
					currentImage--;
				}, 20);
			} else {
				currentImage--;
			}
		}
		isDragging = false;
		currentOffset = 0;
	}

	function handleTransitionEnd() {
		if (currentImage >= activeLg.length) {
			isTransitioning = false;
			currentImage = 0;
		}
	}

	$effect(() => {
		const interval = setInterval(() => {
			if (!isDragging) {
				isTransitioning = true;
				currentImage++;
			}
		}, 4000);
		return () => clearInterval(interval);
	});
</script>

<section class="mx-auto w-full overflow-hidden" aria-label="Hero">
	<div
		class="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 pt-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10 lg:px-16 lg:pt-4"
	>
		<div class="text-center lg:text-left" use:reveal>
			<h1 class="text-4xl leading-tight font-bold tracking-tight text-slate-900 lg:text-5xl">
				{pageContext === 'patients' ? 'Financial Care for' : 'Smart Solutions for'}
				<span class="text-brand">{pageContext === 'patients' ? 'Patients' : 'Hospitals'}</span>
			</h1>
			<p class="mx-auto mt-4 max-w-md text-base text-slate-500 lg:mx-0 lg:text-lg">
				Reimagined medical lending to be as
				<span class="font-semibold text-slate-700">instant</span>
				and <span class="font-semibold text-slate-700">transparent</span> as it should be.
			</p>
			<button
				onclick={() =>
					document
						.getElementById('contact-form')
						?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
				class="group mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg active:scale-95"
			>
				<span>Contact Us</span>
				<ArrowRight size={16} class="transition-transform group-hover:translate-x-0.5" />
			</button>
		</div>

		<div class="min-w-0" use:reveal={{ delay: 120 }}>
			<div
				role="region"
				aria-roledescription="carousel"
				class="relative flex w-full cursor-grab active:cursor-grabbing"
				onmousedown={handleStart}
				onmousemove={handleMove}
				onmouseup={handleEnd}
				onmouseleave={handleEnd}
				ontouchstart={handleStart}
				ontouchmove={handleMove}
				ontouchend={handleEnd}
			>
				<div
					class="flex w-full"
					style="
                transform: translateX(calc(-{currentImage * 100}% + {currentOffset}px));
                transition: {isTransitioning && !isDragging
						? 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1)'
						: 'none'};
            "
					ontransitionend={handleTransitionEnd}
				>
					{#each slidesLg as _, i}
						<div class="slide-viewport">
							<div
								class="hero-image-card"
								style="
                            opacity: {currentImage === i ||
								(currentImage === activeLg.length && i === 0)
									? '1'
									: '0'};
                            transform: scale({currentImage === i ? '1' : '0.95'});
                            transition: opacity 600ms ease, transform 600ms ease;
                        "
							>
								<picture class="h-full w-full">
									<source srcset={slidesLg[i]} media="(min-width: 768px)" />
									<img
										src={slidesSm[i]}
										alt="Slide {i + 1}"
										class="pointer-events-none h-full w-full object-contain select-none"
									/>
								</picture>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* ... Phone size logic untouched ... */
	.slide-viewport {
		width: 100%;
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		padding: 0 6px;
	}

	.hero-image-card {
		position: relative;
		width: 100%;
		height: auto;
		min-height: 220px;
		overflow: hidden;
		background: transparent;
	}

	.hero-image-card img {
		width: 100% !important;
		height: auto !important;
		object-fit: contain;
	}

	@media (min-width: 768px) {
		.slide-viewport {
			padding: 0 24px;
		}

		.hero-image-card {
			/* Increased height from 30vh to 40vh */
			height: 40vh;
			width: auto;
			/* Increased max-width from 750px to 900px */
			max-width: 900px;
		}

		.hero-image-card img {
			height: 100% !important;
			width: auto !important;
		}
	}

	img {
		-webkit-user-drag: none;
		user-select: none;
	}

	:global(body) {
		overflow-x: hidden;
	}
</style>
