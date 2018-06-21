import Random from '../../utility/random';
class PJ{
    name = "";
    stats={
        lifeLimit:100,
        life:100,
        attack:25,
        magicAttack:10,
        attackSpeed:5,
        castSpeed: 5,
        defense: 20,
         magicDefense: 20,
         critical:5,
         criticalDmg:125,
         magicCritical:3,
         magicCriticalDmg: 250,

    };
    isActive=true;
    Monsters=[];
    targetId=0;
    healGil = [];
    assistGil = null;
    buffGil = [];

    mainTask="";
    constructor(NAME,STR,DEX,INT)
    {
        this.name = NAME;
        this.stats.lifeLimit += STR*3;
        this.stats.life = this.stats.lifeLimit;
        this.stats.attack +=this.stats.attack/100 * STR;
        this.stats.attackSpeed +=DEX;
        this.stats.castSpeed +=DEX;
        this.stats.defense +=DEX+INT;
        this.stats.magicDefense +=DEX+INT;

    }
    getName=()=>{
        return this.name;
    }
    getStat=(stat)=>{
        return this.stats[stat];
    }
    getTarget=()=>{
        return this.targetId;
    }
    setMonsters=(monsters)=>{
        this.Monsters=monsters;
    }
    setActive=()=>{
        this.isActive = !this.isActive;
    }
    setTask=(mainTask)=>{
        this.mainTask=mainTask;
    }

    attackHandle = ()=>{
        console.log(this.name+" want to attack");
        let monster = this.Monsters[this.targetId];
        
       let life = monster.doDamage(this.stats.attack);

        if(life<0)
            {
                this.Monsters.splice(this.targetId, 1);
            }
    }

    active = ()=>{
       setTimeout(()=>{
                    switch(this.mainTask)
                    {
                        case "buff":
                            console.log(this.name+" want to buff");
                         break;
                        case "assist":
                            console.log(this.name+" want to assist");
                            if(this.asistGil)
                            {
                                this.targetId=this.assistGil.getTarget();
                                if(this.targetId)
                                     this.attackHandle();
                            }
                         break;
                        case "target":
                             this.targetId=Random(0,this.Monsters.length);
                             this.attackHandle();
                        break;
                        case "heal":
                            if(this.healGil)
                            {

                                console.log(this.name+" curar a "+this.healGil.getName());
                            }
                        break;
                        default:
                            console.log(this.name+" doing nothing");
                        break;
                    }
                    let monster = this.Monsters[this.targetId];
                    if(monster)
                        console.log(monster.getData())
                    this.active();
            },2000);
    }

    takeCareOf = gil=>
    {
        this.healGil=gil;
    }
    assistThisGuy = gil=>
    {
        this.assistGil=gil;
    }
}

export default PJ;