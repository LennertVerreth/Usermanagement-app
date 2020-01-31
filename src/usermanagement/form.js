import React, { Component} from "react";
import classes from "./index.module.css";
import FontAwesome from "react-fontawesome";
import upload from "../img/upload1.jpg"
import FormInput from "./formInput";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedUser: null,
            startDate: new Date(),
            edit: false,
         }
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){

            if(this.props.emptyForm){
                this.reset()
                this.setState({
                    edit: true
                })
            }else{
                this.setState({
                    selectedUser: this.props.selectedUser,
                    edit: false
                })
            }
        }
    }

    componentDidMount () {

        console.log("props:",this.props)

        if(this.state.selectedUser !== null){
            const filer = document.getElementById("upload-file")
            filer.addEventListener("change", (e) => this.getImage(e))
        }
        

        // for css tabs 
        document.getElementById("ToDo").childNodes[0].childNodes[0].classList.add("innerDivRight")

        this.setState({
            edit: this.props.edit
        })

        if(this.props.emptyForm !== true)
        this.setState({
            selectedUser: this.props.selectedUser
        })
    }

    reset(){
        console.log("reset")
        this.setState({
            selectedUser:{
                name: {
                    title: "",
                    first: "",
                    last: "",
                },
                location:{
                    street:{
                        number: "",
                        name: ""
                    },
                    city: "",
                    state: "",
                    country: "",
                    postcode: ""
                },
                email: "",
                phone: "",
                cell: "",
                dob: {
                    date: ""
                },
                login: {
                    uuid: "0",
                },
                picture: {
                    large: ""
                }
            }
        })
    }

    getImage = (e) => {
        
        var file = e.target.files[0]
 
        const _this = this
 
        var reader = new FileReader();
 
         reader.onloadend = () => {
             const data = _this.state.newUserData
               _this.setState ({
               newUserData: {
                   ...data,
                   large: reader.result,
             }
            })
         }
         reader.readAsDataURL(file)
    }

    newUserData(name, value){

        let editData = {...this.state.selectedUser}

        switch (name) {
            case "large":
                editData.name.title = value
            break;
            case "title":
                editData.name.title = value
            break;
            case "firstName":
                editData.name.first = value
            break;
            case "lastName":
                editData.name.last = value
            break;
            // case "title":
            // date!!
            //     editData.name.title = value
            // break;
            case "street":
                editData.location.street.name = value
            break;
            case "number":
                editData.location.street.number = value
            break;
            case "city":
                editData.location.city = value
            break;
            case "postCode":
                editData.location.postcode = value
            break;
            case "state":
                editData.location.state = value
            break;
            case "country":
                editData.location.country = value
            break;
            case "email":
                editData.email = value
            break;
            case "phone":
                editData.phone = value
            break;
            case "cell":
                editData.cell = value
            break;
            // default??
        }

          this.setState({
            selectedUser: editData
          })   

        // errorhandler

        let whatError = `${name} Error`
        //let whatError = name + "Error"    ----- both do the same -----

        if(value !== ""){
            this.setState({
                [whatError]: false
            })
        }     
    }

    sendData(newUserData, date){

        this.validate()

        // als error object leeg is send data

        if(newUserData.firstName && newUserData.lastName && newUserData.email && newUserData.large !== "" ){
            this.props.editData(newUserData, date)
            // console.log(this.props)

        } 
    }

    validate = () => {

        var object = this.state.selectedUser

        for(var key in object)
            if(object[key] === ""){
                let concat = key + "Error"
                this.setState({
                    [concat]: true
                })
            }
    }

    clickFile = () => {
        const filer = document.getElementById("upload-file")
        filer.click()
    }

    handleChange = date => {

        this.setState({
          startDate: date
        })

    }

    render() { 

        return (  

            <div className={classes.form}>

                

                {/* <Form selectedUser={this.props.selectedUser} editData={this.props.submitData} edit={this.state.edit}/> */}

                {/* <span className={classes.closeButton} onClick={this.props.close}><FontAwesome name="times"/></span> */}

                {/* picture */}

                {this.state.selectedUser !== null &&

                    <React.Fragment>

                        <div className={classes.profileHeader}>
                            <h2>Full User Profile</h2>
                            {this.props.selectedUser !== false &&
                                <button><FontAwesome onClick={() => this.setState({edit: !this.state.edit})} name="pencil"/></button>
                            }
                        </div>

                        <div className={classes.uploadContainer}>
                            <img src={this.state.selectedUser.picture.large === "" ? upload : this.state.selectedUser.picture.large} 
                                alt="upload here" 
                                className={this.state.largeError ? classes.redUploadDisplay : classes.uploadDisplay} 
                                onClick={this.clickFile}>
                            </img>
                            <input  id="upload-file" type="file" style={{display:"none"}}/>
                        </div>

                        <div className={classes.personalInformation}>
                            <h2>Personal Information</h2>
                            <label className={classes.label}>Title</label>

                            {this.state.edit === false ?
                                <div>{this.state.selectedUser.name.title}</div>
                            :
                                <div >
                                    <select value={this.state.selectedUser.name.title} className={this.state.error ? classes.redInput : classes.input} onChange={(e) => this.newUserData(e.target.name, e.target.value)} name="title">
                                        <option className={classes.option} value="0">Make your choice</option>

                                        <option className={classes.option} value="Ms">Ms</option>
                                        <option className={classes.option} value="Mrs">Mrs</option>
                                        <option className={classes.option} value="Miss">Miss</option>
                                        <option className={classes.option} value="Madame">Madame</option>
                                        <option className={classes.option} value="Mr">Mr</option>
                                    </select>
                                </div>
                            }

                            <FormInput
                                edit={this.state.edit}
                                error={this.state.firstNameError}
                                name="firstName"
                                placeholder="First Name" 
                                value={this.state.selectedUser.name.first}
                                newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                            />

                            <FormInput 
                                edit={this.state.edit}
                                error={this.state.lastNameError}
                                name="lastName" 
                                placeholder="Last Name"
                                value={this.state.selectedUser.name.last}
                                newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                            />

                            {this.state.edit === false ? ( //if this heppens
                                <div>{"tobeingevuld"}</div>
                            ) : ( //else do this
                                <div>
                                    <label className={classes.label} htmlFor="dob"> Day Of Birth {this.state.dobError && "*"} </label>
                                    <DatePicker dateFormat={"dd/MM/yyyy"} locale="nl"  selected={this.state.startDate} onChange={this.handleChange} />
                                </div>
                            )}

                        </div>

                        <div className={classes.location}>

                            <h2>Location</h2>

                            <div style={{display: "flex", justifyContent:"space-between"}}>
                                <FormInput 
                                    edit={this.state.edit}
                                    error={this.state.streetError}
                                    name="street"
                                    placeholder="Street"
                                    value={this.state.selectedUser.location.street.name}
                                    newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                                />
                                <FormInput 
                                    edit={this.state.edit}
                                    error={this.state.numberError}
                                    name="number"
                                    placeholder="Number" 
                                    value={this.state.selectedUser.location.street.number}
                                    newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                                />
                            </div>

                            <div style={{display: "flex", justifyContent:"space-between"}}>
                                <FormInput 
                                    edit={this.state.edit}
                                    error={this.state.cityError}
                                    name="city" 
                                    placeholder="City" 
                                    value={this.state.selectedUser.location.city}
                                    newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                                />
                                <FormInput 
                                    edit={this.state.edit}
                                    error={this.state.postCodeError}
                                    name="postCode" 
                                    placeholder="Postcode"
                                    value={this.state.selectedUser.location.postcode}
                                    newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                                />
                            </div>

                            <FormInput 
                                edit={this.state.edit}
                                error={this.state.stateError}
                                name="state" 
                                placeholder="State"
                                value={this.state.selectedUser.location.state}
                                newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                            />
                            <FormInput 
                                edit={this.state.edit}
                                error={this.state.countryError}
                                name="country" 
                                placeholder="Country" 
                                value={this.state.selectedUser.location.country}
                                newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                            />
                        </div>

                        <div className={classes.contactInformation}>

                            <h2>Contact Information</h2>

                            <FormInput 
                                edit={this.state.edit}
                                error={this.state.emailError}
                                name="email"
                                placeholder="Email"
                                value={this.state.selectedUser.email}
                                newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                            />
                            <FormInput 
                                edit={this.state.edit}
                                error={this.state.phoneError}
                                name="phone" 
                                placeholder="Phone"
                                value={this.state.selectedUser.phone}
                                newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                            />
                            <FormInput 
                                edit={this.state.edit}
                                error={this.state.cellError}
                                name="cell"
                                placeholder="Cellphone" 
                                value={this.state.selectedUser.cell}
                                newUserData={(e) => this.newUserData(e.target.name, e.target.value)}
                            />
                        </div>
                        <div>
                            {this.state.firstNameError || this.state.lastNameError || this.state.dobError || this.state.largeError === true &&
                                <p>*needs to be filled in</p>
                            }

                            {this.state.edit &&
                                <p className={classes.submitButton} onClick={() => this.sendData(this.state.selectedUser, this.state.startDate)}> Submit </p>
                            }
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}
 
export default Form;