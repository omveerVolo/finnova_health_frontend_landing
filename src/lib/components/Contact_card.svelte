<script lang="ts">
	import { User, Phone, Building2, MapPin, ArrowRight, Send } from '@lucide/svelte';
	import { trackEvent } from '$lib/utility/analytics';
	import { onMount } from 'svelte';

	let fullName = $state('');
	let phoneNumber = $state('');
	let hospitalName = $state('');
	let cityName = $state('');
	let submitted = $state(false);

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		if (params.get('hospital')) hospitalName = params.get('hospital') || '';
		if (params.get('city')) cityName = params.get('city') || '';
	});

	const handleSubmit = () => {
		// 3. Track Event with Data
		if (!fullName || !phoneNumber || !hospitalName || !cityName) {
			return;
		}
		trackEvent('generate_lead', {
			category: 'Contact Form',
			label: 'Finnova Landing Page',
			hospital: hospitalName,
			city: cityName,

			has_name: !!fullName,
			has_phone: !!phoneNumber
		});

		fullName = '';
		phoneNumber = '';
		hospitalName = '';
		cityName = '';

		submitted = true;
		setTimeout(() => (submitted = false), 3000);
	};
</script>

<div class="mt-3 bg-slate-100/50 p-1">
	<div id="contact-form" class="relative z-20 px-2 pb-4 lg:px-16 lg:pb-4">
		<div
			class="relative mx-auto max-w-[1600px] overflow-hidden rounded-2xl border-[#723158] bg-[#ad5389] px-6 py-8 shadow-xl lg:px-10 lg:py-10"
		>
			<div class="pointer-events-none absolute -top-4 -right-4 opacity-[0.07]">
				<Phone size={120} strokeWidth={1} class="text-white" />
			</div>
			<div class="pointer-events-none absolute -bottom-8 left-1/3 opacity-[0.04]">
				<Send size={160} strokeWidth={1} class="text-white" />
			</div>

			<div class="relative z-10">
				<div class="mb-6 px-1">
					<h2 class="text-2xl font-bold tracking-tight text-white lg:text-3xl">
						{submitted ? 'Thanks for reaching out!' : 'Get in touch'}
					</h2>
					<p
						class="mt-1 hidden text-[10px] font-medium tracking-wider text-white/70 uppercase lg:block"
					>
						Direct Connect • 2000+ Hospitals
					</p>
				</div>

				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
					<label
						class="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/10 px-5 py-4 transition-all focus-within:bg-white"
					>
						<User size={18} class="shrink-0 text-white/50 group-focus-within:text-[#ad5389]" />
						<input
							type="text"
							bind:value={fullName}
							placeholder="Full Name"
							class="w-full bg-transparent font-sans text-sm font-bold text-white outline-none placeholder:text-white/40 focus:text-slate-900"
						/>
					</label>

					<label
						class="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/10 px-5 py-4 transition-all focus-within:bg-white"
					>
						<Phone size={18} class="shrink-0 text-white/50 group-focus-within:text-[#ad5389]" />
						<input
							type="text"
							bind:value={phoneNumber}
							placeholder="Contact Number"
							class="w-full bg-transparent font-sans text-sm font-bold text-white outline-none placeholder:text-white/40 focus:text-slate-900"
						/>
					</label>

					<label
						class="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/10 px-5 py-4 transition-all focus-within:bg-white"
					>
						<Building2 size={18} class="shrink-0 text-white/50 group-focus-within:text-[#ad5389]" />
						<input
							type="text"
							bind:value={hospitalName}
							placeholder="Hospital Name"
							class="w-full bg-transparent font-sans text-sm font-bold text-white outline-none placeholder:text-white/40 focus:text-slate-900"
						/>
					</label>

					<label
						class="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/10 px-5 py-4 transition-all focus-within:bg-white"
					>
						<MapPin size={18} class="shrink-0 text-white/50 group-focus-within:text-[#ad5389]" />
						<input
							type="text"
							bind:value={cityName}
							placeholder="Your City"
							class="w-full bg-transparent font-sans text-sm font-bold text-white outline-none placeholder:text-white/40 focus:text-slate-900"
						/>
					</label>

					<button
						onclick={handleSubmit}
						class="flex h-full min-h-[56px] cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white px-6 font-sans text-sm font-bold tracking-widest text-[#ad5389] uppercase transition-all hover:bg-slate-100 hover:shadow-lg active:scale-95 active:bg-slate-200"
					>
						<span>{submitted ? 'Sent' : 'Contact'}</span>
						<ArrowRight size={18} />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
