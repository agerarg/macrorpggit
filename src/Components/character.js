import React,{Component} from 'react';
import '../css/characters.css';
import {withRouter, Redirect} from 'react-router-dom';
import {connect } from 'react-redux';

import charImg from '../img/chars/rouge.png';
class Character extends Component {
     state ={
        redirectToChars: false
    }
    char = {};
    backToChars =()=>{
        let newState = {...this.state};
        newState.redirectToChars=true;
        this.setState(newState);
   }
   componentWillMount(){
       let found = this.props.characters.find((PJ)=>{
            return PJ.name === this.props.match.params.id;
         });
         if(found)
            this.char = found;
         else
            this.backToChars();
   }
    render(){



            return (
                <div>
                    <div className="secTitle">My Characters</div>
                    {this.state.redirectToChars ? <Redirect to="/characters/"/> : (
                        <div>
                    <div className="Char-Link-Bar">
                    <button onClick={this.backToChars} className="GButton">Go to Characters</button> <button className="GButton">Actions</button>   <button className="GButton">Skills</button>    <button className="GButton">Items</button> 
                    </div>
                    <div className="Chars-conteiner">
                        <div className="Char-wrapper">
                            <div className="Char-box Char-Name">
                               {this.char.name}
                            </div>
                            <div className="Char-box Char-Img">
                             <div> <img alt="Character" src={charImg} /></div>
                             <div>{this.char.classe}</div>
                            </div>
                            <div className="Char-box Char-Agro"> Attack:  {this.char.stats.attack}<br/>
                            Attack Speed:  {this.char.stats.attackSpeed}<br/>
                               Critical: {this.char.stats.critical}%<br/>
                               Critical Damage: {this.char.stats.criticalDmg}%<br/></div>
                            <div className="Char-box Char-Def"> Life: {this.char.stats.lifeLimit}<br/>
                            Life: {this.char.stats.manaLimit}<br/>
                               Defense:  {this.char.stats.defense}<br/>
                               Magic Defense: {this.char.stats.magicDefense}<br/></div>
                           <div className="Char-box Char-Actions"> 
                           Currrent Task: <br />
                           <button className="GButton">Add Action</button> 
                           </div>    
                           <div className="Char-box Char-State"> 
                          <div className="Char-inactive"> State: Inactive</div>
                           <div><button className="GButton">Activate</button> </div>
                           </div>    
                        </div>
                    </div>
                    </div>
                    ) }
                </div>
            );

    }

} 

const mapStateToProps = state =>{
    return {
       characters: state.characters
    }
  }

export default connect(mapStateToProps,null)(withRouter(Character));