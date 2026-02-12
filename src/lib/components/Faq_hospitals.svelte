<script lang="ts">
	import { page_context } from '$lib/state/PageContex.svelte';
	import { slide } from 'svelte/transition';

	const faqs = [
		{
			id: 1,
			question: 'How does Finnova improve hospital cash flow?',
			answer:
				'Finnova provides instant credit to patients, ensuring hospitals receive timely payments without delays. This reduces receivables, strengthens cash flow, and allows hospitals to focus on delivering uninterrupted care.'
		},
		{
			id: 2,
			question: 'Are there any charges or fees for hospitals?',
			answer:
				'No hidden fees. Finnova operates transparently, with terms agreed upfront. Hospitals benefit from improved patient retention and faster settlements without additional financial burden.'
		},
		{
			id: 3,
			question: 'Does Finnova integrate with existing hospital systems?',
			answer:
				'Yes. Finnova is designed to integrate seamlessly with hospital billing and administration processes, minimizing disruption to existing workflows.'
		},
		{
			id: 4,
			question: 'What kind of support does Finnova provide to hospital finance teams?',
			answer:
				'We offer dedicated support, training, and easy-to-use dashboards so finance teams can track settlements, repayments, and patient status in real time.'
		},
		{
			id: 5,
			question: 'Can Finnova help increase patient retention?',
			answer:
				'Yes. By offering patients instant access to medical credit, hospitals reduce treatment dropouts due to financial stress. This leads to higher retention and improved outcomes.'
		},
		{
			id: 6,
			question: 'What is the settlement process and how fast is it?',
			answer:
				'Hospitals receive settlements within hours of approval. Our digital-first platform ensures a smooth process, eliminating lengthy paperwork and delays.'
		},
		{
			id: 7,
			question: 'Does Finnova offer reporting or analytics for hospitals?',
			answer:
				'Yes. Hospitals have access to dashboards that provide insights into patient credit uptake, settlement timelines, and repayment performance.'
		},
		{
			id: 8,
			question: 'Can smaller or regional hospitals also partner with Finnova?',
			answer:
				'Absolutely. Finnova is designed to support hospitals of all sizes — from large multispecialty networks to regional and local hospitals and clinics.'
		},
		{
			id: 9,
			question: 'How secure is the Finnova platform?',
			answer:
				'We use bank-grade encryption, secure payment gateways, and follow RBI-compliant digital lending practices to ensure full data and transaction safety.'
		},
		{
			id: 10,
			question: 'How do hospitals get onboarded with Finnova?',
			answer:
				'The onboarding process is quick and digital. Our team works with hospital administrators to set up integration, provide staff training, and go live in a matter of days.'
		}
	];

	let openId = $state<number | null>(null);
	let showAll = $state(false);

	let visibleFaqs = $derived(showAll ? faqs : faqs.slice(0, 6));

	function toggleFaq(id: number) {
		openId = openId === id ? null : id;
	}
</script>

<section id="faq-hospitals" class="w-full bg-white px-6 py-24 lg:px-16">
	<div class="mx-auto max-w-[1000px]">
		<div class="mb-16 text-center">
			<div class="mb-4 inline-flex items-center gap-2 rounded-full bg-[#ad5389]/5 px-4 py-1">
				<span class="text-[10px] font-black tracking-[0.2em] text-[#ad5389] uppercase">Support</span
				>
			</div>
			<h3 class="text-4xl font-bold text-[#390265] lg:text-5xl">
				FAQ for <span class="text-[#ad5389]">Hospitals</span>
			</h3>
		</div>

		<div class="flex flex-col border-t border-slate-100">
			{#each visibleFaqs as faq (faq.id)}
				<div
					class="border-b border-slate-100 transition-colors"
					class:bg-slate-50={openId === faq.id}
				>
					<button
						onclick={() => toggleFaq(faq.id)}
						class="group flex w-full cursor-pointer items-center justify-between px-4 py-8 text-left transition-all"
					>
						<span
							class="text-lg font-medium tracking-tight transition-colors lg:text-xl {openId ===
							faq.id
								? 'text-[#ad5389]'
								: 'text-slate-900'}"
						>
							{faq.question}
						</span>

						<div
							class="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300
                            {openId === faq.id
								? 'rotate-180 border-[#ad5389] bg-[#ad5389] shadow-lg shadow-[#ad5389]/20'
								: 'border-slate-200 bg-white group-hover:border-[#ad5389]'}"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class={openId === faq.id
									? 'text-white'
									: 'text-slate-400 group-hover:text-[#ad5389]'}
							>
								<path d="m6 9 6 6 6-6" />
							</svg>
						</div>
					</button>

					<div
						class="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out"
						style="grid-template-rows: {openId === faq.id ? '1fr' : '0fr'}; 
                               opacity: {openId === faq.id ? '1' : '0'};"
					>
						<div class="overflow-hidden">
							<p class="max-w-3xl px-4 pb-8 text-base leading-relaxed font-medium text-slate-500">
								{faq.answer}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		{#if faqs.length > 6}
			<div class="mt-16 flex justify-center">
				<button
					onclick={() => (showAll = !showAll)}
					class="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-[#390265] bg-white px-10 py-4 text-sm font-bold text-[#390265] transition-all hover:bg-[#390265] hover:text-white"
				>
					<span>{showAll ? 'SHOW LESS' : 'SHOW ALL QUESTIONS'}</span>
					<svg
						class="h-4 w-4 transition-transform duration-300 {showAll ? 'rotate-180' : ''}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
					</svg>
				</button>
			</div>
		{/if}
	</div>
</section>
