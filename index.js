"use strict";
exports.__esModule = true;
exports.getOpponent = exports.PLAYER = void 0;
var PLAYER;
(function (PLAYER) {
    PLAYER["X"] = "X";
    PLAYER["O"] = "O";
})(PLAYER = exports.PLAYER || (exports.PLAYER = {}));
exports.getOpponent = function (char) {
    return char === PLAYER.X ? PLAYER.O : PLAYER.X;
};
