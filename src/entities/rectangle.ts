import { GameScope, Point, Vector2D, Size2D, GameActor } from '../core/game.interfaces';

export default class Rectangle extends GameActor {

	private size: Size2D;
	private color: string;
	private velocity: Vector2D;

	constructor(position: Point, size: Size2D, color: string, velocity: Vector2D) {
		super(position);
		this.size = size;
		this.color = color;
		this.velocity = velocity;
	}

	update(scope: GameScope): void {
		if (this.position.x <= 0 || this.position.x + this.size.width >= scope.width)
			this.velocity.x *= -1;
		if (this.position.y <= 0 || this.position.y + this.size.height >= scope.height)
			this.velocity.y *= -1;

		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	render(scope: GameScope): void {
		scope.context.fillStyle = this.color;
		scope.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
	}

}