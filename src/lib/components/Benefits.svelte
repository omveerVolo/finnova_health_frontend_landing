<script lang="ts">
	import { page_context } from '$lib/state/PageContex.svelte';
	import { ChevronDown } from '@lucide/svelte';
	import { fade, fly } from 'svelte/transition';

	const theme = {
		bg: 'bg-[#f8fafc]',
		cardBg: 'bg-white',
		accent: 'bg-[#ad5389]',
		textMain: 'text-[#ad5389]',
		textMuted: 'text-slate-500',
		border: 'border-slate-200'
	};

	const content = $derived({
		patients: {
			images: [
				'/keyBenefits- Patients/tool_10225688.png',
				'/keyBenefits- Patients/stopwatch_1511951.png',
				'/keyBenefits- Patients/analysis_15225698.png'
			],
			data: [
				{
					title: 'No Cost / Low',
					subtitle: 'Cost EMI',
					desc: 'Manage medical expenses with flexible, interest-free payment plans.'
				},
				{
					title: 'Instant Loan',
					subtitle: 'Approval',
					desc: 'Get your credit limit approved in minutes, not days.'
				},
				{
					title: 'Paperless',
					subtitle: 'Transaction',
					desc: 'A completely digital journey from application to disbursement.'
				}
			]
		},
		hospitals: {
			images: [
				'/KeyBenefits - Hospital/QLD.png',
				'/KeyBenefits - Hospital/24hr.png',
				'/KeyBenefits - Hospital/instant.png'
			],
			data: [
				{
					title: 'Quick Loan',
					subtitle: 'Disbursement',
					desc: 'Improve cash flow with rapid capital release for hospital needs.'
				},
				{
					title: '24-Hour',
					subtitle: 'Settlement',
					desc: 'Efficient processing ensures funds hit your account within a day.'
				},
				{
					title: 'Instant',
					subtitle: 'Eligibility Check',
					desc: 'Evaluate partnership potential instantly with our digital portal.'
				}
			]
		}
	});

	let pageContext = $derived(page_context.current);
	let activeContent = $derived(pageContext === 'patients' ? content.patients : content.hospitals);

	const dynamicLabels = $derived({
		tag: pageContext === 'patients' ? 'Patient-First Financing' : 'Hospital Growth Partner',
		main: pageContext === 'patients' ? 'Financial Care for' : 'Smart Solutions for',
		accent: pageContext === 'patients' ? 'Patients' : 'Hospitals'
	});
</script>

<section id="our-benefits" class="w-full {theme.bg} bg-gray-100 px-6 pt-6 pb-12 lg:px-16 lg:pt-6">
	<div class="mx-auto max-w-[1300px]">
		<div class="flex justify-center pb-8 text-gray-200 lg:pb-7" in:fade>
			<div
				class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-200 transition-colors"
			>
				<ChevronDown size={20} strokeWidth={2.5} />
			</div>
		</div>
		<div class="mb-10 flex flex-col items-center text-center lg:mb-16">
			{#key pageContext}
				<div
					in:fly={{ y: 10, duration: 400 }}
					class="mb-8 inline-flex items-center gap-2 rounded-full border border-[#ad5389]/10 bg-[#ad5389]/5 px-4 py-1"
				>
					<span class="text-[10px] font-black tracking-[0.2em] {theme.textMain} uppercase">
						{dynamicLabels.tag}
					</span>
				</div>

				<h3 class="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl" in:fade>
					{dynamicLabels.main}
					<span class="relative inline-block">
						<span class="relative z-10 {theme.textMain}">{dynamicLabels.accent}</span>
						<span
							class="absolute bottom-1 left-0 -z-10 h-2 w-full bg-[#ad5389]/10 lg:bottom-2 lg:h-3"
						></span>
					</span>
				</h3>

				<p
					class="mt-4 max-w-xl text-sm font-medium text-slate-500 lg:mt-6 lg:text-lg"
					in:fade={{ delay: 100 }}
				>
					Reimagined medical lending to be as <span class="text-slate-800">instant</span> and
					<span class="text-slate-800">transparent</span> as it should be.
				</p>
			{/key}
		</div>

		<div class="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-6">
			{#if activeContent.data[0]}
				<div
					class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border {theme.border} {theme.cardBg} p-8 transition-all hover:shadow-2xl lg:col-span-7 lg:row-span-2 lg:p-12"
				>
					<div class="flex flex-col gap-6">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 transition-colors group-hover:bg-[#ad5389]/5 lg:h-20 lg:w-20"
						>
							<img
								src={activeContent.images[0]}
								alt={activeContent.data[0].title}
								class="h-10 w-10 object-contain grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 lg:h-12 lg:w-12"
							/>
						</div>
						<div>
							<h4 class="text-2xl font-bold tracking-tight text-slate-900 lg:text-4xl">
								{activeContent.data[0].title}
								<span class={theme.textMain}>{activeContent.data[0].subtitle}</span>
							</h4>
							<p class="mt-4 text-base leading-relaxed text-slate-500 lg:text-lg">
								{activeContent.data[0].desc}
							</p>
						</div>
					</div>
					<div
						class="mt-8 h-1.5 w-16 {theme.accent} rounded-full transition-all duration-500 group-hover:w-40"
					></div>
				</div>
			{/if}

			{#each activeContent.data.slice(1) as benefit, i}
				<div
					class="group flex items-center gap-6 rounded-3xl border {theme.border} {theme.cardBg} p-6 transition-all hover:border-[#ad5389]/30 hover:shadow-xl lg:col-span-5 lg:p-10"
				>
					<div
						class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 transition-colors group-hover:bg-[#ad5389]/5 lg:h-16 lg:w-16"
					>
						<img
							src={activeContent.images[i + 1]}
							alt={benefit.title}
							class="h-8 w-8 object-contain grayscale transition-all duration-500 group-hover:grayscale-0 lg:h-10 lg:w-10"
						/>
					</div>
					<div>
						<h4
							class="text-lg font-bold text-slate-900 transition-colors group-hover:{theme.textMain} lg:text-2xl"
						>
							{benefit.title}
						</h4>
						<span class="text-[10px] font-bold tracking-widest text-slate-400 uppercase lg:text-xs">
							{benefit.subtitle}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
