import React, { Component } from 'react';
import menu from "./menu.module.css"
import FontAwesome from "react-fontawesome";
// import { Link } from 'react-router-dom'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          <div className={menu.container}> 
          
            <nav>

                <div>logo</div>

                <ul className={menu.list}>
                    <li> Home </li>
                    <li> Projects 
                        <ul>
                            <li> Project 1 </li>
                            <li> Project 1 </li>
                            <li> Project 1 </li>
                            <li> Project 1 </li>
                        </ul>
                    </li>
                    <li> Contact </li>                    
                    <li> tbd </li> 
                </ul>

                <div className={menu.bars}><FontAwesome name="bars"/></div>
            </nav>
        </div>

         );
    }
}
 
export default Menu;