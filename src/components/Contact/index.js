import React, {useState} from 'react';
import { validEmail, validUser, validMessage  } from '../../utils/helpers';

export default function Contact() {

    const [errMessage, setErrMessage] = useState('');

    const secureValidation = (event) => {
        if (event.target.name === "name") {
            if (!validUser(event.target.value)) {
            setErrMessage("Enter valid name");
            } else {
                setErrMessage("");
            }
        }
        if (event.target.name === "email") {
            if (!validEmail(event.target.value)) {
                setErrMessage("Enter valid email");
            } else {
                setErrMessage("");
            }
        }
        if (event.target.name === "message") {
            if (!validMessage(event.target.value)) {
                setErrMessage("Enter valid message");
            } else {
                setErrMessage("");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(errMessage === ""){

        }
    }
    return (
        <div>
             <form className="edit-post-form post-card-position" onSubmit={handleSubmit}>
        <div class="card post-card-size">
            <h3 className="post-card-new">Contact</h3>
            <div className="card-body">
                <h5>Name</h5>
                <input className="title-name" type="text" id="new-post-title" name="name" onBlur={secureValidation}></input>
                <div className="content-space">
                <h5>Email</h5>
                </div>
                <input className="title-name" type="text" id="new-post-title" name="email" onBlur={secureValidation}></input>
                <div className="content-space">
                    <h5>Message</h5>
                    <textarea className="content-len" id="new-comment-body" name="message" onBlur={secureValidation}></textarea>
                </div>
            </div>
            <div className="card-body">
                <button type="submit" class="btn btn-secondary">Send</button>
            </div>
        </div>
    </form> 
    {errMessage && <p className='the-error'>{errMessage}</p>}

        </div>
    )
}