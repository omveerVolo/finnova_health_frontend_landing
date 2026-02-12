<script lang="ts">
	const faqs = [
		{
			id: 1,
			question: 'Who is eligible to apply for a Finnova healthcare loan?',
			answer:
				'Any patient undergoing treatment is eligible to apply for the loan. Loan approvals are based on quick digital checks and do not require lengthy procedures.'
		},
		{
			id: 2,
			question: 'What documents are required for approval?',
			answer:
				'Typically, only basic KYC documents (Aadhaar, PAN, income proof if required) are needed. The process is simple and fully digital.'
		},
		{
			id: 3,
			question: 'How fast can I get medical credit approved?',
			answer:
				'Most loans are approved within minutes when the eligibility criteria are met, ensuring patients don’t face delays in starting their treatment.'
		},
		{
			id: 4,
			question: 'What repayment options are available?',
			answer:
				'Finnova offers flexible repayment options, including EMIs tailored to patient needs. Repayments can be made monthly through convenient digital channels.'
		},
		{
			id: 5,
			question: 'Are there any pre-closure or hidden charges?',
			answer:
				'No. Finnova offers zero pre-closure charges and maintains complete transparency with patients about repayment terms.'
		},
		{
			id: 6,
			question: 'Will taking a Finnova loan affect my credit score?',
			answer:
				'Repayments are reported like any other financial product. Timely repayment can improve your credit score, while delays may impact it.'
		},
		{
			id: 7,
			question: 'Can I apply for Finnova credit before admission?',
			answer:
				'Yes, patients can apply in advance for planned procedures, ensuring funds are available when needed. For emergencies, approvals are processed within minutes at the hospital.'
		},
		{
			id: 8,
			question: 'Do I need a guarantor for the loan?',
			answer:
				'In most cases, no guarantor is required. Loan approvals are based on digital checks of your eligibility.'
		},
		{
			id: 9,
			question: 'What happens if I miss an EMI?',
			answer:
				'If an EMI is missed, Finnova will notify you immediately and provide options to regularize payments. Patients are encouraged to stay on track to avoid late fees or impact to their credit score.'
		},
		{
			id: 10,
			question: 'Can I prepay my loan early?',
			answer: 'Yes. You can prepay your loan at any time without penalty or pre-closure charges.'
		},
		{
			id: 11,
			question: 'Can I use a portion of the loan amount for personal use?',
			answer:
				'No. Finnova offers a medical loan. The loan amount cannot be utilized for any other purposes.'
		},
		{
			id: 12,
			question: 'Can the loan amount be transferred to my personal account?',
			answer:
				'No. The approved loan amount is transferred directly to the hospital when the bill is raised or at the time of discharge.'
		},
		{
			id: 13,
			question: 'Are there interest-free or no-cost EMI options?',
			answer: 'No-cost EMI and low cost EMI options are available with Finnova.'
		},
		{
			id: 14,
			question: 'Is Finnova available across India?',
			answer:
				'Yes. Finnova has a growing network of partner hospitals across India, so patients can access credit solutions nationwide.'
		},
		{
			id: 15,
			question: 'How secure is the Finnova platform?',
			answer:
				'We use bank-grade encryption, secure payment gateways, and follow RBI-compliant digital lending practices to ensure full data and transaction safety.'
		},
		{
			id: 16,
			question: 'How does Finnova ensure data privacy and security?',
			answer:
				'We follow strict data security protocols and comply with Indian regulatory standards. Patient and hospital data is encrypted and never shared without consent.'
		},
		{
			id: 17,
			question: 'Which hospitals are partnered with Finnova?',
			answer:
				'Finnova has partnered with over 14,000 hospitals across India, ranging from large multispecialty hospitals to smaller regional centers.'
		},
		{
			id: 18,
			question: 'Is Finnova regulated by financial authorities in India?',
			answer:
				'Yes. Finnova operates under the regulatory framework applicable to NBFCs and digital lenders in India, ensuring compliance and transparency.'
		},
		{
			id: 19,
			question: 'How is Finnova different from insurance or traditional loans?',
			answer:
				'Insurance may not cover all treatments, and traditional loans can be slow. Finnova bridges this gap by offering instant medical credit, fast hospital settlements, and patient-friendly repayment — with no delays and no hidden charges.'
		},
		{
			id: 20,
			question: 'How is Finnova different from credit cards?',
			answer:
				'Credit cards have high interest rates and may not always be accepted for large medical bills. Finnova offers structured repayment plans, lower costs, and direct hospital settlements.'
		},
		{
			id: 21,
			question: 'What specialties or treatments does Finnova cover?',
			answer:
				'Finnova covers a wide range of medical treatments — from surgeries and emergency care to specialized procedures. Coverage depends on the partner hospital and treatment plan.'
		},
		{
			id: 22,
			question: 'How do hospitals get onboarded with Finnova?',
			answer:
				'The onboarding process is quick and digital. Our team works with hospital administrators to set up integration, provide staff training, and go live in a matter of days.'
		},
		{
			id: 23,
			question: 'Can Finnova be used along with insurance?',
			answer:
				'Yes. Patients can use Finnova credit to cover expenses not paid by insurance — such as deductibles, non-covered procedures, or co-payments.'
		},
		{
			id: 24,
			question: 'How long has Finnova been in operation?',
			answer:
				'Finnova was founded in 2024 by Volo Health Services, a leading healthcare technology and fintech company in India, and has already touched over 2.5 million lives.'
		},
		{
			id: 25,
			question: 'Who can I contact for support?',
			answer:
				'You can reach our support team by filling the contact us form on our website- finnova.health'
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
			<div
				class="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ad5389]/10 bg-[#ad5389]/5 px-4 py-1"
			>
				<span class="text-[10px] font-black tracking-[0.2em] text-[#ad5389] uppercase">Support</span
				>
			</div>
			<h3 class="text-4xl font-bold text-[#390265] lg:text-5xl">
				FAQ for <span class="text-[#ad5389]">Patients</span>
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
