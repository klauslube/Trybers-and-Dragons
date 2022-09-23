"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        Mage.instances += 1;
        this._energyType = 'mana';
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return Mage.instances;
    }
}
exports.default = Mage;
Mage.instances = 0;
