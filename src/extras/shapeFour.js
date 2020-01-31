import React, { Component } from 'react';
import shapeFour from "./shapeFour.module.css";

class ShapeFour extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={shapeFour.margin}>
                <div className={shapeFour.container}>
                    <div className={shapeFour.floatLeft}>
                        <div className={shapeFour.leftDiv}>
                                <div className={shapeFour.divOne}>
                                    <p>1</p>
                                    <div className={shapeFour.smallDiv}><p>1a</p></div>
                                </div>
                            <div className={shapeFour.divTwo}><p>2</p></div>
                        </div>
                    </div>
                    <div className={shapeFour.floatRight}>
                        <div className={shapeFour.rightDiv}>
                            <div className={shapeFour.divThree}>3</div>
                            <div className={shapeFour.divFour}>4</div>
                            <div className={shapeFour.divFive}>5</div>
                        </div>
                    </div>
                    <div className={shapeFour.divSix}><p>6</p></div>
                </div>
            </div>
         );
    }
}
 
export default ShapeFour;