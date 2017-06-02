import { GameScope, GameActor, Point, Vector2D, addActorTo, Size2D } from './core/game.interfaces';
import { gameLoop } from './core/game.loop';
import { gameUpdate } from './core/game.update';
import { gameRender } from './core/game.render';
import Rectangle from './entities/rectangle';

document.addEventListener('DOMContentLoaded', () => {
	const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;
	const context = canvas.getContext('2d');

	if (!context) {
		throw new Error('El canvas no tiene un contexto de dibujo');
	}


	const scope: GameScope = {
		width: canvas.width,
		height: canvas.height,
		targetFps: 60,
		showFps: true,
		entities: [],
		context: context,
		update: () => { },
		render: () => { }
	};

	scope.update = gameUpdate(scope);
	scope.render = gameRender(scope);

	const position: Point = {
		x: scope.width / 2 - 25,
		y: scope.height / 2 - 25
	};

	addActorTo(scope, new Rectangle({...position}, createRandomSize(), '#0f0', createRandomVelocity()));

	const mainLoop = gameLoop(scope);
	mainLoop(window.performance.now());
});

const createRandomVelocity = (): Vector2D => ({
	x: Math.random() * 10,
	y: Math.random() * 10
});

const createRandomSize = (): Size2D => {
	const measure = Math.random() * 100;
	return {
		width: measure,
		height: measure
	};
};