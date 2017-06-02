import { Point } from './game.interfaces.foundation';

export interface GameScope {
	entities: GameActor[];
	width: number;
	height: number;
	targetFps: number;
	showFps: boolean;
	context: CanvasRenderingContext2D;
	update: () => void;
	render: () => void;
}

export abstract class GameActor {
	scope: GameScope;
	protected position: Point; // Si siempre tiene una posición, ¿Debería tener siempre un tamaño?

	constructor(position: Point) {
		this.position = position;
	}

	abstract update(scope: GameScope): void;
	abstract render(scope: GameScope): void;
}

export interface Game {
	// Ya veré...
}