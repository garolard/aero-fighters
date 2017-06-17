import { Scope, Renderer } from './game.interfaces';
import { getActualFps  } from './game.loop';
import FpsCounter from '../entities/fpscounter';

export function gameRender(scope: Scope) {
	const width = scope.width;
	const height = scope.height;

	const fpsCounter = new FpsCounter({ x: width - 100, y: 50 }, getActualFps().toString(), 32);

	return function render() {
		// scope.context.clearRect(0, 0, width, height);
		scope.renderers[0].clear();


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
			// scope.renderer.render(entity);
			const renderer = getEntityRenderer(scope.renderers, entity);
			renderer.render(entity);
		}
	};
}

// Esto es horrible y ni siquiera se si funciona
// y aunque funcionase no me permitiría hacer
// Renderers capaces de pintar varios tipos de actores.
// Quedaría obligado a que cada actor tuviese un renderer asociado
// por el nombre, es decir, el actor Rectangle
// necesitaría un RectangleRenderer.
const getEntityRenderer = (renderers: Renderer<any>[], entity: any) => {
	return renderers.filter(r => (<any>r).constructor.name.indexOf(entity.constructor.name) !== -1)[0];
};