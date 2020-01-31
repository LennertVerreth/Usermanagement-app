import React, {Component} from "react";
import classes from "./index.module.css";
import FontAwesome from "react-fontawesome";

import UserCard from "./userCard"
// import Profile from "./profile";
import Form from "./form"
import ToDo from "./toDo";
import Album from "./album";
import Messages from "./messages";

class UserManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            users : [],
            dictionary: [],
            tabsArray:  
                [
                    {name: "Profile", open: "openProfile", fontAwesome: "user"},
                    {name: "ToDo",open: "openToDo", fontAwesome: "check"},
                    {name: "Album", open: "openAlbum", fontAwesome: "picture-o"},
                    {name: "Messages", open: "openMessages", fontAwesome: "comment-o"},
                ],
            selectedUser: {},

            menTotal: 0,
            womenTotal: 0,
            totalTotal: 0,
            search: "",

            addUser: false,
            openSearch: false,
            openProfile: false,
            openToDo: false,
            ascButton: false,

            overlay: false,

            emptyForm: false,
        }
    }

    async componentDidMount(){
        await this.getUsers()
    }

    componentDidUpdate(prevProps, prevState){

        if(this.state.users !== prevState.users){
            if(this.state.users !== undefined && this.state.users.length > 0){
                this.getTotals()
            }
        }

    }

    async getUsers(){
        const users = localStorage.getItem('users')
        const dictionary = localStorage.getItem("dictionary")
        if(users !== undefined && users !== null){
            this.setState({
                users: JSON.parse(users),
                dictionary: JSON.parse(dictionary)
            })
        }else{
            console.log("fetch")
            await fetch("https://randomuser.me/api/?results=10")
            .then(response => response.json())
            .then(fetch => (
                    localStorage.setItem('users', JSON.stringify(fetch.results)),
                    this.setState({
                        users : fetch.results
                    }),
                    this.makeDictionary(fetch.results)
                )
            )
        }
    }

    makeDictionary = (data) => {

        console.log("uuid", data)
        let i;
        let arr = []
        for (i = 0; i < 10; i++) {
            let obj = {}
            obj["userId"] = i + 1
            obj["uuid"] = data[i].login.uuid

            arr.push(obj)
        }

        localStorage.setItem("dictionary", JSON.stringify(arr))

        this.setState({
            dictionary: arr
        })

    }

    getTotals(){
        const menTotal = this.state.users.filter(user => user.gender === "male")
        const womenTotal = this.state.users.filter(user => user.gender === "female")

        this.setState({
            menTotal: menTotal.length,
            womenTotal: womenTotal.length,
            totalTotal: this.state.users.length
        })
    }

    showUser = (x) => {
        console.log("showUser:", x)
        this.close()

        let toDoId = this.state.dictionary.filter(item => item.uuid === x).map(item => item.userId)[0]

        this.setState({
            selectedUser: this.state.users.find(user => user.login.uuid === x),
            overlay: true,
            openProfile: true,
            toDoId: toDoId,
            edit: false,
            emptyForm: false
            })
        }
    
    search = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    toggleSearch = () =>{
        this.setState({
            openSearch: !this.state.openSearch
        })
    }

    sortAsc = () => {
        const result = this.state.users.sort((a, b) => {
        let nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
            if(this.state.ascButton === false){
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            } else {
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            }
        })
        
        this.setState({
            users: result,
            ascButton: !this.state.ascButton
        })
    }

    submitData = (formObj, date) => {

        console.log("submitdatafunc", formObj, date)

        let tempArray = [...this.state.users]



        console.log(tempArray)

        // if(formObj.uuid !== 0){
        //     // niet gelijk aan 0 is aanpassen en dus geen nieuwe persoon
        //     for(let x = 0 ; x < tempArray.length ; x++){
        //         if(tempArray[x].login.uuid === formObj.uuid){
        //             //tempArray[x] is het object van de array dat we willen aanpassen, de specifieke USER persoon
        //             tempArray[x].picture.large = formObj.large
        //             tempArray[x].name.title = formObj.title
        //             tempArray[x].name.first = formObj.firstName
        //             tempArray[x].name.last = formObj.lastName
        //             tempArray[x].location.street.name = formObj.street
        //             tempArray[x].location.street.number = formObj.number
        //             tempArray[x].location.city = formObj.city
        //             tempArray[x].location.postCode = formObj.postCode
        //             tempArray[x].location.state = formObj.state
        //             tempArray[x].location.country = formObj.country
        //             tempArray[x].email = formObj.email
        //             tempArray[x].phone = formObj.phone
        //             tempArray[x].cell = formObj.cell
        //             tempArray[x].dob = date
        //             //datum nog juistmaken?
        //         } 
        //     }
        // } else {
        //     const usertest = {
        //         newuser: true,
        //         name: {
        //             title: formObj.title,
        //             first: formObj.firstName,
        //             last: formObj.lastName,
        //         },
        //         location:{
        //             street:{
        //                 number: formObj.number,
        //                 name: formObj.street
        //             },
        //             city: formObj.city,
        //             state: formObj.state,
        //             country: formObj.country,
        //             postcode: formObj.postCode
        //         },
        //         email: formObj.email,
        //         phone: formObj.phone,
        //         cell: formObj.cell,
        //         dob: {
        //             date: date
        //         },
        //         login: {
        //             uuid: Math.floor((Math.random()*10000000) +1),
        //         },
        //         picture: {
        //             large: formObj.large
        //         }
        //     }
        //     tempArray.push(usertest)
        // }

        this.setLocalStorage('users', tempArray)

        this.setState({
            users: tempArray
        })

        this.close()
    }

    setLocalStorage(localstorageKey, localStorageValue){

        localStorage.setItem(localstorageKey, JSON.stringify(localStorageValue))
    }

    delete = (e, objectid) =>{

        e.stopPropagation();

        let deleteArray = [...this.state.users]

        console.log(deleteArray.find(user => user.login.uuid === objectid))

        const isLargeNumber = (element) => element.login.uuid === objectid;

        const deleteIndex = (deleteArray.findIndex(isLargeNumber));

        deleteArray.splice(deleteIndex, 1)

        this.setLocalStorage('users',deleteArray)

        this.setState({
            users:deleteArray
        })

    }

    close = () => {

        this.setState({
            overlay: false,
            selectedUser: false,
            openAlbum: false,
            openMessages: false,
            openProfile: false,
            openToDo: false,
            addUser: false
        })
    }

    switchTabs = (data) => {

        this.setState({
            overlay: true,
        })

        const prevLi = document.getElementById(data).previousSibling
        const nextLi = document.getElementById(data).nextSibling
        const all = document.getElementsByClassName("innerDiv")

        all[0].classList.remove("innerDivRight", "innerDivLeft")
        all[1].classList.remove("innerDivRight", "innerDivLeft")
        all[2].classList.remove("innerDivRight", "innerDivLeft")
        all[3].classList.remove("innerDivRight", "innerDivLeft")

        switch (data) {
            case "Profile":

                nextLi.childNodes[0].childNodes[0].classList.add("innerDivRight")

                this.setState({
                    openProfile: true,
                    openToDo: false,
                    openAlbum: false,
                    openMessages: false,
                });

              break;
            case "ToDo":

                prevLi.childNodes[0].childNodes[0].classList.add("innerDivLeft")
                nextLi.childNodes[0].childNodes[0].classList.add("innerDivRight")
                
                this.setState({
                    openProfile: false,
                    openToDo: true,
                    openAlbum: false,
                    openMessages: false,
                });
              break;
            case "Album":

                prevLi.childNodes[0].childNodes[0].classList.add("innerDivLeft")
                nextLi.childNodes[0].childNodes[0].classList.add("innerDivRight")

                this.setState({
                    openProfile: false,
                    openToDo: false,
                    openAlbum: true,
                    openMessages: false,
                });
              break;
            case "Messages":

                prevLi.childNodes[0].childNodes[0].classList.add("innerDivLeft")

                this.setState({
                    openProfile: false,
                    openToDo: false,
                    openAlbum: false,
                    openMessages: true,
                });
              break;
          }
    }

    render() { 

        return (  

            <div className={classes.root}>
                <h1>User Management</h1>
                <div className={classes.totalDiv}>
                    <div className={classes.box3}><h2>Men</h2><p>{this.state.menTotal}</p></div>
                    <div className={classes.box3}><h2>Women</h2><p>{this.state.womenTotal}</p></div>
                    <div className={classes.box3}><h2>Total</h2><p>{this.state.totalTotal}</p></div>
                </div>
                
                <div className={classes.nav}>
                    <div>
                        <button onClick={this.toggleSearch} className={classes.searchButton} title="search">
                            <FontAwesome name="search"/>
                        </button>
                        <input type="text" className={this.state.openSearch ? "animatedInput open" : "animatedInput close"} placeholder="search" autoFocus="autofocus" onChange={(e) => this.search(e)}/>
                    </div>
                    <div id="navButton" className={this.state.openSearch ? "animatedButtons closee" : "animatedButtons openn"}>
                        <button onClick={() => this.sortAsc()}>
                            <div className={classes.ascBtn} >
                                <FontAwesome name={this.state.ascButton ? "long-arrow-down" : "long-arrow-up"}/>
                                {this.state.ascButton ?(
                                    <p>A<br/>Z</p>
                                ):(
                                    <p>Z<br/>A</p>
                                )}
                            </div>
                            

                        </button>
                    </div>
                    <div className={this.state.openSearch ? "animatedButtons closee" : "animatedButtons openn"}>
                        {/* <button onClick={() => this.setState({addUser: !this.state.addUser, selectedUser: false, overlay: false})}><FontAwesome name="plus"/></button> */}
                        <button onClick={() => this.setState({overlay: true, openProfile: true, edit: true, emptyForm: true})}><FontAwesome name="plus"/></button>
                    </div>
                </div>

                <div className={classes.userBox}>
                    
                    <div className={classes.left}>

                        <React.Fragment>
                            {this.state.users !== undefined && this.state.users.map((obj, i) => 
                                this.state.search !== "" && obj.name.first.toLowerCase().includes(this.state.search.toLowerCase()) ?
                                    <UserCard delete={(e) => this.delete(e, obj.login.uuid)} key={i} found={true} object={obj} showUser={this.showUser} />
                                :
                                    <UserCard delete={(e) => this.delete(e, obj.login.uuid)} key={i} found={false} object={obj} showUser={this.showUser} />
                            )}
                        </React.Fragment>
                        
                    </div>

                        {this.state.overlay &&

                                <div id="tabs" className={classes.tabs}>

                                    <div className={classes.tabButtonsContainer}>

                                        <button  className={classes.closeButton} onClick={() => this.close()}><FontAwesome name="times"/></button>
                                        
                                        <ul className="tabsUl">

                                            {this.state.tabsArray.map((obj, i) =>
                                            <li
                                                key={i}
                                                id={obj.name}
                                                className={this.state[obj.open] === true ?  "activeTab btn" : "btn"}  
                                                onClick={() => this.switchTabs(obj.name)}
                                            >
                                                <div className={"outerDiv"}>
                                                    <div className={"innerDiv"}><FontAwesome name={obj.fontAwesome}/></div>
                                                </div>
                                            </li>
                                            )}

                                        </ul>
                                    </div>

                                    <div className={classes.tabsContent}>

                                    {/*Object.keys(this.state.selectedUser).length !== 0 &&*/ this.state.openProfile === true && 
                                        <Form emptyForm={this.state.emptyForm} edit={this.state.edit} submitData={this.submitData} selectedUser={this.state.selectedUser}/>
                                    }

                                    {this.state.openToDo &&
                                        <ToDo userId={this.state.toDoId}  />
                                    }

                                    {this.state.openAlbum &&
                                        <Album />
                                    }

                                    {this.state.openMessages &&
                                        <Messages />
                                    }

                                    </div>

                                </div>
                                
                        }
                </div>
            </div>
        );
    }
}
 
export default UserManagement;
