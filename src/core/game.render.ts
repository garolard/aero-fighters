import { GameScope } from './game.interfaces';
import { getActualFps  } from './game.loop';

export function gameRender(scope: GameScope) {
	const width = scope.width;
	const height = scope.height;

	return function render() {
		scope.context.clearRect(0, 0, width, height);


		if (scope.showFps) {
			scope.context.font = '32px Arial';
			scope.context.fillStyle = '#00f';
			scope.context.fillText(getActualFps().toString(), width - 100, 50);
		}

		const entities = scope.entities || [];
		for (const entity of entities) {
			entity.render(scope);
		}
	};
}