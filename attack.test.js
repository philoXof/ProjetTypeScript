"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./attack");
var pokemon_1 = require("./pokemon");
var poke1 = new pokemon_1.Pokemon("Salamèche", 42, 50, 7);
var poke2 = new pokemon_1.Pokemon("Pikachu", 42, 69, 5);
describe('test qui attaque', function () {
    it('return poke2', function () {
        expect(attack_1.firstAttack(poke1, poke2)).resolves.toBe(poke2);
    });
    it('poke1 attack poke2', function () {
        expect(attack_1.attack(poke1, poke2)).resolves.toBe(poke1.hp);
    });
});
/*

test('return poke1 attaque',()=>{

    expect(firstAttack(poke1,poke2)).toBe(poke1);
});
/*it('should created', function () {
    expect(poke1).toBe(true);
});*/ 
