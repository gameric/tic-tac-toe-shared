export interface IPoint {
  x: number;
  y: number;
}

export enum PLAYER {
  X = "X",
  O = "O",
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

export const EMPTY_TILE = "";

export const getOpponent = (char: PLAYER): PLAYER =>
  char === PLAYER.X ? PLAYER.O : PLAYER.X;

export const newBoard = () =>
  Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => EMPTY_TILE));
