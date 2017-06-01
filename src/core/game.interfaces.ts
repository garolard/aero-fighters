export interface GameScope {
	entities: GameEntity[];
	width: number;
	height: number;
	targetFps: number;
	showFps: boolean;
	context: CanvasRenderingContext2D;
	update: () => void;
	render: () => void;
}

// Aqui podría sacar las medidas a otra interfaz para reutilizarlas
export interface GameEntity {
	width: number;
	height: number;
	color: string; // Por simplificar, ya se irá avanzando
	update: (scope: GameScope) => void;
	render: (scope: GameScope) => void;
}

export interface Game {
	// Ya veré...
}