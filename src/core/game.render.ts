import { Scope } from './game.interfaces';
import { getActualFps  } from './game.loop';

export function gameRender(scope: Scope) {
	const width = scope.width;
	const height = scope.height;

	return function render() {
		// scope.context.clearRect(0, 0, width, height);
		scope.renderer.clear();


		// Como trabajo con varios renderers????

		// Podría agregarle un método configure() que acepte un objeto
		// con los valores que quiera setearle al renderer
		// if (scope.showFps) {
		// 	scope.context.font = '32px Arial';
		// 	scope.context.fillStyle = '#00f';
		// 	scope.context.fillText(getActualFps().toString(), width - 100, 50);
		// }
		// El marcador FPS debería ser un TextActor o algo asi

		const entities = scope.entities || [];
		for (const entity of entities) {
			scope.renderer.render(entity);
		}
	};
}