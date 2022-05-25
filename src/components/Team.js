import React from "react";
import { Form, Button, Container, Row, Col, Tab, Tabs } from "react-bootstrap";
// import "../css/Home.css";
// import token from "../img/spirit_token.png";
import Image from "react-bootstrap/Image";

const Team = () => {
    return (
        <Container className="box my-auto">
            <Row>
                <h1>BEHIND THE SCENCE</h1>
                <h2>Creative, Innovative, and</h2>
                <h2>Passionate Humans</h2>
            </Row>
            <Row>
                <Tabs defaultActiveKey="Team Officers" className="Teams-Tab">
                    <Tab
                        eventKey="Team Officers"
                        title="Team Officers"
                        className="Team-Tab-1"
                    ></Tab>
                    <Tab eventKey="Mentors" title="Mentors" className="Mentors-Tab-1">
                        <div>
                            <h1> RISE Team Mentors </h1>
                            <p>
                                All mentors have their own beat and expertise, ranging from
                                Medical to ArgiTech to Finance. They are talented leaders that
                                are excited to form a relation with you.
                            </p>
                        </div>
                    </Tab>
                </Tabs>
                <Col>
                    Yhack 22' The Four Musketeers: Alana Liu, Janus Zhu, Tri Pham, Rayan
                    Sheikh
                </Col>
            </Row>
        </Container>
    );
};

export default Team;
