<script lang="ts">
	const testimonials = [
		{
			name: 'Jitendra and Priya Bhargav',
			text: 'Preparing to become parents was overwhelming - the procedures, the wait and especially, the cost. We were in two minds till our doctor suggested Finnova’s smart EMI option. We got the loan instantly. After 2 months of treatment, we are expecting! We could come so far because of Finnova.',
			stars: 5,
			disease: 'IVF Couple'
		},
		{
			name: 'Prof M Srinivasan',
			text: 'My father needed a pacemaker and our insurance cover was for ₹ 3 lakh. The treatment, however, was for ₹ 4 lakh. It was a medical emergency we were not prepared for. We asked the hospital to help us. They shared my details with Finnova. The team called me back, checked my eligibility on the call after I shared the KYC. And the very day, I was given the confirmation that I was eligible for a loan of ₹ 1 lakh. Dad got the surgery and the insurance company and Finnova paid the hospital for the treatment. It was a hassle-free experience with Finnova.',
			stars: 4,
			disease: 'Heart Surgery'
		},
		{
			name: 'Sumona Vishwakarma',
			text: 'I met with an accident. I needed root canal treatment and implants. The expenses were sudden and we had exhausted all the family savings on my brother’s admission in MBA. The treatment was urgent as my front teeth were broken. Then the dentist told us about Finnova. I instantly found out I was eligible for a loan and the dentists were paid on time! Look at me now, I am smiling again with confidence.',
			stars: 5,
			disease: 'Dental Support'
		}
	];

	let scrollContainer: HTMLDivElement;

	// Use a simple object for reliable reactivity in Svelte 5
	let expandedStates = $state<{ [key: number]: boolean }>({});

	function toggleExpand(index: number) {
		expandedStates[index] = !expandedStates[index];
	}

	function scroll(direction: 'left' | 'right') {
		const offset = direction === 'left' ? -400 : 400;
		scrollContainer.scrollBy({ left: offset, behavior: 'smooth' });
	}
</script>

<section class="w-full bg-[#f8fafc] px-6 py-24 lg:px-16" id="testimonials">
	<div class="max-w-2xl pb-12">
		<div class="mb-4 inline-flex items-center gap-2 rounded-full bg-[#ad5389]/10 px-4 py-1">
			<span class="text-[10px] font-black tracking-[0.2em] text-[#ad5389] uppercase">
				Testimonials
			</span>
		</div>
		<h2 class="text-4xl font-bold tracking-tight text-[#390265] lg:text-5xl">
			Real Stories of <span class="text-[#ad5389]">Recovery & Hope</span>
		</h2>
		<p class="mt-4 text-lg font-medium text-slate-600">
			See how Finnova has helped thousands of families focus on healing instead of hospital bills.
		</p>
	</div>
	<div class="mx-auto max-w-[1300px]">
		<div
			bind:this={scrollContainer}
			class="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8"
		>
			{#each testimonials as t, i}
				<div class="w-full shrink-0 snap-start md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
					<div
						class="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-2xl hover:shadow-[#390265]/5"
					>
						<div>
							<div class="mb-6 flex items-center justify-between">
								<div class="flex gap-0.5">
									{#each Array(t.stars) as _}
										<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
									{/each}
								</div>
								<div
									class="rounded-lg bg-[#ad5389]/5 px-3 py-1 text-[10px] font-black tracking-wider text-[#ad5389] uppercase ring-1 ring-[#ad5389]/20 ring-inset"
								>
									{t.disease}
								</div>
							</div>

							<div class="relative">
								<p
									class="mb-4 text-lg leading-relaxed font-medium text-slate-700 italic {expandedStates[
										i
									]
										? ''
										: 'line-clamp-4'}"
								>
									"{t.text}"
								</p>

								{#if t.text.length > 180}
									<button
										type="button"
										onclick={() => toggleExpand(i)}
										class="mb-6 block cursor-pointer text-sm font-bold text-[#ad5389] underline-offset-4 hover:underline"
									>
										{expandedStates[i] ? 'Show Less' : 'Read Full Story'}
									</button>
								{/if}
							</div>
						</div>

						<div class="flex items-center gap-4 border-t border-slate-100 pt-6">
							<div
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#390265] text-sm font-bold text-white uppercase"
							>
								{t.name?.substring(0, 1)}
							</div>
							<div class="overflow-hidden">
								<h4 class="truncate text-base font-bold text-[#390265]">
									{t.name}
								</h4>
								<p class="truncate text-xs font-semibold tracking-wider text-slate-400 uppercase">
									Finnova Patient
								</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
