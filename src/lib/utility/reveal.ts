// Lightweight scroll-reveal action (IntersectionObserver based).
// Replaces the old, non-functional AOS scaffolding with a real,
// dependency-free implementation that respects prefers-reduced-motion.
export function reveal(node: HTMLElement, params: { delay?: number } = {}) {
	const { delay = 0 } = params;

	const prefersReduced =
		typeof window !== 'undefined' &&
		window.matchMedia &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (typeof window === 'undefined' || prefersReduced) {
		node.classList.add('reveal-visible');
		return {};
	}

	node.classList.add('reveal-init');
	if (delay) node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('reveal-visible');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
