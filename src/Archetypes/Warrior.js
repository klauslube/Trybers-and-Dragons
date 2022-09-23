"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        Warrior.instances += 1;
        this._energyType = 'stamina';
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return Warrior.instances;
    }
}
exports.default = Warrior;
Warrior.instances = 0;
