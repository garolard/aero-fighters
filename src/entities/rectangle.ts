import { Point, Vector2D, Dimension } from '../core/game.interfaces.foundation';
import { Scope, Actor, Shape } from '../core/game.interfaces';

export default class Rectangle extends Shape {

	private velocity: Vector2D;

	constructor(position: Point, size: Dimension, color: string, velocity: Vector2D) {
		super(position, size, color);
		this.velocity = velocity;
	}

	update(scope: Scope): void {
		if (this.position.x <= 0 || this.position.x + this.size.width >= scope.width)
			this.velocity.x *= -1;
		if (this.position.y <= 0 || this.position.y + this.size.height >= scope.height)
			this.velocity.y *= -1;

		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	// Esto debería estar definido en una subclase de Actor llamada Shape o algo así.....
	getPosition(): Point {
		return this.position;
	}

	getSize(): Dimension {
		return this.size;
	}

	getColor(): string {
		return this.color;
	}
}