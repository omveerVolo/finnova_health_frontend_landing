<script lang="ts">
	import { reveal } from '$lib/utility/reveal';

	const testimonials = [
		{
			name: 'Shree Dental Speciality Hospital, Mumbai',
			text: 'We never imagined a medical finance service could be this fast and seamless – approvals up to ₹6 lakhs, no hassle. Finnova is truly helping us grow.',
			stars: 5,
			disease: 'Shree Dental Speciality Hospital, Mumbai'
		},
		{
			name: 'Dr. Vijay',
			text: 'We’ve added 10–12 new admissions a month since we started using Finnova. Our monthly business has grown by 20–25%.',
			stars: 5,
			disease: 'SVS Hospital, Hyderabad'
		},
		{
			name: 'Mr. Rahul',
			text: "A premium client received instant approval for ₹5 lakhs. Finnova has made patient conversion much easier. It's fast, transparent, and extremely user-friendly.",
			stars: 5,
			disease: 'Lifero Skin & Hair Clinic, Pune'
		},
		{
			name: 'Dr. Pradeep',
			text: 'Over the past few months, Finnova has helped us support patients who otherwise would have compromised on treatment. It’s enabled us to offer quality care without compromise.',
			stars: 5,
			disease: 'Shanti Hospital, Mumbai'
		},
		{
			name: 'Dr. Avadhut',
			text: 'It’s truly 100% digital – we’ve seen approvals at 11 PM, even during holidays, without a single paper document. That’s when we knew we could trust this system.',
			stars: 5,
			disease: 'Lopmudra Hospital, Pune'
		}
	];

	let scrollContainer: HTMLDivElement;

	function scroll(direction: 'left' | 'right') {
		const offset = direction === 'left' ? -400 : 400;
		scrollContainer.scrollBy({ left: offset, behavior: 'smooth' });
	}
</script>

<section class="w-full bg-[#f8fafc] px-6 pt-12 pb-24 lg:px-16 lg:pb-32" id="testimonials">
	<div class="mx-auto max-w-[1300px]">
		<div class="mb-16 border-t border-slate-200 pt-16">
			<div class="flex flex-col items-end justify-between gap-8 md:flex-row">
				<div class="max-w-2xl">
					<div class="mb-4 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1">
						<span class="text-[10px] font-black tracking-[0.2em] text-brand uppercase"
							>Success Stories</span
						>
					</div>
					<h2 class="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
						Partnering with <span class="text-brand">India's Finest</span> Hospitals
					</h2>
				</div>

				<div class="flex gap-3">
					<button
						onclick={() => scroll('left')}
						aria-label="Scroll testimonials left"
						class="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all hover:border-brand hover:text-brand"
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
							stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
						>
					</button>
					<button
						onclick={() => scroll('right')}
						aria-label="Scroll testimonials right"
						class="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all hover:border-brand hover:text-brand"
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
							stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
						>
					</button>
				</div>
			</div>
		</div>

		<div
			bind:this={scrollContainer}
			class="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
		>
			{#each testimonials as t, i}
				<div class="w-[85%] shrink-0 snap-start md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
					<div
						class="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5"
						use:reveal={{ delay: i * 80 }}
					>
						<div>
							<div class="mb-6 flex gap-1">
								{#each Array(t.stars) as _}
									<svg class="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
										/>
									</svg>
								{/each}
							</div>
							<p class="mb-8 text-lg leading-relaxed text-slate-600">
								"{t.text}"
							</p>
						</div>

						<div class="flex items-center gap-4 border-t border-slate-100 pt-6">
							<div
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-sm font-bold text-brand uppercase"
							>
								{t.disease?.substring(0, 2)}
							</div>
							<div>
								<h4 class="line-clamp-1 text-base font-bold text-slate-900">{t.disease}</h4>
								<p class="text-xs font-semibold tracking-wider text-slate-400 uppercase">
									{t.name}
								</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
