import React,{Component} from 'react';
import '../css/map.css';
import {connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class Map extends Component {
    alreadyLoad=false;
    
    state ={
        redirect: false,
        redUrl: ""
    }

    centerToStart = ()=>{
        let elem=  document.getElementById("mapConteiner");
        elem.scrollTop = this.props.topPos;
        elem.scrollLeft = this.props.leftPos;
    }
    componentWillUnmount(){
        let elem=  document.getElementById("mapConteiner");
        this.props.onMapMove(elem.scrollTop,elem.scrollLeft);
    }
    componentDidMount() {
        if(!this.alreadyLoad)
        {
             this.centerToStart();
             this.alreadyLoad=true;
        }
    }
    checkScrollPos = ()=>{
        
        
    }
    nextLine =(line)=>{
        switch(line)
        {
            default:
                line='hexLineStart';
            break;
            case 'hexLineStart':
                line='hexLine2r';
            break;
            case 'hexLine2r':
                line='hexLine3r';
            break;
            case 'hexLine3r':
                line='hexLine2r';
            break;
        }
        return line;
    }
    findBlock = (j,i)=>{
        let found =  this.props.dataMap.find((el)=> {
            return el.x===j && el.y===i;
          });
          return found;
    }
    isOdd =(n)=> {
        return Math.abs(n % 2) === 1;
     }
     revealOddArea=(x,y)=>
     {
        let newAreas=[];
        let vX=x;
        let vY=y+1;
        if(!this.findBlock(vX,vY))
             newAreas.push({x:vX,y:vY});
        vX=x-1;
        vY=y;     
        if(!this.findBlock(vX,vY))
             newAreas.push({x:vX,y:vY});

        vX=x-1;
        vY=y+1;     
        if(!this.findBlock(vX,vY))
            newAreas.push({x:vX,y:vY});     

        vX=x;
        vY=y-1;     
        if(!this.findBlock(vX,vY))
            newAreas.push({x:vX,y:vY});       
            
        vX=x+1;
        vY=y;     
        if(!this.findBlock(vX,vY))
            newAreas.push({x:vX,y:vY});  
        
            vX=x+1;
            vY=y+1;     
            if(!this.findBlock(vX,vY))
                newAreas.push({x:vX,y:vY}); 

       return newAreas;
     }
     revealEvenArea=(x,y)=>
     {
        let newAreas=[];
        let vX=x;
        let vY=y+1;
        if(!this.findBlock(vX,vY))
             newAreas.push({x:vX,y:vY});
        vX=x-1;
        vY=y;     
        if(!this.findBlock(vX,vY))
             newAreas.push({x:vX,y:vY});

       
        vX=x;
        vY=y-1;     
        if(!this.findBlock(vX,vY))
            newAreas.push({x:vX,y:vY});       
            
        vX=x+1;
        vY=y;     
        if(!this.findBlock(vX,vY))
            newAreas.push({x:vX,y:vY});  
        
            vX=x-1;
            vY=y-1;     
            if(!this.findBlock(vX,vY))
                newAreas.push({x:vX,y:vY}); 

         vX=x+1;
        vY=y-1;     
        if(!this.findBlock(vX,vY))
            newAreas.push({x:vX,y:vY}); 

       return newAreas;
     }
    mapRevealLocal=(x,y)=>{
        let arr=[];
        if(this.isOdd(x))
           arr = this.revealOddArea(x,y);
        else
            arr = this.revealEvenArea(x,y);
        this.props.onMapReveal(arr);

    }
    enterDungeonMap=(x,y)=>{
        if(!(x===20 && y===20))
        {
            let found = this.findBlock(x,y);
            if(found)
            {
                let newState={...this.state};
                newState.redUrl='/map/dungeon/'+x+"_"+y;
                newState.redirect=true;
                this.setState(newState);

            }
        }
 
    }
    
    render (){

         let MapContent=[];
         const MapLine=[];
         for(let i=0;i<40;i++)
         {
            for(let j=0;j<40;j++)
                {
                    let classe="fog";
                    if(this.props.dataMap)
                    {
                      let found =  this.props.dataMap.find((el)=> {
                            return el.x===i && el.y===j;
                          });
                        if(found)
                        {

                         let monst = this.props.mContent.setContent(i,j);

                         if(monst)
                         {
                            classe="M"+monst.type;
                         }
                         else
                            classe="Mnone";
                        }
                    }
                    if(i===20&j===20)
                         classe="center discover";
                     
                    MapContent.push({x:i,y:j,class:classe});
                }
            MapLine.push(MapContent);
            MapContent=[];    
        }
        
        let texlineClass="";
        let sumLines=0;
        let sumSlots=0;
        const mapDraw = MapLine.map((MC)=>{
           let line= MC.map((obj)=>{
                let tit="X:"+obj.x+"/Y:"+obj.y;
                let classe = obj.class+" hex";
                sumSlots++;
                return <div onClick={()=>{ this.enterDungeonMap(obj.x,obj.y) }} key={sumSlots} className={classe} title={tit} ></div>;
            });
            texlineClass=this.nextLine(texlineClass);
            sumLines++;
            return  <div key={sumLines} className={texlineClass}>{line}</div>
        })        
        return (
            <div>
            
                 {this.state.redirect ? <Redirect to={this.state.redUrl}/> : null}
                <div className="secTitle">
                Map: {this.props.reveals}
                 </div>
                <div onScroll ={this.checkScrollPos} id="mapConteiner">
                    <div id="map">
                    {mapDraw}
                    </div>
                </div>
                
            </div>
        );
    }

}
const mapStateToProps = state =>{
    return {
      topPos: state.topPos,
      leftPos: state.leftPos,
      dataMap: state.dataMap,
      reveals: state.reveals
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
      onMapMove: (top,left)=> dispatch({type: 'MAPSCROLLPOS',top: top,left: left}),
      onMapReveal: (arr)=> dispatch({type: 'REVEALMAP',revArr: arr}),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Map);
