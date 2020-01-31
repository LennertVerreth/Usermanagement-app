import React, {Component} from "react";
import contact from "./contact.module.css"

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={contact.container}>

                <div className={contact.blurContainer}>

                <form className={contact.form}> 
                    <label className={contact.label}>Email</label>
                    <input className={contact.email} type="email" placeholder="Email" />
                    <label className={contact.label}>Message</label>
                    <input className={contact.text} type="text" placeholder="Tell me something nice" />
                    <input className={contact.submit} type="submit"/>
                </form>
                </div>
            </div>
         );
    }
}
 
export default Contact;