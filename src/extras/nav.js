import React, { Component } from 'react';
// import nav from "./nav.module.css"
// import Links from "./htmlShapes/links"
import { Link } from 'react-router-dom'
import FontAwesome from "react-fontawesome";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bars: false
        }
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    render() { 
        return ( 
            // <div className={nav.container {}}>
            <div className={this.state.bars === true ? nav.responsive : nav.container}>
                <div className={nav.home}>Home</div>
                <div className={nav.contact}>Contact</div>

                <div className={nav.dropDown}> Projects
                        <ul className={nav.dropDownContent}>
                            {/* <li><Link to='/shapeOne'>Shape One</Link></li>
                            <li><Link to='/shapeTwo'>Shape Two</Link></li>
                            <li><Link to='/shapeThree'>Shape Three</Link></li>
                            <li><Link to='/shapeFour'>Shape Four</Link></li> */}
                        </ul>
                </div>

                <div className={nav.tbd}>tbd</div>
                <div className={nav.bars} onClick={() => this.setState({bars: !this.state.bars})}><FontAwesome name="bars"/></div>
            </div>
         );
    }
}
 
export default Nav;