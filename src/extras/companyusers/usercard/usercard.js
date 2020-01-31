import React, {Component} from "react";
import FontAwesome from "react-fontawesome";

class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            // showFullProfile: false,
            showUserCard: true,

        }
    }

    toggleDelete = () => {
        this.setState({
            showUserCard: !this.state.showUserCard
        })
    }


    render() {

        const { object, parentState} = this.props

        return ( 
            
                <div className="user-cards">

                    {parentState.showDeleteButton === true &&
                        <span className="delete-button" onClick={() => this.toggleDelete()}><FontAwesome name="trash"/></span>
                    }

                    <img src={object.picture} alt="picca"></img> 

                    {this.state.showUserCard === true ?
                        <React.Fragment>
                            <h3>{object.lastname}</h3>
                            <h3>{object.firstname}</h3>
                            <button className="button-user-card" onClick={this.props.fullProfile}>Full Profile</button>
                        </React.Fragment>
                    :
                        <div>
                            <p>are you sure</p>
                            <button onClick={this.props.deleteYes}>Yes</button>
                            <button onClick={() => this.toggleDelete()}>No</button>
                        </div>
                    }

                </div>
         );
    }
}
 
export default UserCard;