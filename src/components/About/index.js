import React from 'react';
import headshot from '../../images/headshot.jpg'

export default function About() {
    return(
    <div>
        <section id="about-me">
            <div>
                <h2 className="row">About Me</h2>
                <img className="profile-pic" src={headshot} alt="me" />
            </div>

            <div>
                <h3 className="row">Full Stack Web Developer</h3>
                <p className="aboutMeP row">My name might be Nathaniel, but my friends call me Nate. Now that we're friends, let me tell you more about myself. I'm a film major that has worked on a few shows including Mayans M.C. and Barry. However, I decided to change careers and receive a certificate in full stack web-development. I believe the through line in both of my career choices is that I love finding creative solutions to problem solve. What else can I share about myself?  Oh yeah, I also worked at Chronic Taco as a tortilla runner. So, if you hired me I can also make some elite tortillas on the spot.</p>
            </div>
        </section>
    </div>
    );
}