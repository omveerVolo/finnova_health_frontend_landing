<script>
	import { page_context } from '$lib/state/PageContex.svelte';
	import { reveal } from '$lib/utility/reveal';
	// you'd typically do it in the parent layout or onMount here.
</script>

<section id="howToApply" class="mx-auto max-w-7xl bg-white py-16 lg:py-24">
	<div class="container mx-auto px-8">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-8 text-center md:mb-0 md:w-1/2 md:text-start" use:reveal>
				<h1 class="mb-4 text-4xl font-bold tracking-tight text-brand-deep">How to Apply?</h1>
				<h5 class="mb-5 text-2xl text-slate-600">
					Get Your Medical Loan In <br class="md:hidden" />
					<span class="font-bold">3 Quick Steps</span>
				</h5>
			</div>

			<div class="text-center md:w-1/2" use:reveal={{ delay: 120 }}>
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
