import React from 'react';
import AppStore from "../../images/appstore.png";
import playStore from "../../images/playstore.png";
import "./Footer.css";

function FinalSection() {
    return (
        <div className="finalsection-div">
         <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home">  <img src={AppStore} alt="app"  /> </a> 
         <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" >   <img src={playStore} alt="play"   /> </a> 
        </div>
    );
}

export default FinalSection;