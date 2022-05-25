import React from 'react';
// import "../../css/Home.css";
import { useNavigate, useLocation } from 'react-router-dom'
// import token from "../../img/spirit_token.png";
import { Button } from 'react-bootstrap';

const Home = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleonClick = (page) => () => {
        navigate(`/${page}`);
    }
    return (
        <>
            <div id="hero">
                <div className='texture'></div>
                <div className='caption'>
                    {/* <h1>You have <span style={{ color: "#ffd773" }}>5</span>  <img src={token} alt="token" style={{ width: "100px", height: "150px" }} /> tokens.</h1> */}
                    <input type="text" placeholder="Where do you want to go?" />
                    <div>
                        <Button className="btn-search" onClick={handleonClick("SearchPage")}>Search Here</Button>
                    </div>
                    <h2>Alternatively, share your favorite spots with us</h2>
                </div>
            </div>
        </>
    )
}

export default Home;
