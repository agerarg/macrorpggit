import React,{Component} from 'react';

class Dungeon extends Component{


   

    render(){
        return(
            <div>
                <h1>hola chiche {this.props.match.params.pos}</h1>
                <div>Dungeon Component</div>
            </div>
        )
    }
}

export default Dungeon;