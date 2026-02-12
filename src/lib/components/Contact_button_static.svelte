<script>
	import { trackEvent } from '$lib/utility/analytics';
</script>

<div
	onclick={() => {
		document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
		trackEvent('Contact us button non sticky');
	}}
	id="normal_button"
	class="flex w-full items-center justify-center gap-5 bg-[#ad5389] py-5 text-white"
>
	<p class="font-semibold text-white">Contact Us</p>
</div>
