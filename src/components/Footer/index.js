import React from 'react';
import github from '../../images/github-mark.png'
import gmail from '../../images/Gmail_Logo_512px.png'
import linkdn from '../../images/LI-In-Bug.png'

export default function Footer() {
    return (
        <footer>
            <div>
                <h3>Contact Me</h3>
                <div className="logosAll">
                    <a target='_blank' rel='noreferrer' href="https://github.com/BigNATE38">
                        <img className="logos" src={github} alt="github" />
                    </a>
                    <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/">
                        <img className="logos" src={linkdn} alt="linkdn" />
                    </a>
                    <a target='_blank' rel='noreferrer' href="mailto:natevandy38@gmail.com">
                        <img className="logos" src={gmail} alt="gmail" />
                    </a>
                </div>

                <h4>natevandy38@gmail.com</h4>
                
                <div class="post-btn">
                    <a target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/11quq12TFp8mUKzxwyiEdCyRVFLlk5t6C/view?usp=sharing" className="btn btn-secondary btn-lg">My Resume</a>
                </div>
            </div>
        </footer>
    )
}