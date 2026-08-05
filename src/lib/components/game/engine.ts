import type { SectionId } from '$lib/types';

/** Logical canvas size — the element is scaled with CSS, coordinates stay fixed. */
export const MAP = { width: 640, height: 440 } as const;

export interface RoomNode {
	key: SectionId;
	x: number;
	y: number;
}

/** Room positions on the map. Keys must exist in `sectionIds`. */
export const ROOMS: RoomNode[] = [
	{ key: 'about', x: 95, y: 340 },
	{ key: 'skills', x: 215, y: 115 },
	{ key: 'projects', x: 420, y: 75 },
	{ key: 'experience', x: 565, y: 195 },
	{ key: 'education', x: 395, y: 350 },
	{ key: 'awards', x: 140, y: 80 },
	// Kept clear of the on-screen d-pad in the bottom-right corner.
	{ key: 'contact', x: 555, y: 315 }
];

export type Direction = 'up' | 'down' | 'left' | 'right';

export interface Palette {
	accent: string;
	accentInk: string;
	border: string;
	text: string;
	muted: string;
	panel: string;
}

const ACCEL = 0.9;
const FRICTION = 0.86;
const MAX_SPEED = 4.2;
const ENTER_RADIUS = 40;
const LEAVE_RADIUS = 60;
const PLAYER_R = 6;

/**
 * Headless movement + rendering for the explore mini-map.
 * No Svelte, no DOM lookups — the component owns input and state.
 */
export class Explorer {
	player = { x: MAP.width / 2, y: MAP.height / 2, vx: 0, vy: 0 };
	keys: Record<Direction, boolean> = { up: false, down: false, left: false, right: false };

	reset() {
		this.player = { x: MAP.width / 2, y: MAP.height / 2, vx: 0, vy: 0 };
		this.keys = { up: false, down: false, left: false, right: false };
	}

	press(dir: Direction, down: boolean) {
		this.keys[dir] = down;
	}

	/**
	 * Advances one frame.
	 * @returns the room the player is standing in, `null` when clearly away from
	 *          any room, or `undefined` to keep whatever room was active.
	 */
	step(): SectionId | null | undefined {
		const p = this.player;
		const ax = (this.keys.right ? 1 : 0) - (this.keys.left ? 1 : 0);
		const ay = (this.keys.down ? 1 : 0) - (this.keys.up ? 1 : 0);

		p.vx = clamp((p.vx + ax * ACCEL) * FRICTION, MAX_SPEED);
		p.vy = clamp((p.vy + ay * ACCEL) * FRICTION, MAX_SPEED);
		p.x = Math.min(MAP.width - 18, Math.max(18, p.x + p.vx));
		p.y = Math.min(MAP.height - 18, Math.max(18, p.y + p.vy));

		let nearest: RoomNode | null = null;
		let best = Infinity;
		for (const room of ROOMS) {
			const d = Math.hypot(p.x - room.x, p.y - room.y);
			if (d < best) {
				best = d;
				nearest = room;
			}
		}

		if (nearest && best < ENTER_RADIUS) return nearest.key;
		if (best > LEAVE_RADIUS) return null;
		return undefined;
	}

	draw(
		ctx: CanvasRenderingContext2D,
		palette: Palette,
		state: { visited: Set<SectionId>; active: SectionId | null; label: (key: SectionId) => string }
	) {
		const { width: W, height: H } = MAP;
		ctx.clearRect(0, 0, W, H);

		// grid
		ctx.strokeStyle = palette.border;
		ctx.globalAlpha = 0.35;
		ctx.lineWidth = 1;
		for (let x = 0; x <= W; x += 32) line(ctx, x, 0, x, H);
		for (let y = 0; y <= H; y += 32) line(ctx, 0, y, W, y);
		ctx.globalAlpha = 1;

		// paths
		ctx.strokeStyle = palette.border;
		ctx.lineWidth = 1.5;
		ctx.setLineDash([4, 5]);
		for (let i = 0; i < ROOMS.length; i++) {
			const a = ROOMS[i];
			const b = ROOMS[(i + 1) % ROOMS.length];
			line(ctx, a.x, a.y, b.x, b.y);
		}
		ctx.setLineDash([]);

		// rooms
		for (const room of ROOMS) {
			const visited = state.visited.has(room.key);
			const isActive = state.active === room.key;

			if (visited) {
				ctx.globalAlpha = isActive ? 0.18 : 0.1;
				ctx.fillStyle = palette.accent;
				disc(ctx, room.x, room.y, 26);
				ctx.globalAlpha = 1;
			}

			ctx.beginPath();
			ctx.arc(room.x, room.y, 16, 0, Math.PI * 2);
			ctx.fillStyle = visited ? palette.accent : palette.panel;
			ctx.fill();
			ctx.lineWidth = isActive ? 2.5 : 1.5;
			ctx.strokeStyle = visited ? palette.accent : palette.border;
			ctx.stroke();

			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.font = '600 10.5px JetBrains Mono, monospace';
			ctx.fillStyle = visited ? palette.accentInk : palette.muted;
			ctx.fillText(room.key.slice(0, 3).toUpperCase(), room.x, room.y + 1);

			ctx.font = '500 11px JetBrains Mono, monospace';
			ctx.fillStyle = palette.text;
			ctx.fillText(state.label(room.key), room.x, room.y + 34);
		}

		// player
		ctx.beginPath();
		ctx.arc(this.player.x, this.player.y, PLAYER_R, 0, Math.PI * 2);
		ctx.fillStyle = palette.text;
		ctx.fill();
		ctx.lineWidth = 2;
		ctx.strokeStyle = palette.accent;
		ctx.stroke();
	}
}

function clamp(v: number, max: number) {
	return Math.max(-max, Math.min(max, v));
}

function line(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

function disc(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.fill();
}

/** Maps arrow / WASD / ZQSD keys to a direction. */
export function directionFromKey(key: string): Direction | null {
	switch (key.toLowerCase()) {
		case 'arrowup':
		case 'w':
		case 'z':
			return 'up';
		case 'arrowdown':
		case 's':
			return 'down';
		case 'arrowleft':
		case 'a':
		case 'q':
			return 'left';
		case 'arrowright':
		case 'd':
			return 'right';
		default:
			return null;
	}
}
