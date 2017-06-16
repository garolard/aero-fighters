import { Scope, Actor } from './game.interfaces';

export const addActorTo = (scope: Scope, actor: Actor): void => {
	scope.entities.push(actor);
};