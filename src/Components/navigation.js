import React from 'react';
import {Link,NavLink} from 'react-router-dom';

import '../css/nav.css';
const navigation =()=>{

    return (
        <div className="topnav">
        <NavLink  to="/" exact>Home</NavLink>
        <NavLink  to="/characters">Characters</NavLink>
        <NavLink to="/map">Map</NavLink>
        <div className="topnav-right">
            <Link to="/leave">Exit</Link>
        </div>
        </div>
    )

}
export default navigation;