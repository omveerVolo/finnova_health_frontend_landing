<script lang="ts">
	import { page } from '$app/state';
	import { Phone, Menu, X } from '@lucide/svelte';
	import { fly, fade } from 'svelte/transition';
	import { page_context } from '../state/PageContex.svelte';
	import { trackEvent } from '$lib/utility/analytics';

	let isMenuOpen = $state(false);
	let currentPath = $derived(page.url.hash.replace('#', '') || 'top');
	let isPatientMode = $derived(page_context.current === 'patients');

	const scrollToId = (id: string): void => {
		if (id === 'top') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			const element = document.getElementById(id);
			if (element) {
				// "center" ensures the form is vertically centered in the screen
				element.scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				});
			}
		}
	};
	const handleModeToggle = (isMobile = false) => {
		const label = isPatientMode ? 'For Hospitals' : 'For Patients';
		trackEvent(`${isMobile ? 'Nav' : 'Header'}: ${label} Toggle`, { category: 'navigation' });

		// 1. Change the global context
		page_context.change();

		if (isMobile) isMenuOpen = false;

		// 2. Always scroll to the benefits section when switching modes
		// Timeout ensures Svelte updates the DOM before we measure the scroll position
		setTimeout(() => {
			scrollToId('our-benefits');
			history.pushState(null, '', '#our-benefits');
		}, 150);
	};

	const handleNavClick = (id: string, label: string) => {
		trackEvent(`Header ${label} Link`, { category: 'navigation' });
		isMenuOpen = false;
		scrollToId(id);
		history.pushState(null, '', `#${id}`);
	};

	const staticNav = [
		{ label: 'Home', key: 'home', id: 'top' },
		{ label: 'Benefits', key: 'benefits', id: 'our-benefits' },
		{ label: 'FAQs', key: 'faqs', id: 'faq-hospitals' },
		{ label: 'About', key: 'about', id: 'about-us' }
	];
</script>

<div
	id="top"
	class="w-full overflow-hidden border-b border-b-slate-100 bg-white px-6 py-4 font-medium shadow-md md:px-16 md:py-5"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<img class="w-40" src="/finnova_logo.png" alt="logo" />

		<div class="hidden items-center gap-8 lg:flex">
			{#each staticNav as item (item.key)}
				<a
					href="#{item.id}"
					onclick={(e) => {
						e.preventDefault();
						handleNavClick(item.id, item.label);
					}}
					class="cursor-pointer text-sm transition-all hover:text-[#ad5389] {currentPath === item.id
						? 'font-bold text-[#ad5389]'
						: 'text-slate-600'}"
				>
					{item.label}
				</a>
			{/each}

			<button
				onclick={() => handleModeToggle(false)}
				class="min-w-[110px] cursor-pointer text-left text-sm text-slate-600 transition-all hover:text-[#ad5389]"
			>
				{isPatientMode ? 'For Hospitals' : 'For Patients'}
			</button>

			<button
				onclick={() => {
					trackEvent('Header Contact Us Button', { category: 'conversion' });
					// scrollToId('contact-form');
				}}
				class="group flex cursor-pointer items-center gap-2 rounded-xl bg-[#ad5389] px-6 py-2.5 text-sm text-white transition-all hover:shadow-lg active:scale-95"
			>
				<Phone size={14} fill="currentColor" />
				<span>Contact Us</span>
			</button>
		</div>

		<button
			class="cursor-pointer p-1 lg:hidden"
			onclick={() => {
				isMenuOpen = !isMenuOpen;
				if (isMenuOpen) trackEvent('Mobile Menu Open');
			}}
		>
			{#if isMenuOpen}
				<X size={28} />
			{:else}
				<Menu size={28} />
			{/if}
		</button>
	</div>
</div>

{#if isMenuOpen}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm lg:hidden"
		onclick={() => (isMenuOpen = false)}
	></div>

	<div
		transition:fly={{ x: 300, duration: 300 }}
		class="fixed top-0 right-0 z-[70] h-full w-[300px] bg-white p-8 shadow-2xl lg:hidden"
	>
		<button
			class="absolute top-6 right-6 cursor-pointer p-1 text-slate-800"
			onclick={() => (isMenuOpen = false)}
		>
			<X size={32} />
		</button>

		<div class="flex h-full flex-col gap-8 pt-16">
			{#each staticNav as item (item.key)}
				<a
					href="#{item.id}"
					onclick={(e) => {
						e.preventDefault();
						handleNavClick(item.id, item.label);
					}}
					class="text-2xl font-semibold {currentPath === item.id
						? 'text-[#ad5389]'
						: 'text-slate-800'}"
				>
					{item.label}
				</a>
			{/each}

			<button
				onclick={() => handleModeToggle(true)}
				class="text-left text-2xl font-semibold text-slate-800"
			>
				{isPatientMode ? 'For Hospitals' : 'For Patients'}
			</button>

			<button
				onclick={() => {
					trackEvent('Nav: Contact Us');
					isMenuOpen = false;
					scrollToId('contact-form');
				}}
				class="mt-auto flex w-full items-center justify-center gap-3 rounded-2xl bg-[#ad5389] py-5 text-lg font-semibold text-white shadow-lg active:scale-95"
			>
				<Phone size={20} fill="currentColor" />
				<span>Contact Us</span>
			</button>
		</div>
	</div>
{/if}

<style>
	:global(html) {
		scroll-behavior: smooth;
		overflow-x: hidden;
	}
	button,
	a {
		cursor: pointer !important;
	}
	nav button {
		user-select: none;
	}
</style>
