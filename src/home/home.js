import React, {Component} from "react";
import home from "./home.module.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: "I'm a frontend developer",
            animation: true,
            opacity: 1,
         }
    }

    componentDidMount(){
        this.getText()
    }

    getText = () => {
        let textArray = ["specializing in React","looking for fun job opportunities", "I'm a frontend developer"]

        let number = 0;

        setInterval(() => {   
            if (number < 2){
                number++
                // console.log(number)
                this.setState({
                    text: textArray[number],
                    // animation: !this.state.animation,
                })    
            } else {
                number = 0
                this.setState({
                    text: textArray[number],
                    // animation: !this.state.animation,
                })  
            }
        }
        ,6000 )

        
        setInterval(() => {
            if(this.state.opacity === 0){
                this.setState({
                    opacity: 1
                })
            } else {
                this.setState({
                    opacity: 0
                })
            }
        }
        ,3000 )
        
    }

    render() { 

        let style = {
            opacity: this.state.opacity,
            transition: "opacity 1s ease-in-out",
        }

        return ( 
            <div className={home.container} >
                <p> Hello There,</p>
                <span style={style}>{this.state.text}</span>
            </div>
         );
    }
}
 
export default Home;