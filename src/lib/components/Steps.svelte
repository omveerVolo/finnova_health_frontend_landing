<script>
	import { page_context } from '$lib/state/PageContex.svelte';
	// If you need to initialize AOS (Animate On Scroll) in Svelte,
	// you'd typically do it in the parent layout or onMount here.
	import { onMount } from 'svelte';

	onMount(() => {
		// AOS.init();
	});
</script>

<section id="howToApply" class="mx-auto max-w-7xl bg-white py-12">
	<div class="container mx-auto px-8">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-8 text-center md:mb-0 md:w-1/2 md:text-start" data-aos="fade-up">
				<h1 class="text-purplePrimary mb-4 text-4xl font-bold">How to Apply?</h1>
				<h5 class="text-purpleSecondary mb-5 text-2xl" data-aos-delay="100">
					Get Your Medical Loan In <br class="md:hidden" />
					<span class="font-bold">3 Quick Steps</span>
				</h5>
			</div>

			<div class="text-center md:w-1/2" data-aos="fade-up" data-aos-delay="200">
				{#if page_context.current == 'patients'}
					<img
						src="Steps/Steps_patient.png"
						alt="3 Steps to Apply"
						class="mx-auto w-full max-w-sm"
					/>
				{:else}
					<img
						src="Steps/Steps_hospital.png"
						alt="3 Steps to Apply"
						class="mx-auto w-full max-w-sm"
					/>
				{/if}
			</div>
		</div>
	</div>
</section>
