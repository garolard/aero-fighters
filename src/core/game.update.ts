import { GameScope } from './game.interfaces';

export function gameUpdate(scope: GameScope) {
	return function update() {
		const entities = scope.entities || [];

		for (const entity of entities) {
			entity.update(scope);
		}
	};
}