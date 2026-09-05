<script>
	import { trackEvent } from '$lib/utility/analytics';
</script>

<div
	onclick={() => {
		document
			.getElementById('contact-form')
			?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		trackEvent('Contact us button non sticky');
	}}
	id="normal_button"
	class="flex w-full items-center justify-center gap-5 bg-brand py-5 text-white"
>
	<p class="font-semibold text-white">Contact Us</p>
</div>
