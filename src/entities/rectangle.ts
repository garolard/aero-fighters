import { GameScope, GameEntity } from '../core/game.interfaces';

export default class Rectangle implements GameEntity {

	private scope: GameScope;
	private velX: number;
	private velY: number;

	// Demasiados parámetros!!!
	constructor(scope: GameScope, posX: number, posY: number, width: number, height: number, color: string) {
		this.scope = scope;
		this.posX = posX;
		this.posY = posY;
		this.width = width;
		this.height = height;
		this.color = color;
		this.velX = Math.random() * 10;
		this.velY = Math.random() * 10;
	}

	posX: number;
	posY: number;
	width: number;
	height: number;
	color: string;

	update(scope: GameScope): void {
		if (this.posX <= 0 || this.posX + this.width >= scope.width)
			this.velX = this.velX * -1;
		if (this.posY <= 0 || this.posY + this.height >= scope.height)
			this.velY = this.velY * -1;
		this.posX = this.posX + this.velX;
		this.posY = this.posY + this.velY;
	}

	render(scope: GameScope): void {
		scope.context.fillStyle = this.color;
		scope.context.fillRect(this.posX, this.posY, this.width, this.height);
	}
}