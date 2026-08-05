<!-- Fixed CRT-ish backdrop: faint grid + scanline overlay. Purely decorative. -->
<div class="grid" aria-hidden="true"></div>
<div class="scan" aria-hidden="true"></div>

<style>
	.grid,
	.scan {
		position: fixed;
		inset: 0;
		pointer-events: none;
	}
	.grid {
		z-index: 0;
		background:
			linear-gradient(var(--grid) 1px, transparent 1px) 0 0 / 46px 46px,
			linear-gradient(90deg, var(--grid) 1px, transparent 1px) 0 0 / 46px 46px;
	}
	.scan {
		z-index: 40;
		opacity: 0.5;
		mix-blend-mode: overlay;
		background: repeating-linear-gradient(
			0deg,
			transparent 0 2px,
			rgba(125, 125, 125, 0.05) 2px 3px
		);
		animation: scan 1.1s steps(4, end) infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.scan {
			display: none;
		}
	}
</style>
