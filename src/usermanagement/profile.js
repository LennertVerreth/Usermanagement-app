import React, {Component} from "react";
import classes from "./index.module.css";
import FontAwesome from "react-fontawesome";
import Form from "./form"

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            edit: false,
         }
    }

    componentDidMount(){
        if(this.props.selectedUser === false){
            this.setState({edit: true})
        }
        document.getElementById("ToDo").childNodes[0].childNodes[0].classList.add("innerDivRight")
    }

    

    render() { 

        // const myDate = new Date(this.props.user.dob.date)

        return ( 
            <React.Fragment>

                <div className={classes.profileHeader}>
                    <h2>Full User Profile</h2>
                    {this.props.user !== false &&
                    <button><FontAwesome onClick={() => this.setState({edit: !this.state.edit})} name="pencil"/></button>
                    }
                </div>

                <Form selectedUser={this.props.selectedUser} editData={this.props.submitData} edit={this.state.edit}/>

                {/* <div className={classes.profileImg}>
                    <img alt="" src={this.props.user.picture === undefined ? "" : this.props.user.picture.large}/>
                </div>

                <p>Personal Information</p>

                    <div>{this.props.user.name.title}</div>
                    
                    <div>{this.props.user.name.first}</div>

                    <div>{this.props.user.name.last}</div>

                    <div>{myDate.toLocaleDateString("nl-BE")}</div>

                <p>Location</p>

                {this.props.user.location !== undefined &&

                    <React.Fragment>
                        <div>{this.props.user.location.street.number}</div>
                        <div>{this.props.user.location.street.name}</div>
                        <div>{this.props.user.location.postcode}</div>
                        <div>{this.props.user.location.city}</div>
                        <div>{this.props.user.location.state}</div>
                        <div>{this.props.user.location.country}</div>
                    </React.Fragment>
                }

                <p>Contact Information</p>

                <React.Fragment>
                    <div>{this.props.user.email === undefined ? "" : this.props.user.email}</div>
                    <div>{this.props.user.cell === undefined ? "" : this.props.user.cell}</div>
                    <div>{this.props.user.phone === undefined ? "" : this.props.user.phone}</div>
                </React.Fragment>
                */}

            </React.Fragment> 
         );
    }
}
 
export default Profile;