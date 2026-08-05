import type { Action } from 'svelte/action';

export const prefersReducedMotion = () =>
	typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------------ reveal */

export interface RevealOptions {
	/** Extra delay before the element fades in, in ms. */
	delay?: number;
	/** Distance travelled on the way in, in px. */
	y?: number;
}

/**
 * Fades an element in the first time it enters the viewport.
 *
 * The hidden state is applied from JS only, so the content stays visible
 * without JS and for users who asked for reduced motion.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

	const { delay = 0, y = 20 } = options ?? {};
	node.dataset.reveal = '';
	node.style.opacity = '0';
	node.style.transform = `translateY(${y}px)`;
	if (delay) node.style.transitionDelay = `${delay}ms`;

	const io = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			node.style.opacity = '1';
			node.style.transform = 'none';
			node.dispatchEvent(new CustomEvent('revealed'));
			io.disconnect();
		},
		{ threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
	);
	io.observe(node);

	return { destroy: () => io.disconnect() };
};

/* ---------------------------------------------------------------- scramble */

const SCRAMBLE_CHARS = '!<>-_\\/[]{}=+*^?#01abcdef';
const KEEP = new Set([' ', '/', '.', '~', '-']);

/** Decodes the element's own text with a glitchy scramble when it scrolls in. */
export const scramble: Action<HTMLElement> = (node) => {
	const final = node.textContent ?? '';
	if (!final || prefersReducedMotion() || !('IntersectionObserver' in window)) return;

	let timer: ReturnType<typeof setTimeout>;
	const total = 16;

	const run = () => {
		let frame = 0;
		const tick = () => {
			let out = '';
			const revealed = (frame / total) * final.length;
			for (let i = 0; i < final.length; i++) {
				out +=
					KEEP.has(final[i]) || i < revealed
						? final[i]
						: SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
			}
			node.textContent = out;
			if (frame++ < total) timer = setTimeout(tick, 32);
			else node.textContent = final;
		};
		tick();
	};

	const io = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			io.disconnect();
			run();
		},
		{ threshold: 0.6 }
	);
	io.observe(node);

	return {
		destroy() {
			clearTimeout(timer);
			io.disconnect();
		}
	};
};

/* -------------------------------------------------------------- typewriter */

export interface TypeOptions {
	text: string;
	/** ms per character. */
	speed?: number;
	/** ms to wait before the first character. */
	start?: number;
	oncomplete?: () => void;
}

/** Types `text` into the element one character at a time. */
export const typewriter: Action<HTMLElement, TypeOptions> = (node, options) => {
	let timer: ReturnType<typeof setTimeout>;

	const play = ({ text, speed = 60, start = 0, oncomplete }: TypeOptions) => {
		clearTimeout(timer);
		if (prefersReducedMotion()) {
			node.textContent = text;
			oncomplete?.();
			return;
		}
		node.textContent = '';
		let i = 0;
		const tick = () => {
			node.textContent = text.slice(0, ++i);
			if (i < text.length) timer = setTimeout(tick, speed);
			else oncomplete?.();
		};
		timer = setTimeout(tick, start + speed);
	};

	play(options);

	return {
		update: play,
		destroy: () => clearTimeout(timer)
	};
};

/* ---------------------------------------------------------------- scrollspy */

/**
 * Reports which `section[id]` inside the node currently owns the viewport.
 * Applied to <main>; the nav uses the value to highlight a link.
 */
export const scrollspy: Action<HTMLElement, (id: string | null) => void> = (node, onchange) => {
	let notify = onchange;
	if (!('IntersectionObserver' in window)) return;

	const visible = new Set<string>();
	const order = () => Array.from(node.querySelectorAll<HTMLElement>('section[id]'), (s) => s.id);

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const id = (entry.target as HTMLElement).id;
				if (entry.isIntersecting) visible.add(id);
				else visible.delete(id);
			}
			const current = order().find((id) => visible.has(id)) ?? null;
			notify(current);
		},
		{ rootMargin: '-20% 0px -40% 0px', threshold: 0 }
	);

	node.querySelectorAll('section[id]').forEach((s) => io.observe(s));

	return {
		update: (next) => {
			notify = next;
		},
		destroy: () => io.disconnect()
	};
};
