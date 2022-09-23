"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player1, monster) {
        super(player1);
        this._player1 = player1;
        this._monster = monster;
    }
    fight() {
        this._monster.forEach((monster) => {
            while (this._player1.lifePoints !== -1 && monster.lifePoints !== -1) {
                this._player1.attack(monster);
                monster.attack(this._player1);
            }
        });
        return super.fight();
    }
}
exports.default = PVE;
