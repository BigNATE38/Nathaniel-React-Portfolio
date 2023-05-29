import React from 'react';

export default function Contact() {
    return (
        <div>
             <form className="edit-post-form post-card-position">
        <div class="card post-card-size">
            <h3 className="post-card-new">Contact</h3>
            <div className="card-body">
                <h5>Name</h5>
                <input className="title-name" type="text" id="new-post-title" name="new-post-title" />
                <div className="content-space">
                <h5>Email</h5>
                </div>
                <input className="title-name" type="text" id="new-post-title" name="new-post-title"/>
                <div className="content-space">
                    <h5>Message</h5>
                    <textarea className="content-len" id="new-comment-body" name="new-comment-body"></textarea>
                </div>
            </div>
            <div className="card-body">
                <button type="submit" class="btn btn-secondary">Send</button>
            </div>
        </div>
    </form> 

        </div>
    )
}