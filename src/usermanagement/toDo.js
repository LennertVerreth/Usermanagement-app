import React, {Component} from "react";
// import classes from "./index.module.css";
import ToDoAdd from "./toDoAdd"
import FontAwesome from "react-fontawesome";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentUserId: this.props.userId,
            toDoData: [],
            openAddToDo: false,
            selectedObj:{},
            // newTitle: "",
            drag:"",
            editable: false,
            // editablee: false,
        }    
    }

    async componentDidMount(){
        
        const usertododata = localStorage.getItem("usertododata" + this.state.currentUserId)
        if(usertododata !== undefined && usertododata !== null){
            this.setState({
                toDoData : JSON.parse(usertododata)
            })
        } else {
            await fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(fetch => this.parseData(fetch))
        }

        

        //window.addEventListener('mousedown',this.test(true));
        //window.addEventListener('mousedown',this.onMouseDown);
       // window.addEventListener('mousemove', this.onMouseMove);
        //window.addEventListener('mouseup', this.onMouseUp);
       // window.addEventListener('mousemove', (drag) => this.test(drag));
        //window.addEventListener('mouseup', () => this.tester());

        
    }

    onMouseDown = e => {
        this.setState({ drag: false })
        console.log(e.target)
    }

    onMouseMove = e => {
        this.setState({ drag: true })
    }

    onMouseUp = e => {
        console.log(this.state.drag ? 'drag' : 'click')
        this.setState({ drag: false })
    }

    componentDidUpdate(){
        console.log(this.state.toDoData)

        console.log("LAST ONE: " , this.state.currentUserId, this.state.toDoData[this.state.toDoData.length -1].id)
        
    }

    componentWillUnmount(){
        console.log("UNMOUNT TODO")
        window.removeEventListener('mousedown',this.onMouseDown);
        window.removeEventListener('mousemove',this.onMouseMove);
        window.removeEventListener('mouseup',this.onMouseUp);
        //window.removeEventListener('mousedown',this.test(true));
       // window.removeEventListener('mousemove',(drag) => this.test(drag));
       // window.removeEventListener('mouseup', () => this.tester());

    }

    test = (x) => {
        console.log(x)
        this.setState({
            drag: x
        })
    }

    tester = () =>{
        console.log(this.state.drag ? 'drag' : 'click')
    }

    parseData = (fetchedData) => {
        // console.log("fetcheddata", fetchedData, "userId", this.state.currentUserId)
        let specificData = fetchedData.filter(item => item.userId === this.state.currentUserId)

        localStorage.setItem("usertododata" + this.state.currentUserId, JSON.stringify(specificData))
        
        this.setState({
            toDoData: specificData,
        })
        // console.log(this.state.toDoData)


        
    }

    handleCheckbox = (id, i) => {
        // console.log("checkbox")

        let newToDoArray = [...this.state.toDoData]

        let objectFromId = newToDoArray.find(element => element.id === id)

        // console.log(index)

        objectFromId.completed = !objectFromId.completed

        newToDoArray.splice(i, 1, objectFromId)

        // console.log("newdatachecked", newToDoArray, "find", objectFromId)

        localStorage.setItem("usertododata" + this.state.currentUserId, JSON.stringify(newToDoArray))

        this.setState({
            toDoData: newToDoArray
        })

        // console.log("state", this.state)
    }

    lol = (id, userId) => {
        console.log("target id",id)

        let y = 0

        const timer = setInterval(() => {
            if(y > 520){
                clearInterval(timer)
                return;
            }
            document.getElementById(id).style.left = y + "px";
            y ++;
            console.log("y:", y)
        }
        , 5)
        
        
        setTimeout(() => this.deleteToDo(id, userId), 3000)
    }

    deleteToDo = (id, userId) => {

        console.log("delete", id, userId)
        document.getElementById(id).style.left = 0
        const arr = [...this.state.toDoData]

        const newArray = arr.filter(item => item.id !== id)
        localStorage.setItem("usertododata" + userId, JSON.stringify(newArray))

        //var elementList = document.getElementsByClassName("toDoItem")
        //for(let x = 0; x< elementList.length; x++){
           // elementList[x].classList.remove("beGone")
        //}

        this.setState({
            toDoData: newArray
       })
    }

    openOrCloseAddToDo = (open, editNode, obj) =>{

        if(open === true){
            document.getElementById("tabs").style.overflowY = "hidden"
        } else {
           document.getElementById("tabs").style.overflowY = "auto"
        }

        if (editNode === "editNote"){
            this.setState({
                editNote: true,
                openAddToDo: open,
                selectedObj: obj,
                editTitle: obj.title
            })
        } else {
            this.setState({
                openAddToDo: open,
                editNote: false,
                selecteObj: {}
            })
        }


    }

    addToDo = (title, id) =>{

                console.log("MY ID: ", id)

                //copy array from state to change it, cause I cannot chage the state one 
                let arr = [...this.state.toDoData]

                //hack to change tabs div css to overflow auto
                document.getElementById("tabs").style.overflowY = "auto"

                //edit todo
                if(id > 0){
                    
                    for(let x =0 ;x<arr.length; x++){
                        if(arr[x].id === id){
                            arr[x].title = title
                            arr[x].completed = false
                        }
                    }

                //add new todo
                } else {
                    const obj = {
                        userId: this.state.currentUserId,
                        id: this.state.toDoData[this.state.toDoData.length - 1].id + 1,
                        title: title,
                        completed: false
                    }

                    arr.push(obj)
                }

                localStorage.setItem("usertododata" + this.state.currentUserId, JSON.stringify(arr))
               
                this.setState({
                    toDoData: arr,
                    openAddToDo: false
                })
                
                console.log(arr)
        
    }

    render() { 
        // className={this.state.openAddToDo ? "toDoDown" : "toDoUp"}
        return (  
            // <div className={classes.toDoContainer}>
            <React.Fragment>
                <div className="toDoHeader">
                    <h2> To Do List </h2>
                    <button>
                        <FontAwesome className="toDoAddButton" onClick={() => this.openOrCloseAddToDo(true)} name="plus" />
                        <FontAwesome className="toDoEditButton" onClick={() => this.setState({editable: !this.state.editable}, console.log("edit"))} name="pencil"/>
                    </button>
                </div>
                
                {this.state.openAddToDo &&
                <ToDoAdd closeoverlay={this.openOrCloseAddToDo} editNote={this.state.editNote} editObj={this.state.selectedObj} editTitle={this.state.editTitle}  addToDo={this.addToDo} />
                }

                {/* <div className={this.state.openAddToDo ? "toDoDownItems" : "toDoUpItems"}> */}
                    
                    {this.state.toDoData.map((obj, i) =>
                    <div className="toDoItem" id={obj.id} key={i}>
                        <div onClick={() => this.handleCheckbox(obj.id, i)} className={this.state.editable ? "edit" : "normal"}>
                            <p className={obj.completed === true ? "lineThrough" : null} contentEditable={this.state.editablee}>{obj.title}</p>
                        </div>
                        
                        <div className={this.state.editable ? "editt" : "normall"}>
                            <FontAwesome className="toDoDeleteButton" onClick={() => this.lol(obj.id, obj.userId)} name="trash"/>
                            <FontAwesome className="toDoEditButton" onClick={() => this.openOrCloseAddToDo(true, "editNote", obj)} name="pencil"/>
                        </div>
                        
                        <input readOnly type="checkbox" checked={obj.completed === true ? "checked" : ""}></input>
                    </div>
                    )}

                    
                {/* </div> */}
            {/* </div> */}
            </React.Fragment>
        );
    }
}
 
export default ToDo;