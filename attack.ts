import {Pokemon} from "./pokemon";

export function firstAttack(poke1:Pokemon, poke2:Pokemon):Pokemon{
    if(poke1.speed<poke2.speed) return poke2;
    if(poke1.speed>poke2.speed) return poke1;
    return poke1;
}

export function attack(poke1:Pokemon, poke2:Pokemon):number{
    return poke1.hp-=poke2.strength;
}