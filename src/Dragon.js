"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Monster_1 = require("./Monster");
class Dragon extends Monster_1.default {
    constructor() {
        super();
        this._lifePoints = 999;
    }
}
exports.default = Dragon;
