"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBattles = exports.pve = exports.pvp = exports.monster2 = exports.monster1 = exports.player3 = exports.player2 = exports.player1 = void 0;
const Battle_1 = require("./Battle");
const Character_1 = require("./Character");
const Dragon_1 = require("./Dragon");
const Monster_1 = require("./Monster");
const player1 = new Character_1.default('David');
exports.player1 = player1;
player1.levelUp();
player1.levelUp();
const player2 = new Character_1.default('Lucy');
exports.player2 = player2;
const player3 = new Character_1.default('Adam');
exports.player3 = player3;
const monster1 = new Monster_1.default();
exports.monster1 = monster1;
const monster2 = new Dragon_1.default();
exports.monster2 = monster2;
const pvp = new Battle_1.PVP(player2, player3);
exports.pvp = pvp;
const pve = new Battle_1.PVE(player1, [monster1, monster2]);
exports.pve = pve;
const runBattles = (battles) => {
    battles.forEach((battle) => {
        battle.fight();
    });
};
exports.runBattles = runBattles;
