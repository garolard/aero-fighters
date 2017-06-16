import { TextActor, Scope } from '../core/game.interfaces';
import { Point } from '../core/game.interfaces.foundation';

export default class FpsCounter extends TextActor {

	constructor(position: Point, text: string, private textSize: number) {
		super(position, text);
	}

	getText(): string {
		return this.text;
	}
	getPosition(): Point {
		return this.position;
	}
	getTextStyle() {
		return {
			textSize: this.textSize,
			color: '#000'
		};
	}
	update(scope: Scope): void {
		throw new Error('Method not implemented.');
	}

}