import React, { Component } from 'react';
import shapeOne from "./shapeOne.module.css";


class ShapeOne extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={shapeOne.margin}>
                <div className={shapeOne.shapeOne}>
                    <div className={shapeOne.divOne}>1</div>
                    <div className={shapeOne.divTwo}>2</div>
                    <div className={shapeOne.divThree}>3</div>
                    <div className={shapeOne.divFour}>4</div>
                    <div className={shapeOne.divFive}>5</div>
                </div>
            </div>

         );
    }
}
 
export default ShapeOne;