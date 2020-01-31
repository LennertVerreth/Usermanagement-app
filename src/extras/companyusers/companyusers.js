import React, {Component} from "react";
import "./companyusers.css"
import FontAwesome from "react-fontawesome";
import FullProfile from "./fullprofile/fullprofile";
import NewUserForm from "./newuserform/newuserform";
import UserCard from "./usercard/usercard";

class CompanyUsers  extends Component {
    constructor(props) {
        super(props);
        this.state = {
// visibility items
            showFullProfile: false,
            showAddNewUser: false,
            showMainNavbar: true,
            showAdressNavbar: false,
            showSearchNavbar: false,
            showDeleteButton: false,
            showUserCard: true,
            showAddNewUser: false,

// belangrijke data

            usersArray: [],
        }
    }

    async componentDidMount(){
          await       fetch("https://randomuser.me/api/?results=10")
                .then(response => response.json())
                .then(fetch => this.parseData(fetch))

                console.log("mounteuh")


        console.log(this.state.usersArray)
        const result_male = this.state.usersArray.filter(user => user.gender === "male");
        const result_fem = this.state.usersArray.filter(user => user.gender === "female");

        console.log("MALE: ", result_male.length)
        console.log("FEMALE: ", result_fem.length)
    }

    parseData(fetch){
        let fetchToArray = fetch.results

        let neededData = fetchToArray.map(object => {
            let neededObjectData = {};

            neededObjectData.gender = object.gender
            neededObjectData.title = object.name.title
            neededObjectData.firstname = object.name.first
            neededObjectData.lastname = object.name.last

            neededObjectData.street = object.location.street.name
            neededObjectData.number = object.location.street.number
            neededObjectData.city = object.location.city
            neededObjectData.postcode = object.location.postcode
            neededObjectData.state = object.location.state
            neededObjectData.country = object.location.country


            neededObjectData.phone = object.phone
            neededObjectData.cell = object.cell
            neededObjectData.email = object.email

            neededObjectData.picture = object.picture.large

            neededObjectData.id = object.login.uuid

            return neededObjectData
        })

        this.setState({
            usersArray: neededData,
            resetArray: neededData
        })

        let newObject = this.state.usersArray.reduce(function(obj, value) {
            var key = `${value.gender}`;
            if (obj[key] == null) obj[key] = [];
          
            obj[key].push(value);
            return obj;
          },{});

          let maleArray = newObject.male
          let femaleArray = newObject.female

        this.setState({
            maleArray: maleArray,
            femaleArray: femaleArray
        })
    }

    componentDidUpdate(prevProps, prevState){
        //console.log("update", this.state)
    //     if (prevState.showAddNewUser !== this.state.showAddNewUser){
    //         let newObject = this.state.usersArray.reduce(function(obj, value) {
    //             var key = `${value.gender}`;
    //             if (obj[key] == null) obj[key] = [];
              
    //             obj[key].push(value);
    //             return obj;
    //           },{});
    
    //           let maleArray = newObject.male
    //           let femaleArray = newObject.female
    
    //         this.setState({
    //             maleArray: maleArray,
    //             femaleArray: femaleArray
    //         })
    //     }


        console.log("update", this.state)

     }

    openFullProfile = (object) => {
        this.setState({
            id: object.id,
            showFullProfile: true
        })
    }

    closeFullProfile(){

        this.setState({
            showFullProfile: false,
            showAddNewUser: false
        })
    }

    openAddNewUser(){
        this.setState({
            showAddNewUser: true
        })
    }

    // newUserData(name, value){
    //     let tempNewUserData = {...this.state.newUserData}

    //     tempNewUserData[name] = value
    //     tempNewUserData["id"] = "121215145451215"

    //     this.setState({
    //         newUserData: tempNewUserData

    //     })
    // }

    submitNewUserData = (x) =>{
        console.log(x)

        let tempNewUserData = {...this.state.newUserData}

        tempNewUserData.picture = this.state.avatar

        let tempUserArray = [...this.state.usersArray]

        tempUserArray.push(tempNewUserData)

        if (Object.values(tempNewUserData).includes("") !== true){

        this.setState({
            usersArray: tempUserArray,
            resetArray: tempUserArray,
            showAddNewUser: false,
        })

        }
    }

