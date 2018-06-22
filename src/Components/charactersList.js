import React, {Component} from 'react';
import '../css/characters.css';
import {Link,Redirect} from 'react-router-dom';
import {connect } from 'react-redux';

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

    listerino=()=>{
        return this.props.characters.map((PJ)=>{
            let link = "/characters/"+PJ.name;
        return (<li key={PJ.name} className="Char-li">
             <Link to={link}>{PJ.name} ({PJ.classe})</Link>
        </li>);
        });
        
    }


    render(){
        return (
            <div>
                <div className="secTitle">My Characters</div>
                {this.state.redirect ? <Redirect to={this.state.redUrl}/> : null}
                <div>
                 <ul className="Char-ul">
                    {this.listerino()}
                </ul>
                </div>
                <div className="padding-top5"> <button onClick={()=>this.redirecter("/character/creator")} className="GButton">Create new character</button> </div>
            </div>
        );

    }
}


const mapStateToProps = state =>{
    return {
       characters: state.characters
    }
  }

export default connect(mapStateToProps,null)(CharactersList);

