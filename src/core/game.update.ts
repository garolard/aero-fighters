import { Scope } from './game.interfaces';

export function gameUpdate(scope: Scope) {
	return function update() {
		const entities = scope.entities || [];

		for (const entity of entities) {
			entity.update(scope);
		}
	};
}