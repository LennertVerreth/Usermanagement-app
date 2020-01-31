import React, {Component} from "react";

class FullProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  

            
        }
    }
    render() { 

        const {object, onClose} = this.props

        return ( 
            <div className="overlay">
                <div className="full-profile-container">
                    <button onClick={onClose}>x</button>
                    <img alt="profilepic"src={object.picture}></img>
                    <h3>Personal info</h3>
                    <p>{object.gender}</p>
                    <p>{object.title}</p>
                    <p>{object.firstname}</p>
                    <p>{object.lastname}</p>
                    <h3>Location</h3>
                    <p>{object.street}</p>
                    <p>{object.number}</p>
                    <p>{object.city}</p>
                    <p>{object.postcode}</p>
                    <p>{object.state}</p>
                    <p>{object.country}</p>
                    <h3>Contact</h3>
                    <p>{object.phone}</p>
                    <p>{object.cell}</p>
                    <p>{object.email}</p>
                </div>
            </div>
         );
    }
}
 
export default FullProfile ;