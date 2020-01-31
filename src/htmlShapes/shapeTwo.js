import React, { Component } from 'react';
import shapeTwo from "./shapeTwo.module.css";

class ShapeTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={shapeTwo.margin}>
                <div className={shapeTwo.container}>
                    <div className={shapeTwo.divOne}> 1
                        <div className={shapeTwo.innerDivOne}>1a</div>
                    </div>
                    <div className={shapeTwo.divTwo}>2</div>
                    <div className={shapeTwo.divThree}>3</div>
                    <div className={shapeTwo.divFour}>4</div>
                    <div className={shapeTwo.divFive}>5</div>
                    <div className={shapeTwo.divSix}>6</div>
                </div>
            </div>
         );
    }
}
 
export default ShapeTwo;