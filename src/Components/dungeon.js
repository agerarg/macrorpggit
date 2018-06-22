import React,{Component} from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import {connect } from 'react-redux';
import '../css/dungeon.css';
class Dungeon extends Component{

    content =  {};
    dungeonData = {};
    state ={
        redirectToMap: false
    }
  componentWillMount =()=>{

        this.content =  this.props.mContent.findCont(this.props.match.params.pos);
        if(!this.content)
        {
            let newState = {...this.state};
            newState.redirectToMap=true;
            this.setState(newState);
        }
        else
        {
            if(this.props.dungeonMonsters)
            {
             

                let foundDungeon =   this.props.dungeonMonsters.find((el)=> {
                    return el.id===this.props.match.params.pos;
                });
                if(foundDungeon)
                {
                    this.dungeonData = foundDungeon;
                }
                else
                {
                    let newDungeon = {
                        id: this.props.match.params.pos,
                        cant: 35,
                        monster: this.content.monster,
                        type: this.content.type
                    }
                    this.props.onDungeonDiscover(newDungeon);
                    this.dungeonData = newDungeon;
                }
            }
        }
   }
   fillMaperino = ()=>{
       let items=[];
       let classe="";
            for(let i=0; i<=41;i++)
            {
                //console.log("hello"+i)
                if(i<=this.dungeonData.cant)
                {
                    classe="item monstbg D"+this.dungeonData.type;
                     items.push(<div key={i} className={classe}></div>);
                }
                else    
                     items.push(<div key={i} className="item"></div>);
            }
        return  items;
   }

   backToMap =()=>{
        let newState = {...this.state};
        newState.redirectToMap=true;
        this.setState(newState);
   }

    render(){
        return(
            <div>
                 {this.state.redirectToMap ? <Redirect to="/map"/> : null}
                <div>
                    <div className="secTitle" >Dungeon: {this.props.match.params.pos}</div>
                     <div><button onClick={this.backToMap} className="GButton">Go to map</button> <button className="GButton">Add Characters</button></div>
                </div>
                <div className="dungeonContent">
                    <div className="dungeon">
                      {this.fillMaperino()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        dungeonMonsters: state.dungeonMonsters,
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
      onDungeonDiscover: (dungeon)=> dispatch({type: 'DUNGEONDISCOVER',dungeon: dungeon}),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Dungeon));