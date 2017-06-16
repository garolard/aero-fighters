import { Point, Dimension } from './game.interfaces.foundation';

export interface Scope {
	entities: Actor[];
	width: number;
	height: number;
	targetFps: number;
	showFps: boolean;
	renderer: Renderer<Actor>;
	update: () => void;
	render: () => void;
}

export interface Renderer<T> {
	render: (actor: T) => void;
	clear: () => void;
}

export abstract class Actor {
	protected position: Point; // Si siempre tiene una posición, ¿Debería tener siempre un tamaño?

	constructor(position: Point) {
		this.position = position;
	}

	abstract getPosition(): Point;
	abstract update(scope: Scope): void;
}

export abstract class Shape extends Actor {
	constructor(position: Point, protected size: Dimension, protected color: string) {
		super(position);
	}

	abstract getSize(): Dimension;
	abstract getColor(): string;
}

export abstract class TextActor extends Actor {
	constructor(position: Point, protected text: string) {
		super(position);
	}

	abstract getText(): string;
	abstract getTextStyle(): any; // Tipar luego...
}

export interface Game {
	// Ya veré...
}