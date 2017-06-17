import { Shape, Scope } from '../core/game.interfaces';
import { Vector2D, Point, Dimension } from '../core/game.interfaces.foundation';

export default class Circle extends Shape {

	private velocity: Vector2D;

	constructor(position: Point, private radius: number, color: string, velocity: Vector2D) {
		super(position, color);
		this.velocity = velocity;
	}

	update(scope: Scope): void {
		if (this.position.x - this.radius <= 0 || this.position.x + this.radius >= scope.width)
			this.velocity.x *= -1;
		if (this.position.y - this.radius <= 0 || this.position.y + this.radius >= scope.height)
			this.velocity.y *= -1;

		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	// Esto debería estar definido en una subclase de Actor llamada Shape o algo así.....
	getPosition(): Point {
		return this.position;
	}

	getRadius(): number {
		return this.radius;
	};

	getColor(): string {
		return this.color;
	}
}