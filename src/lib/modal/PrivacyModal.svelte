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
			<h3 class="text-3xl font-bold text-slate-900">Privacy Policy</h3>
		</div>

		<div
			class="scrollbar-thin scrollbar-thumb-slate-200 max-h-[60vh] space-y-8 overflow-y-auto pr-4 text-sm leading-relaxed font-light text-slate-600"
		>
			<p>
				At Finnova, we take your privacy seriously and are fully committed to protecting the
				personal information you share with us. This privacy policy outlines how we collect, use,
				store, and safeguard your data when you use our website and services.
			</p>

			<section>
				<h4 class="mb-3 text-base font-bold text-slate-900">Information We Collect</h4>
				<p>
					When you interact with our platform, you may be required to provide personal information
					such as your name, contact details, identification documents, address, and family member
					details. We may also collect technical information including IP address, geolocation data,
					and cookies to ensure security.
				</p>
			</section>

			<section>
				<h4 class="mb-3 text-base font-bold text-slate-900">Usage of Information</h4>
				<p>
					All information shared is used for the legitimate purpose of offering our
					services—verifying identity, processing service requests, and sharing data with relevant
					third-party providers (insurance/financers) where required. We do not use your information
					for marketing without consent.
				</p>
			</section>

			<section>
				<h4 class="mb-3 text-base font-bold text-slate-900">Data Security and Retention</h4>
				<p>
					Our platform is equipped with advanced security protocols and encryption to prevent
					unauthorized access. Personal data is retained for up to two years from last interaction
					unless mandated otherwise by law.
				</p>
			</section>

			<section>
				<h4 class="mb-3 text-base font-bold text-slate-900">User Rights</h4>
				<p>
					You have rights to access, correct, or request deletion of your information. For any
					requests or concerns, reach us at <span class="font-semibold text-slate-900 underline"
						>support@volohealth.in</span
					>.
				</p>
			</section>
		</div>

		<div
			class="pointer-events-none absolute bottom-12 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent"
		></div>
	</div>
</div>

<style>
	/* Custom thin scrollbar for a better look */
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
