import React from 'react'
import "../styles/footer.css"
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-body'>
            <div className="footer-cards">
                <div className="footer-card">
                    <h3>Address</h3>
                    <ul><li>IITM STUDENTS ACTIVITIES TRUST SHAASTRA.</li>
                        <li>1ST Floor , O/o Dean Of Students Office</li>
                        <li>IIT MADRAS, Guindy , Chennai</li>
                        <li>Tamil Nadu , India - 600036</li>
                        <li>Mobile: +91 99527229095</li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h3>Contact Us</h3>
                    <ul><li>sec_cocur@smail.iitm.ac.in</li>
                        <li>outreach@shaastra.org</li>
                        <li>sponsorship@shaastra.org</li>
                        <li>webops@shaastra.org</li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h3>Useful Links</h3>
                    <ul><li><a href="/about">About</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/teams">Team</a></li>
                        <li><a href="/contact">Contact Us</a></li>

                    </ul>
                </div>
            </div>

            <div className="footer-cont">
                <div className="waves">
                    <div className="wave" id='wave1'></div>
                    <div className="wave" id='wave2'></div>
                    <div className="wave" id='wave3'></div>
                    <div className="wave" id='wave4'></div>
                </div>
                <ul className="social-icons">
                    <li><a href=""><FaInstagram /></a></li>
                    <li><a href=""><FaLinkedin /></a></li>
                    <li><a href=""><FaYoutube /></a></li>

                </ul>
                <ul className='footer-menu'>
                    <li ><a href="">Privacy Policy</a> </li>
                    <li ><a href="">Terms & Condition</a> </li>
                    <li ><a href="">Shipping Policy</a> </li>
                    <li ><a href="">Return & Refund Policy</a> </li>
                </ul>
                <p>Developed by Someone | Web Operations | Shaastra | IIT MADRAS All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer