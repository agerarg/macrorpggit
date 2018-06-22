import Random from '../../utility/random';
import claseAttr from '../char/claseAttr';
import classNames from '../char/claseNames';
class PJ{
    name = "";
    race="";
    classe="";
    stats={ };
    isActive=true;
    Monsters=[];
    targetId=0;
    healGil = [];
    assistGil = null;
    buffGil = [];
    life=0;
    mana=0;

    mainTask="";
    constructor(NAME,RACE,CLASSE)
    {
        this.stats = claseAttr(RACE,CLASSE);
        this.name = NAME;
        this.race = RACE;
        this.classe = classNames(CLASSE);
        this.life= this.stats.lifeLimit;
        this.mana=this.stats.manaLimit;

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