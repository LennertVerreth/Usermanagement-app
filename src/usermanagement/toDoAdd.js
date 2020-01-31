import React, {Component} from "react";
import classes from "./index.module.css";
import FontAwesome from "react-fontawesome";

class ToDoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTitle: "",
            id: 0
          }
    }

    componentDidMount(){
        console.log("MOUNT ", this.props.editObj.id)
        this.setState({
            id:  this.props.editObj.id || 0
        })
    }

    componentDidUpdate(){
        document.getElementById("addNoteInput").addEventListener("keyup",(e) => this.pressEnter(e))
    }

    pressEnter = (e) => {
        if (e.keyCode === 13){
            this.props.addToDo(this.state.newTitle, this.state.id)
        }
    }
    

    handleChange = (e) =>{
        this.setState({
            newTitle: e.target.value
        })
    }

    test =(e) =>{
        if(e.target.id === "overlay"){
            this.props.closeoverlay(false)
        }
    }

    render() { 
        
        return ( 
            <div id="overlay" className={classes.overlay} onClick={(e) => this.test(e)}>
                <div className={classes.toDoAddContainer}>

                    <p>New to do item</p>

                    <input id="addNoteInput" autoFocus defaultValue={this.props.editObj.title} placeholder="add your todo" type="text" onChange={(e) => this.handleChange(e)} />

                    {this.state.newTitle === "" ? (
                        <div className={classes.submitButtonError}>OK</div>
                    ) :(
                        <button
                            className={classes.submitButtonn} 
                            onClick={() => this.props.addToDo(this.state.newTitle, this.state.id)}
                        >
                            OK
                        </button>
                    )}
                </div>
            </div>
         );
    }
}
 
export default ToDoAdd;

                    {/* {this.props.error &&
                    <p>*you can do better than <span style={{color: "red"}}>empty</span>, man</p>
                    } */}