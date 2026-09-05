export function trackEvent(
	action: string,
	{
		category,
		label,
		value,
		...rest
	}: { category?: string; label?: string; value?: number; [key: string]: unknown } = {}
) {
	if (typeof window !== 'undefined' && (window as any).gtag) {
		(window as any).gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
			...rest
		});
	} else {
		// Only logs in development to avoid cluttering production
		if (import.meta.env.DEV) {
			console.warn(`[Analytics] gtag not found. Event "${action}" not sent.`);
		}
	}
}
