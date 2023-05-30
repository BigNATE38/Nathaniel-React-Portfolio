import React from 'react';
import ProjectList from '../ProjectList';
import { Container, Row, Col } from 'react-bootstrap';
import horror from '../../images/horror.png';
import movie_mood from '../../images/movie_mood.png';
import noteTaker from '../../images/Note-Taker-Pic1.png';
import scheduler from '../../images/Scheduler_Pic.png';
import techBlog from '../../images/techblogdashboard.png'
import weather from '../../images/weather.png';

const Portfolio = () => (
<Container>
    <Row>
        
            <h1 className="portfolio-font">My Portfolio</h1>
            <Col md='4'>
                <ProjectList
                    name={'Movie Mood'}
                    image={movie_mood}
                    link={'https://corradoj02.github.io/Movie-Mood/'}
                    repo={'https://github.com/corradoj02/Movie-Mood'}
                />
            </Col>
            <Col md='4'>
                <ProjectList
                    name={'Work Scheduler'}
                    image={scheduler}
                    link={'https://bignate38.github.io/Work-Day-Scheduler-/'}
                    repo={'https://github.com/BigNATE38/Work-Day-Scheduler-'}
                />
            </Col>
            <Col md='4'>
                <ProjectList
                    name={'Note Taker'}
                    image={noteTaker}
                    link={'https://nathaniel-note-taker.herokuapp.com/'}
                    repo={'https://github.com/BigNATE38/Nathaniel-NoteTaker-Project'}
                />
            </Col>
            <Col md='4'>
                <ProjectList
                    name={'Weather App'}
                    image={weather}
                    link={'https://bignate38.github.io/Weather-Dashboard-Challenge/'}
                    repo={'https://github.com/BigNATE38/Weather-Dashboard-Challenge'}
                />
            </Col>
            <Col md='4'>
                <ProjectList
                    name={'House of Horrors'}
                    image={horror}
                    link={'https://dry-refuge-68933.herokuapp.com/login'}
                    repo={'https://github.com/Bentto90/Project-2-Group-4'}
                />
            </Col>
            <Col md='4'>
                <ProjectList
                    name={'The Tech Blog'}
                    image={techBlog}
                    link={'https://the-tech-news38.herokuapp.com/'}
                    repo={'https://github.com/BigNATE38/Nathaniel-Tech-Blog'}
                />
            </Col>
        
    </Row>
</Container>

);

export default Portfolio;

// Some of the projects deployed the heroku are not showing up because I had un-deploy them to have credits for other projects. After the program is over I will pay to have more credits.