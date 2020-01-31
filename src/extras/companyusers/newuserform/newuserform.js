import React, {Component} from "react";

class NewUserForm  extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            newUserData: {
                cell: "",
                city: "",
                country: "",
                email: "",
                firstname: "",
                gender: "",
                id: "",
                lastname: "",
                number: "",
                phone: "",
                picture: "",
                postcode: "",
                state: "",
                street: "",
                title: ""
            },
        }
    }

    newUserData(name, value){

        let tempNewUserData = {...this.state.newUserData}

        tempNewUserData[name] = value
        tempNewUserData["id"] = "121215145451215"

        this.setState({
            newUserData: tempNewUserData

        })
    }

    randomAvatar(){
        // array of 10 avatar pics, loop through and get random value

        let avatarArray = ["https://robohash.org/40d20bd1a0cdadb7003c88ea9eccbc5f?set=set4&bgset=&size=200x200",
                           "https://robohash.org/6b89527d51c082cba845eff3821ccfe1?set=set4&bgset=&size=200x200",
                           "https://robohash.org/001896c9aff2c4577c98fb61a4f77ad9?set=set4&bgset=&size=200x200",
                           "https://robohash.org/61760a48d752876e299ea66c4f5ef02e?set=set4&bgset=&size=200x200",
                           "https://robohash.org/55714a10bee69e4881b213cda2db43be?set=set4&bgset=&size=200x200",
                           "https://robohash.org/5bf1b78d9f12327a84e1a7e5baa3b2c4?set=set4&bgset=&size=200x200",
                           "https://robohash.org/db34fbac9db8be1ba9ddb0d7215ac372?set=set4&bgset=&size=200x200",
                           "https://robohash.org/7af664776e4975942281c8f7e7a897cc?set=set4&bgset=&size=200x200"
                        ]

                        let chosenAvatar = avatarArray[Math.floor(Math.random()*avatarArray.length)]

                        this.setState({
                               avatar: chosenAvatar
                           })
    }

    render() { 

        const {onClose, submitForm} = this.props

        return ( 
            <div className="overlay">
                    <div className="full-profile-container">
                        <button className="new-user-button" onClick={onClose}>x</button>
                        {/* <img alt="click for random cat" src={this.state.avatar} onClick={() => this.randomAvatar()}></img> */}
                        
                        <div className="section-one">
                            <p className="form-p">Personal Info</p>

                            <select className={this.state.newUserData.title === "" ? "red" : ""} value={this.state.newUserData.title} name="title" onChange={(e) => this.newUserData(e.target.name, e.target.value)}>
                                <option name="title" value="Mr">Mr</option>
                                <option name="title" value="Mrs">Mrs</option>
                                <option name="title" value="Miss">Miss</option>
                                <option name="title" value="Mademoiselle">Mademoiselle</option>
                            </select>

                            <select className={this.state.newUserData.gender === "" ? "red" : ""} value={this.state.newUserData.gender} name="gender" onChange={(e) => this.newUserData(e.target.name, e.target.value)}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>

                            <input className={this.state.newUserData.firstname === "" ? "red" : ""} value={this.state.newUserData.firstname} type="text" name="firstname" placeholder="First Name" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                            <input className={this.state.newUserData.lastname === "" ? "red" : ""} value={this.state.newUserData.lastname} type="text" name="lastname" placeholder="Last Name" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                        </div>

                        <div className="section-two">
                            <p className="form-p">Location</p>

                            <input className={this.state.newUserData.street === "" ? "red" : ""} value={this.state.newUserData.street} type="text" name="street" placeholder="Street" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                            <input className={this.state.newUserData.number === "" ? "red" : ""} value={this.state.newUserData.number} type="text" name="number" placeholder="Number" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                            <input className={this.state.newUserData.city === "" ? "red" : ""} value={this.state.newUserData.city} type="text" name="city" placeholder="City" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                            <input className={this.state.newUserData.postcode === "" ? "red" : ""} value={this.state.newUserData.postcode} type="text" name="postcode" placeholder="Postcode" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                            <input className={this.state.newUserData.state === "" ? "red" : ""} value={this.state.newUserData.state} type="text" name="state" placeholder="State" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                            <input className={this.state.newUserData.country === "" ? "red" : ""} value={this.state.newUserData.country} type="text" name="country" placeholder="Country" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                        </div>

                        <div className="section-three">
                            <p className="form-p">Contact</p>
                            <input className={this.state.newUserData.phone === "" ? "red" : ""} value={this.state.newUserData.phone} type="text" name="phone" placeholder="Phone Number" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                            <input className={this.state.newUserData.cell === "" ? "red" : ""} value={this.state.newUserData.cell} type="text" name="cell" placeholder="Cellphone Number" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                            <input className={this.state.newUserData.email === "" ? "red" : ""} value={this.state.newUserData.email} type="text" name="email" placeholder="Email Adress" onChange={(e) => this.newUserData(e.target.name, e.target.value)}></input>
                        </div>

                        <button type="submit" className="new-user-submit"  onClick={submitForm}>Submit</button>

                    </div>
                    </div>
         );
    }
}
 
export default NewUserForm ;