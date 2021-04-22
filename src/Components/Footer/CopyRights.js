import React from 'react';
import "./Footer.css";
import mylogo from "../../images/my Logo.png";


function CopyRights() {
    return (
        <>
            <div className="footer-div">
                <p>CopyRights Reserved @ Hamza | </p>
                <img src={mylogo}  width="40px" alt="img" /> 
            </div>
        </>
    );
}

export default CopyRights;