import {Pokemon} from "./pokemon";

export async function firstAttack(poke1:Pokemon, poke2:Pokemon):Promise<Pokemon | null>{
    if(poke1.speed<poke2.speed) return poke2;
    if(poke1.speed>poke2.speed) return poke1;
    return poke1;
}

export async function attack(poke1:Pokemon, poke2:Pokemon):Promise<number | null>{
    return poke1.hp-=poke2.strength;
}

export async function battle(poke1:Pokemon,poke2:Pokemon):Promise<Pokemon | null>{
    let tour = 0;
    const inter = setInterval(async ()=>{
        if (tour===0){
            await attack(poke1,poke2);
            tour=1;
        }else if(tour===1){
            await attack(poke2,poke1);
            tour=0;
        }
        if (poke1.hp<0 || poke2.hp<0) clearInterval(inter);
    },1000);
    if (poke1.hp<0) return poke1;
    else return poke2;
    //return poke1.hp;
}
