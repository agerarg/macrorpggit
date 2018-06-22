//modules imported from npm:
import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {connect } from 'react-redux';
//Custom Classes for game:
import Party from './gameCore/party/party';
import Monster from './gameCore/char/monster';
import MapContent from './gameCore/map/map';
import Dungeon from './Components/dungeon';
//Components imports for views:
import Nav from './Components/navigation';
import Map from './Components/map';
import Character from './Components/character';
import CharactersList from './Components/charactersList';
class App extends Component {

  MapCont= new MapContent();

  render() {
  /*
    let monsterList = [];

    for(let i=0;i<10;i++)
    {
      let mond= new Monster("Goblin",100,25);
      monsterList.push(mond);
    }
    let party = new Party();
    party.addMember("pepe",23,1,2);
    party.addMember("juanca",34,23,2);
    
    let memb = party.getMember(0);
    let juanc = party.getMember(1);
   
    juanc.setMonsters(monsterList);
    memb.setMonsters(monsterList);

    juanc.assistThisGuy(memb);
    juanc.setTask("assist");
 

    memb.setTask("target");
  
    juanc.active();
    memb.active();


    monsterList.map((mons)=>{ 
      if(mons)
      console.log(mons.getData())
       })
       */



    return (
      <div className="App">
      <BrowserRouter>
      <div>
          <Nav />
          <Switch>
            <Route path="/characters" exact component={CharactersList} />
            <Route path="/characters/:id" component={Character} />
            <Route path="/map" exact render={()=><Map mContent={this.MapCont} />} />
            <Route path="/map/dungeon/:pos" render={()=><Dungeon mContent={this.MapCont} />} />
          </Switch>
       
          <h4>Redux Test</h4>
          <div><button onClick={this.props.onIncrementCounter}>Increment</button><button onClick={this.props.onDecrementCounter}>onDecrementCounter</button></div>
          <div>{this.props.ctr}</div>
          
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    ctr:state.counter
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    onIncrementCounter: ()=> dispatch({type: 'INCREMENT'}),
    onDecrementCounter: ()=> dispatch({type: 'DECREMENT'}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
