"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attack = exports.firstAttack = void 0;
function firstAttack(poke1, poke2) {
    if (poke1.speed < poke2.speed)
        return poke2;
    if (poke1.speed > poke2.speed)
        return poke1;
    return poke1;
}
exports.firstAttack = firstAttack;
function attack(poke1, poke2) {
    return poke1.hp -= poke2.strength;
}
exports.attack = attack;
