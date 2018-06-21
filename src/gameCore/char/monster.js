class Monster {
    data ={
    name:"",
    maxHp:0,
    currHp:0,
    attack:0,
    }
    constructor (name,hp,attack)
    {
        this.data.name=name;
        this.data.maxHp = hp;
        this.data.currHp = hp;
        this.data.attack=attack;
    }
    getData =()=>{
        return this.data;
    }
    doDamage(dmg)
    {
        this.data.currHp-=dmg;
       return  this.data.currHp;
    }
}

export default Monster;