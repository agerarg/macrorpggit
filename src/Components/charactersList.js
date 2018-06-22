import React, {Component} from 'react';
import '../css/characters.css';
import {Link} from 'react-router-dom';
class CharactersList extends Component{



    render(){


        return (
            <div>
                <div className="secTitle">My Characters</div>
                <div>
                 <ul className="Char-ul">
                    <li className="Char-li"><Link to="/characters/zurich">Zurich (Warrior)</Link></li>
                    <li className="Char-li"><Link to="/characters/geneva">Geneva (Mage)</Link></li>
                </ul>
                </div>
                <div className="padding-top5"> <button className="GButton">Create new character</button> </div>
            </div>
        );

    }
}

export default CharactersList;