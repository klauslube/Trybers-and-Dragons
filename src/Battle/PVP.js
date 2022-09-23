"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player1, player2) {
        super(player1);
        this._player1 = player1;
        this._player2 = player2;
    }
    fight() {
        while (this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1) {
            this._player1.attack(this._player2);
            this._player2.attack(this._player1);
        }
        return super.fight();
    }
}
exports.default = PVP;
