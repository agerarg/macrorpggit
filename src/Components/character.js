import React,{Component} from 'react';
import '../css/characters.css';
import char from '../img/chars/rouge.png';
class Character extends Component {



    render(){

            return (
                <div>
                    <div className="secTitle">My Characters</div>
                    <div className="Char-Link-Bar">
                        <button className="GButton">Actions</button>   <button className="GButton">Skills</button>    <button className="GButton">Items</button> 
                    </div>
                    <div className="Chars-conteiner">
                        <div className="Char-wrapper">
                            <div className="Char-box Char-Name">
                                A. Juanca
                            </div>
                            <div className="Char-box Char-Img">
                             <img src={char} />
                            </div>
                            <div className="Char-box Char-Agro"> Attack: 12<br/>
                               Critical: 5%<br/>
                               Critical Damage: 125%<br/></div>
                            <div className="Char-box Char-Def"> Life: 120<br/>
                               Defense: 25<br/>
                               Magic Defense: 15<br/></div>
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
            );

    }

} 

export default Character;