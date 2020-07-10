"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newBoard = exports.getOpponent = exports.EMPTY_TILE = exports.PLAYER = void 0;
var PLAYER;
(function (PLAYER) {
    PLAYER["X"] = "X";
    PLAYER["O"] = "O";
})(PLAYER = exports.PLAYER || (exports.PLAYER = {}));
exports.EMPTY_TILE = "";
exports.getOpponent = (char) => char === PLAYER.X ? PLAYER.O : PLAYER.X;
exports.newBoard = () => Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => exports.EMPTY_TILE));
