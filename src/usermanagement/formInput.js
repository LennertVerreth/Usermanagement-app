import React, { Component} from "react";
import classes from "./index.module.css";

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        }
    }

    componentDidUpdate(){
        // console.log("props:",this.props)
    }

    test = () => {
        //alert("don't forget me")
        console.log("blur", this.props.name, this.props.value)
        if(this.props.value === ""){
            console.log("ERROR ", this.props.name)
        }
    }

    render() { 

        

        return ( 
            <div className={classes.group}>
                <label className={classes.label} htmlFor={this.props.name}> {this.props.placeholder} {this.props.error && "*"}</label>
                
                {this.props.edit === false ?
                    <div>{this.props.value}</div>
                :
                    <input 
                        className={this.props.error ? classes.redInput : classes.input} 
                        type="text" 
                        id={this.props.name} 
                        name={this.props.name} 
                        value={this.props.value} 
                        placeholder={this.props.placeholder} 
                        onChange={this.props.newUserData} 
                        onBlur={() => this.test()}
                    />
                }
            </div>

                

         );
    }
}
 
export default FormInput;