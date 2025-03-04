export interface IPoint {
    x: number;
    y: number;
}
export declare enum PLAYER {
    X = "X",
    O = "O"
}
export interface IWinState {
    isTie: boolean;
    winner: string;
}
export interface IGameState extends IWinState {
    room: string;
    turn: PLAYER;
    board: string[][];
    gameOver: boolean;
    winner: string;
}
export interface IMyGameState extends IGameState {
    myChar: PLAYER;
}
export interface ITileClickedEvent {
    point: IPoint;
    char: PLAYER;
}
export declare const EMPTY_TILE = "";
export declare const getOpponent: (char: PLAYER) => PLAYER;
export declare const newBoard: () => string[][];
