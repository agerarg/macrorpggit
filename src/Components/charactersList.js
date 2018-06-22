import React, {Component} from 'react';
import '../css/characters.css';
import {Link,Redirect} from 'react-router-dom';
class CharactersList extends Component{

    state ={
        redirect: false,
        redUrl: ""
    }

    redirecter=(url)=>{
        let newState={...this.state};
        newState.redUrl=url;
        newState.redirect=true;
        this.setState(newState);
    }

    render(){


        return (
            <div>
                <div className="secTitle">My Characters</div>
                {this.state.redirect ? <Redirect to={this.state.redUrl}/> : null}
                <div>
                 <ul className="Char-ul">
                    <li className="Char-li"><Link to="/characters/zurich">Zurich (Warrior)</Link></li>
                    <li className="Char-li"><Link to="/characters/geneva">Geneva (Mage)</Link></li>
                </ul>
                </div>
                <div className="padding-top5"> <button onClick={()=>this.redirecter("/character/creator")} className="GButton">Create new character</button> </div>
            </div>
        );

    }
}

export default CharactersList;