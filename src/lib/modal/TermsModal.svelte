<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	let { close } = $props();

	// Handle escape key to close
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	transition:fade={{ duration: 200 }}
	class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 px-4 backdrop-blur-sm"
	onclick={close}
	role="button"
	tabindex="0"
>
	<div
		transition:scale={{ start: 0.95, duration: 200 }}
		class="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl lg:p-12"
		onclick={(e) => e.stopPropagation()}
		role="none"
	>
		<button
			onclick={close}
			class="absolute top-6 right-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 transition-all hover:border-slate-300 hover:text-slate-900"
			aria-label="Close Modal"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
			>
		</button>

		<div class="mb-8 border-b border-slate-100 pb-6">
			<h2 class="mb-2 text-sm font-bold tracking-[0.2em] text-brand uppercase">Legal</h2>
			<h3 class="text-3xl font-bold text-slate-900">Terms & Conditions</h3>
		</div>

		<div
			class="scrollbar-thin scrollbar-thumb-slate-200 max-h-[60vh] space-y-8 overflow-y-auto pr-4 text-sm leading-relaxed font-light text-slate-600"
		>
			<p>
				Welcome to <strong>Finnova</strong> (“we,” “our,” “us”), a healthcare financing platform designed
				to assist patients in managing out-of-pocket medical expenses. By accessing our services, you
				agree to be bound by these Terms.
			</p>

			<section>
				<h4 class="mb-3 text-base font-bold text-slate-900">1. Services Provided</h4>
				<p>Finnova facilitates financing through partner lending institutions. Services include:</p>
				<ul class="mt-2 ml-2 list-inside list-disc space-y-1">
					<li>No-cost / low-cost EMI options</li>
					<li>Instant loan approval (subject to eligibility)</li>
					<li>Paperless transactions</li>
				</ul>
			</section>

			<section>
				<h4 class="mb-3 text-base font-bold text-slate-900">2. Eligibility</h4>
				<p>
					To use our services, you must be at least 21 years old, a resident of India, and provide
					valid KYC documents. We reserve the right to refuse service without assigning reason.
				</p>
			</section>

			<section>
				<h4 class="mb-3 text-base font-bold text-slate-900">3. Loan Approval</h4>
				<p>
					Loan approval, amounts, interest rates, and repayment terms are determined solely by the
					lending partner. Finnova does not guarantee specific approval or rates.
				</p>
			</section>

			<section>
				<h4 class="mb-3 text-base font-bold text-slate-900">4. User Responsibilities</h4>
				<p>
					You agree to provide accurate information, use financing only for lawful medical purposes,
					and repay the loan as per the lender agreement.
				</p>
			</section>

			<section>
				<h4 class="mb-3 text-base font-bold text-slate-900">5. Limitation of Liability</h4>
				<p>
					Finnova is a facilitator, not a direct lender. We are not responsible for service quality
					issues arising from hospitals or lending partners.
				</p>
			</section>

			<section>
				<h4 class="mb-3 text-base font-bold text-slate-900">6. Contact Information</h4>
				<p>
					For any queries about these Terms, please contact us at <span
						class="font-semibold text-slate-900 underline">support@volohealth.in</span
					>.
				</p>
			</section>

			<p class="pt-4 text-xs text-slate-400 italic">
				⚠ Disclaimer: All financing is subject to eligibility criteria, verification, and approval
				by our lending partners.
			</p>
		</div>

		<div class="h-4"></div>
	</div>
</div>

<style>
	/* Consistent thin scrollbar */
	.scrollbar-thin::-webkit-scrollbar {
		width: 4px;
	}
	.scrollbar-thin::-webkit-scrollbar-track {
		background: transparent;
	}
	.scrollbar-thin::-webkit-scrollbar-thumb {
		background: #e2e8f0;
		border-radius: 20px;
	}
</style>
