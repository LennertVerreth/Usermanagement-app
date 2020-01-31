import React, { Component } from 'react';
import shapeThree from "./shapeThree.module.css";

class ShapeThree extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={shapeThree.margin}>
                <div className={shapeThree.container}>
                    <div className={shapeThree.divOne}><p>1</p></div>
                    <div className={shapeThree.upperDiv}>
                        <div className={shapeThree.divTwo}><p>2</p></div>
                        <div className={shapeThree.divThree}><p>3</p></div>
                    </div>
                    <div className={shapeThree.lowerDiv}>
                        <div className={shapeThree.divFour}><p>4</p></div>
                        <div className={shapeThree.divFive}><p>5</p></div>                    
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ShapeThree;