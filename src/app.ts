import { GameScope } from './core/game.interfaces';
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
		targetFps: 30,
		showFps: true,
		entities: [],
		context: context,
		update: () => { },
		render: () => { }
	};

	scope.update = gameUpdate(scope);
	scope.render = gameRender(scope);

	scope.entities.push(new Rectangle(scope, scope.width / 2 - 25, scope.height / 2 - 25, 50, 50, '#0f0'));

	const mainLoop = gameLoop(scope);
	mainLoop(window.performance.now());
});