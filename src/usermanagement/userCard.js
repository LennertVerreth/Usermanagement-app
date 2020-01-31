import React, {Component, useState} from "react";
import classes from "./index.module.css";
import FontAwesome from "react-fontawesome";

/////CLASS COMPONENT

class UserCard extends Component {

    getUser = (id) => {
        this.props.showUser(id)
    }

    render() { 

        const object = this.props.object

        return ( 

            <div style={{border: this.props.found ? "solid 1px red": "none"}} className={classes.userCard} onClick={() => this.getUser(object.login.uuid)}>
                <div className={classes.cardImage}>
                    <img alt="image" src={object.picture === undefined ? "" : object.picture.large} />
                </div>
                <div className={classes.cardInfo}>
                    <span>{object.name.title}</span>
                    <p>{object.name.first}</p>
                    <p>{object.name.last}</p>
                </div>

                {this.props.object.newuser &&

                <div className={classes.trashCan} onClick={this.props.delete}>
                    <FontAwesome name="trash"/>
                </div>

                }
            </div>
         );
    }
}
 
export default UserCard;

/*
///FUNCTIONAL COMPONENT

const UserCard = (props) => {
    const [count, setCount] = useState(0);

    const getUser = (id) => {
        props.showUser(id)
    }

    const object = props.object

    return ( 
        <div style={{border: props.found ? "solid 1px red": "none"}} className={classes.userCard} onClick={() => getUser(object.login.uuid)}>
            <div className={classes.cardImage}>
                <img alt="image" src={object.picture.large} />
            </div>
            <div className={classes.cardInfo}>
                <span>{object.name.title}</span>
                <p>{object.name.first}</p>
                <p>{object.name.last}</p>
            </div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
}

*/
