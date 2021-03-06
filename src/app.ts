import { Point, Vector2D, Dimension } from './core/game.interfaces.foundation';
import { Scope, Actor, Renderer, Shape } from './core/game.interfaces';
import { addActorTo } from './core/game.utils';
import { gameLoop } from './core/game.loop';
import { gameUpdate } from './core/game.update';
import { gameRender } from './core/game.render';
import Rectangle from './entities/rectangle';
import Circle from "./entities/circle";

document.addEventListener('DOMContentLoaded', () => {
	const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;
	const context = canvas.getContext('2d');

	if (!context) {
		throw new Error('El canvas no tiene un contexto de dibujo');
	}


	const scope: Scope = {
		width: canvas.width,
		height: canvas.height,
		targetFps: 60,
		showFps: true,
		entities: [],
		renderers: [new DefaultRenderer(context), new RectangleRenderer(context), new CircleRenderer(context)],
		update: () => { },
		render: () => { }
	};

	scope.update = gameUpdate(scope);
	scope.render = gameRender(scope);

	const position: Point = {
		x: scope.width / 2 - 25,
		y: scope.height / 2 - 25
	};

	// Hay que hacer una copia de la posición por si quiero reutilizar el objeto
	// en varios Rectangle distintos y que cada uno modifique su propia posición
	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#f00', createRandomVelocity()));
	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#f00', createRandomVelocity()));
	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#f00', createRandomVelocity()));
	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#f00', createRandomVelocity()));
	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#f00', createRandomVelocity()));
	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#f00', createRandomVelocity()));
	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#f00', createRandomVelocity()));
	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#f00', createRandomVelocity()));
	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#f00', createRandomVelocity()));
	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#f00', createRandomVelocity()));
	addActorTo(scope, new Rectangle({ ...position }, createRandomSize(), '#f00', createRandomVelocity()));

	addActorTo(scope, new Circle({ ...position }, Math.random() * 100, '#00f', createRandomVelocity()));
	addActorTo(scope, new Circle({ ...position }, Math.random() * 100, '#00f', createRandomVelocity()));
	addActorTo(scope, new Circle({ ...position }, Math.random() * 100, '#00f', createRandomVelocity()));
	addActorTo(scope, new Circle({ ...position }, Math.random() * 100, '#00f', createRandomVelocity()));
	addActorTo(scope, new Circle({ ...position }, Math.random() * 100, '#00f', createRandomVelocity()));
	addActorTo(scope, new Circle({ ...position }, Math.random() * 100, '#00f', createRandomVelocity()));

	const mainLoop = gameLoop(scope);
	mainLoop(window.performance.now());
});

const createRandomVelocity = (): Vector2D => ({
	x: Math.random() * 10,
	y: Math.random() * 10
});

const createRandomSize = (): Dimension => {
	const measure = Math.random() * 100;
	return {
		width: measure,
		height: measure
	};
};

class DefaultRenderer implements Renderer<Actor> {

	constructor(private context: CanvasRenderingContext2D) {}

	render: (actor: Actor) => void;
	clear() {
		this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
	};
}

class RectangleRenderer implements Renderer<Rectangle> {

	private context: CanvasRenderingContext2D;

	constructor(context: CanvasRenderingContext2D) {
		this.context = context;
	}

	render(actor: Rectangle) {
		const pos = actor.getPosition();
		const size = actor.getSize();

		this.context.fillStyle = actor.getColor();
		this.context.fillRect(pos.x, pos.y, size.width, size.height);
	};

	clear() { };
}

class CircleRenderer implements Renderer<Circle> {

	constructor(private context: CanvasRenderingContext2D) { }

	render(actor: Circle) {
		this.context.fillStyle = actor.getColor();
		this.context.beginPath();
		this.context.ellipse(actor.getPosition().x, actor.getPosition().y, actor.getRadius(), actor.getRadius(), 0, 0, 2 * Math.PI);
		this.context.fill();
	};

	clear() { };
}