<script lang="ts">
	import { User, Phone, Building2, MapPin, ArrowRight, Send } from '@lucide/svelte';
	import About from '$lib/components/About.svelte';
	import Benefits from '$lib/components/Benefits.svelte';
	import FaqHospitals from '$lib/components/Faq_hospitals.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import TestimonialHospital from '$lib/components/Testimonial_Hospital.svelte';
	import TestimonialsPatients from '$lib/components/Testimonials_patients.svelte';
	import { page_context } from '$lib/state/PageContex.svelte';
	import ContactCard from '$lib/components/Contact_card.svelte';
	import FaqPatients from '$lib/components/Faq_patients.svelte';
	import Hospital from '$lib/components/Hospital.svelte';
	import Steps from '$lib/components/Steps.svelte';
	import ContactButtonStatic from '$lib/components/Contact_button_static.svelte';
	import ContactButtonSticky from '$lib/components/Contact_button_sticky.svelte';
</script>

<main class="relative min-h-screen bg-white pt-5 lg:pt-4">
	<Hero />
	<ContactCard />
	<Benefits />
	<Steps />

	{#if page_context.current == 'patients'}
		<TestimonialsPatients />
	{:else}
		<TestimonialHospital />
	{/if}

	{#if page_context.current == 'patients'}
		<FaqPatients />
	{:else}
		<FaqHospitals />
	{/if}

	<About />
	<ContactButtonStatic />
	<ContactButtonSticky />
	<Footer />
</main>
