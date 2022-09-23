"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        Ranger.instances += 1;
        this._energyType = 'stamina';
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return Ranger.instances;
    }
}
exports.default = Ranger;
Ranger.instances = 0;
