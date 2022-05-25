import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from "../img/logo.png";
import { RiEye2Line } from 'react-icons/ri';
import { RiEyeCloseLine } from 'react-icons/ri';
// import about from "../img/about.png";
// import profile from "../img/profile.png";
import '../styles/Nav.css'

const NavBar = () => {
    const [favorites, setFavorites] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const handleonClick = (page) => () => {
        navigate(`/${page}`);
    }
    return (
        <Container className='nav-container'>
            <Row style={{
                display: "flex"
                , justifyContent: "space-around"
            }}>
                <Col className='nav-left'>
                    <img src={logo} alt='logo' onClick={handleonClick("HomeScreen")} />
                </Col>
                <Col className='nav-middle'>
                </Col>
                <Col className='nav-right'>
                    <button onClick={handleonClick("team")}>
                        {favorites ?
                            (<RiEyeCloseLine size="50%" color="black" />
                            ) : (
                                <RiEye2Line size="50%" color="black" />
                            )}
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default NavBar;