    showBar(x){
        this.setState({
            showAdressNavbar: x === "address" ? true : this.state.showAdressNavbar,
            showSearchNavbar: x === " nav" ? true : this.state.showSearchNavbar,
            showMainNavbar: false
        })
    }

    goBackToMainNavbar(){
        this.setState({
            showAdressNavbar: false,
            showSearchNavbar: false,
            showMainNavbar: true,
            showDeleteButton: false,
            showUserCard: true,
            usersArray: this.state.resetArray

        })
    }

    openDeleteButton(){
        this.setState({
            showDeleteButton: true
        })
    }

    delete(x){
        if(x === "yesNo"){
            this.setState({
                // toBeDeleted: x,
                showUserCard: false,
                showDeleteButton: false
            })
        }else{
            this.setState({
                showUserCard: true,
            })
        }
    }

    deleteYes(id){
        
        console.log(id)

        let spliceArray = [...this.state.usersArray]

        for( let i = 0; i < spliceArray.length; i++){ 
            if (spliceArray[i].id === id) {
                spliceArray.splice(i, 1); 
            }
         }

        this.setState({
            usersArray: spliceArray,
            showUserCard: true
        })
        
    }

   

    filterMen(){
          this.setState({
              usersArray: this.state.maleArray
          })
    }

    filterWomen(){
        this.setState({
            usersArray: this.state.femaleArray
        })
    }

    render() { 
        return (  
            <React.Fragment>

{/* add new user  */}
                    {this.state.showAddNewUser === true &&
                        <NewUserForm 
                            submitForm={() => this.submitNewUserData()}  
                            onClose={() => this.closeFullProfile()}
                        />
                    }

{/* User cards full profile popup  */}
                    {this.state.showFullProfile === true &&
                        this.state.usersArray.map(object =>
                            object.id === this.state.id &&
                                <FullProfile 
                                    key={object.id} 
                                    object={object} 
                                    onClose={() => this.closeFullProfile()} 
                                />
                        )
                    }


{/* main app container  */}
                <div className="container">

{/* header  */}
                    <div className="header">
                        <p className="header-p">Welcome to Lennerts Users</p>
                    </div>

{/* navbar  */}
                    {this.state.showMainNavbar === true &&
                        <div className="navbar">
                            <span className="navbar-buttons" onClick={() => this.showBar("address")}><FontAwesome name="address-book"/></span>
                            <span className="navbar-buttons" onClick={() => this.showBar("nav")}><FontAwesome name="search"/></span>
                        </div>
                    }

                    {this.state.showAdressNavbar === true &&
                        <div className="navbar">
                            <span className="navbar-button-back" onClick={() => this.goBackToMainNavbar()}><FontAwesome name="arrow-left"/></span>
                            <span className="navbar-buttons" onClick={() => this.openAddNewUser()}><FontAwesome name="plus"/></span>
                            <span className="navbar-buttons" onClick={() => this.openDeleteButton()}><FontAwesome name="minus"/></span>
                        </div>
                    }

                    {this.state.showSearchNavbar === true &&
                        <div className="navbar">
                            <span className="navbar-button-back" onClick={() => this.goBackToMainNavbar()}><FontAwesome name="arrow-left"/></span>
                            <input type="text" placeholder="Search" size="5"></input>
                            <div className="men-woman-button" onClick={() => this.filterMen()}><div className="navbar-word">Men</div> <div className='navbar-number'>{this.state.maleArray.length}</div></div>
                            <div className="men-woman-button" onClick={() => this.filterWomen()}><div className="navbar-word">Women</div><div className='navbar-number'>{this.state.femaleArray.length}</div></div>
                        </div>
                    }

{/* user cards  */}

                    <div className="user-cards-container">
                        {this.state.usersArray.map(object => 

                            <UserCard
                            
                                key={object.id}
                                object = {object}

                                parentState={this.state}

                                deleteUserYesNo = {() => this.delete("yesNo")}
                                deleteYes = {() => this.deleteYes(object.id)}
                                deleteNo = {() => this.delete()}

                                fullProfile = {() => this.openFullProfile(object)}

                            />
                        )}
                    </div>

                </div>
            </React.Fragment>
        );
    }
}
 
export default CompanyUsers ;