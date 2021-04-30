import {attack, firstAttack} from "./attack";
import {Pokemon} from "./pokemon";

const poke1 = new Pokemon("Salamèche",42,50,7);
const poke2 = new Pokemon("Pikachu",42,69,5);
describe('test qui attaque',()=>{
   it('return poke2',()=>{
       expect(firstAttack(poke1,poke2)).resolves.toBe(poke2);
   });

   it('poke1 attack poke2',()=> {
       expect(attack(poke1, poke2)).resolves.toBe(poke1.hp);
   });

});
/*

test('return poke1 attaque',()=>{

    expect(firstAttack(poke1,poke2)).toBe(poke1);
});
/*it('should created', function () {
    expect(poke1).toBe(true);
});*/