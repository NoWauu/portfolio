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
	/*
	 * Static texture. It used to animate, but a full-viewport fixed layer with
	 * mix-blend-mode on a 1.1s infinite loop forces a composited repaint of the
	 * whole page every frame, for the entire session. The scanlines are 1px
	 * apart; the movement was not visible enough to pay for that.
	 */
	.scan {
		z-index: 40;
		opacity: 0.5;
		mix-blend-mode: overlay;
		background: repeating-linear-gradient(
			0deg,
			transparent 0 2px,
			rgba(125, 125, 125, 0.05) 2px 3px
		);
	}
</style>
