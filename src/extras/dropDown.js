import React, { Component } from 'react';
import dropdown from "./dropDown.module.css"
import { Link } from 'react-router-dom'
import "./hamburgers.css"



class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: false,
         }
    }

    clickFunction (){
        this.setState({
            bars: !this.state.bars
        })
    }


    render() { 
        return ( 
            <div className={dropdown.header}> 
                <div className={dropdown.logo}>logo</div>

                <ul className={this.state.bars === false ? dropdown.mainNav : dropdown.responsiveNav}>
                    <li><span className={dropdown.span}>Home</span></li>
                    <li className={dropdown.subMenuParent}><span className={dropdown.span}>Projects</span>
                        <ul className={dropdown.subMenu}>
                            <li><Link to='/shapeOne'>Shape One</Link></li>
                            <li><Link to='/shapeTwo'>Shape Two</Link></li>
                            <li><Link to='/shapeThree'>Shape Three</Link></li>
                            <li><Link to='/shapeFour'>Shape Four</Link></li>
                            <li><Link to='/usermanagement'>Usermanagement</Link></li>
                        </ul>
                    </li>
                    <li><span className={dropdown.span}>Contact</span></li>                    
                    <li><span className={dropdown.span}>tbd</span></li> 
                </ul>

                <div className={dropdown.burger}>

                <button onClick={() => this.clickFunction()} className={this.state.bars === false ?"hamburger hamburger--collapse" : "hamburger hamburger--collapse is-active" }  type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>

                </div>
               
            </div>
         );
    }
}
 
export default DropDown;