import React, { Component } from 'react';
import "./shapeOneGrid.css"


class ShapeOneGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="margin">

                <div className="container">
                    
                    <div className="divOne">1</div>
                    <div className="rightContainer">
                        <div className="divTwo">2</div>
                        <div className="underContainer">
                            <div className="divThree">3</div>
                            <div className="cornerContainer">
                                <div className="divFour">4</div>
                                <div className="divFive">5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default ShapeOneGrid;