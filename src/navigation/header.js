import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import "./hamburgers.css"
import "./header.css"
// import "./header_old.module.css"
import {ReactComponent as Logo} from "../img/logo.svg"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: false,
         }
    }

    clickFunction(){
        // if(!this.state.bars){
        //     document.body.style.overflow = "hidden"
        // }else{
        //     document.body.style.overflow = "initial"
        // }
        
        this.setState({
            bars: !this.state.bars
        })
    }

    closeFunction(){
        this.setState({
            bars: false
        })
    }

    render() { 
        return ( 
                <div className="mainHeader"> 
                     
                     <Link className="logoLink" onClick={() => this.closeFunction()} to='/home'><Logo className="logo" /></Link>
                     
                     <ul className={this.state.bars === false ? "mainNav" : "responsiveNav"}>
                        <li><Link className="link" onClick={() => this.clickFunction()} to='/home'>Home</Link></li>
                        <li><p className="link">Projects</p>
                            <ul>
                                <li><Link className="subLink" onClick={() => this.clickFunction()} to='/shapeOne'>Shape One</Link></li>
                                <li><Link className="subLink" onClick={() => this.clickFunction()} to='/shapeTwo'>Shape Two</Link></li>
                                <li><Link className="subLink" onClick={() => this.clickFunction()} to='/shapeThree'>Shape Three</Link></li>
                                <li><Link className="subLink" onClick={() => this.clickFunction()} to='/shapeFour'>Shape Four</Link></li>
                                <li><Link className="subLink" onClick={() => this.clickFunction()} to='/usermanagement'>Usermanagement</Link></li>
                            </ul>
                        </li>
                        <li><Link className="link" onClick={() => this.clickFunction()} to='/contact'>Contact</Link></li>                    
                        <li><Link className="link" onClick={() => this.clickFunction()} to='/home'>tbd</Link></li>                    
                    </ul>
                     
                    <div onClick={() => this.clickFunction()} className={this.state.bars === false ?"hamburger hamburger--collapse burger" : "burger hamburger hamburger--collapse is-active" }  type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>

                </div>        
         );
    }
}
 
export default Header;