export class Pokemon
{
    name: string;
    hp:number;
    speed:number;
    strength:number;

    constructor(name: string, hp: number, speed: number, force: number) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.strength = force;
    }

}