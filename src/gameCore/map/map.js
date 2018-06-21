import Random from '../../utility/random';
class MapContent {

    content=[];
    setContent =(x,y)=>
    {
        let found =this.findCont(x+"_"+y);
        if(!found)
        {
            let level = this.distance(x,y,20,20);
            let type=this.monsterType();
            let newCont={
                id:x+"_"+y,
                posX: x,
                posy: y,
                level: level,
                type: type,
                monster:{ 
                    name:this.jsUcfirst(type),
                    attack: this.attackCalc(level),
                    life: this.lifeCalc(level)
                }

            }
            this.content.push(newCont);
            return newCont;
         }
         else
            return found;
    }
    findCont= (id)=>{
        let found =  this.content.find((el)=> {
            return el.id===id;
          });
          return found;
    }
    lifeCalc(lvl)
    {
        return (lvl+35)*2;
    }
    attackCalc(lvl)
    {
        return (lvl+1)*3;
    }
    jsUcfirst =(string)=> 
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    monsterType=()=>{
        let some=Random(1,6);
        let type="";
        switch(some)
        {
            case 1:
                type="zombie";
            break;
            case 2:
                type="esqueleton";
            break;
            case 3:
                type="knight";
            break;
            case 4:
                type="mage";
            break;
            case 5:
                type="orc";
            break;
            case 6:
                type="bear";
            break;
            default:
            
        }
        return type;
    }
    distance = (lat1, lon1, lat2, lon2)=> {
        let p = 0.017453292519943295;    // Math.PI / 180
        let c = Math.cos;
        let a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
      
        return ((12742 * Math.asin(Math.sqrt(a)))/100).toFixed(0);
      }
}


export default MapContent;