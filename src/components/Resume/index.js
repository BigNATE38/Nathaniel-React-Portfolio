import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJsSquare,
    FaNode,
    FaReact,
} from "react-icons/fa";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";

export default function Resume() {
    return (
        <Row>
            <Row>
                <h1 className="portfolio-font">Resume</h1>
            </Row>
        
            <Col md={4} className="text-center">
                <br />
                <h2>Front End</h2>
                <p>
                    HTML5 <FaHtml5 />
                    <br />
                    <br />
                    CSS3 <FaCss3Alt />
                    <br />
                    <br />
                    JavaScript <FaJsSquare />
                    <br />
                    <br />
                    jQuery <DiJqueryLogo />
                    <br />
                    <br />
                    React.js <FaReact />
                    <br />
                    <br />
                    Bootstrap, Bulma, React UI <FaBootstrap />
                </p>
            </Col>

            <Col md={4} className="text-center">
                <br />
                <h2>Database</h2>
                <p>
                    MySQL <SiMysql />
                    <br />
                    <br />
                    MongoDB <DiMongodb />
                </p>
            </Col>

            <Col md={4} className="text-center">
                <br />
                <h2>Back End</h2>
                <p>
                    Node <FaNode />
                    <br />
                    <br />
                    Express.js, Express-handlebars
                    <br />
                    <br />
                    Sequelize <SiMysql />
                    <br />
                    <br />
                    Mongoose <DiMongodb />
                </p>
            </Col>


        </Row>
    );
}

// All of the icons on this page are from a react package called react-icons