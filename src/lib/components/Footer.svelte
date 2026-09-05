<script lang="ts">
	import TermsModal from '$lib/modal/TermsModal.svelte';
	import PrivacyModal from '$lib/modal/PrivacyModal.svelte';

	let showTerms = $state(false);
	let showPrivacy = $state(false);

	const currentYear = new Date().getFullYear();
</script>

<footer id="footer" class="w-full border-t border-slate-200 bg-[#f8fafc] px-6 py-12 lg:px-16">
	<div class="mx-auto max-w-[1400px]">
		<div class="flex flex-col items-center gap-8 text-center">
			<ul class="flex items-center gap-8">
				<li>
					<button
						onclick={() => (showTerms = true)}
						class="cursor-pointer text-sm font-semibold tracking-wide text-slate-600 transition-colors hover:text-brand"
					>
						Terms of Use
					</button>
				</li>
				<li>
					<button
						onclick={() => (showPrivacy = true)}
						class="cursor-pointer text-sm font-semibold tracking-wide text-slate-600 transition-colors hover:text-brand"
					>
						Privacy Policy
					</button>
				</li>
			</ul>

			<p class="max-w-2xl text-xs leading-relaxed font-light text-slate-400 italic">
				*Financing is subject to eligibility, verification, and approval. Terms and conditions
				apply. The information provided is not a substitute for professional medical, financial, or
				legal advice.
			</p>

			<div class="h-px w-20 bg-slate-200"></div>

			<div class="text-xs text-slate-500">
				<p>
					Copyright © 2024–{currentYear}
					<a
						href="https://volohealth.in/"
						target="_blank"
						rel="noopener noreferrer"
						class="ml-1 font-bold text-slate-900 transition-all hover:text-brand"
					>
						Volo Health Services Private Limited®.
					</a>
					All rights reserved.
				</p>
			</div>
		</div>
	</div>
</footer>

{#if showTerms}
	<TermsModal close={() => (showTerms = false)} />
{/if}

{#if showPrivacy}
	<PrivacyModal close={() => (showPrivacy = false)} />
{/if}

<style>
	img {
		-webkit-user-drag: none;
	}

	.transition-transform {
		transition-property: transform;
	}
</style>
