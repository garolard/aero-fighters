import { GameScope } from './game.interfaces';

let actualFps = 0;
let stopLoop = 0;
let frameCount = 0;
let renderStartTime = 0;

export function gameLoop(scope: GameScope) {
	const targetFps = scope.targetFps;
	const fpsInterval = 1000 / targetFps;
	let lastFrameTime = window.performance.now();
	actualFps = 0;
	frameCount = 0;
	renderStartTime = window.performance.now();

	return function mainLoop(now: number) {
		stopLoop = window.requestAnimationFrame(mainLoop);

		const timeBetweenFrames = now - lastFrameTime;
		if (timeBetweenFrames > fpsInterval) {
			// Renderizo
			++frameCount;
			lastFrameTime = now - (timeBetweenFrames % fpsInterval);
			actualFps = Math.round((1000 * frameCount) / (now - renderStartTime));

			scope.update();
			scope.render();
		}
	};
}

export const getActualFps = (): number => actualFps;

export const getStopLoop = (): number => stopLoop;