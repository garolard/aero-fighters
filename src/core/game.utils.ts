import { GameScope, GameActor } from './game.interfaces';

export const addActorTo = (scope: GameScope, actor: GameActor): void => {
	actor.scope = scope;
	scope.entities.push(actor);
};