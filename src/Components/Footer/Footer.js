import React from 'react';
import FinalSection from "./FinalSection";
import CopyRights from "./CopyRights";
import "./Footer.css";

function Footer() {
    return (
        <>
            
            <div className="footer-heading">
            <h1 >Get Your App Today</h1>
                <FinalSection />
            </div>
            <div className="footer">
                <div>
                    <p>POPULAR CATEGORIES</p>
                    <ul>
                        <li>Cars</li>
                        <li>Flats for rent</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div>
                    <p>TRENDING SEARCHES</p>
                    <ul>
                        <li>Bikes</li>
                        <li>Watches</li>
                        <li>Books</li>
                    </ul>
                </div>
                <div>
                    <p>ABOUT US</p>
                    <ul>
                        <li>About olx group</li>
                        <li>OLX Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <p>OLX</p>
                    <ul>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>legal and privacy information</li>
                    </ul>
                </div>
            </div>
            <CopyRights />
        </>
    );
}

export default Footer;