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

export interface Size2D {
	width: number;
	height: number;
}

export interface Vector2D {
	x: number;
	y: number;
}

export interface Point {
	x: number;
	y: number;
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

export const addActorTo = (scope: GameScope, actor: GameActor): void => {
	actor.scope = scope;
	scope.entities.push(actor);
};