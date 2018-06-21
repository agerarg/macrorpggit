class MapDraw {

MapContent=[];
MapLine=[];

constructor()
{
        for(let i=0;i<40;i++)
        {
            for(let j=0;j<40;j++)
                {
                    let classe="fog";
                    if(i==20&j==20)
                        classe="center discover";
                    this.MapContent.push({x:i,y:j,class:classe});
                }
            this.MapLine.push(this.MapContent);
            this.MapContent=[];    
         }
    }

    getmap=()=>
    {
        return [this.MapContent,this.MapLine];
    }

}


export default MapDraw;