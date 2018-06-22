import React,{Component} from 'react';
import Pj from '../gameCore/char/pj';
import {connect } from 'react-redux';
class CharacterCreator extends Component{

    state ={
        firstoptions: [],
    }


    classSelect = ()=>{
        let el = document.getElementById("charClass");
        let newOptions = [];
        switch(el.value)
        {
            case 'human':
                newOptions.push({value:"humanfighter",text:"Human Fighter"});
                newOptions.push({value:"humanmage",text:"Human Mage"});
            break;
            case 'elf':
                newOptions.push({value:"elffighter",text:"Elf Fighter"});
                newOptions.push({value:"elfmage",text:"Elf Mage"});
            break;
            case 'darkelf':
                newOptions.push({value:"darkelffighter",text:"Dark Elf Fighter"});
                newOptions.push({value:"darkelfmage",text:"Dark Elf Mage"});
              break;
              case 'orc':
                newOptions.push({value:"orcfighter",text:"Orc Fighter"});
                newOptions.push({value:"orcmage",text:"Orc Mage"});
              break; 
              case 'dwarf':
                newOptions.push({value:"dwarffighter",text:"Dwarf Fighter"});
            break; 
            default:
        }

        let newState={...this.state};
        newState.firstoptions=newOptions;
        this.setState(newState);

    }

    showFirstOptions = ()=>{ 
        return this.state.firstoptions.map((op)=>{
           return <option className="selectOption" value={op.value}>{op.text}</option>
       })
    }

    createChar=()=>{
        let el = document.getElementById("charName");
        let firstClase = document.getElementById("charClass");
        let secClase = document.getElementById("charSecClass");

        let newChar = new Pj(el.value,firstClase.value,secClase.value);
        this.props.onNewCharacter(newChar);
    }

    render(){

        return (
            <div>
            <div className="secTitle">Character Creator</div>

            <div className="Char-li">Name: <input id="charName" type="text" ></input></div>
            <div className="Char-li">Race: <select id="charClass" onChange={this.classSelect}  className="selectStyle">
            <option className="selectOption" value="none">-</option>
            <option className="selectOption" value="human">Human</option>
            <option className="selectOption" value="elf">Elf</option>
            <option className="selectOption" value="darkelf">Dark Elf</option>
            <option className="selectOption" value="orc">Orc</option>
            <option className="selectOption" value="dwarf">Dwarf</option>
          </select></div>
          {this.state.firstoptions.length>0 ? (<div>
          <div className="Char-li">Class Type: <select id="charSecClass" className="selectStyle">
           {this.showFirstOptions()} </select>
           </div>
           <div className="padding-top5"> <button onClick={this.createChar} className="GButton">Create Character</button> </div>
           </div>
        ) : null }
          

            </div>
        )
    }

}
const mapDispatchToProps = dispatch =>{
    return {
      onNewCharacter: (char)=> dispatch({type: 'NEWCHARACTER',char: char}),
    }
  }
  
export default connect(null,mapDispatchToProps)(CharacterCreator);

