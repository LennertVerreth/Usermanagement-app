import React, { Component } from 'react';
import grid from "./shapeFour.module.css"


class ShapeFour extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={grid.margin}>

                <div className={grid.shapeFour}>
                    
                    <div className={grid.divOne}>1</div>
                    <div className={grid.divTwo}>2</div>
                    <div className={grid.divThree}>3</div>
                    <div className={grid.divFour}>4</div>
                    <div className={grid.divFive}>5</div>

                </div>
            </div>
         );
    }
}
 
export default ShapeFour;