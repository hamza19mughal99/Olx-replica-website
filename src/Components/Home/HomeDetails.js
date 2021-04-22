import React from 'react';
import MainPic from "../../images/main-carosel2.png";
import  Oppo from "../../images/oppo.png";
import "./Home.css";

function HomeDetails() {
    return (
        <div>
            <img src={MainPic} alt="mainpic" className="img-fluid main-pic" />
            <img src={Oppo} alt="mainpic" className="img-fluid main-pic" />
        </div>
    );
}

export default HomeDetails;