import React from 'react';
import "./../styles/Footer.css";
import { FaYoutubeSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Logo from "./../images/23_white logo-02.png";

const Footer = (props) => {

    const emails = [
        { mail: "sec_cocur@smail.iitm.ac.in", link: "mailto:sec_cocur@smail.iitm.ac.in" },
        { mail: "outreach@shaastra.org", link: "mailto:outreach@shaastra.org" },
        { mail: "sponsorship@shaastra.org", link: "mailto:sponsorship@shaastra.org" },
        { mail: "webops@shaastra.org", link: "mailto:webops@shaastra.org" }
    ]
    const quickLinks = [
        { name: "About", link: "./" },
        { name: "Events", link: "./" },
        { name: "Team", link: "./" },
        { name: "Contact Us", link: "./" }
    ]

    return (
        <div>
            <div className="footer">
                <div className="contain">
                    {/* <!-- Shaastra Logo --> */}
                    <div className="col">
                        <div className="logoFooter">
                            <a className="linkylinks" href="./"><img src={Logo} alt="Shaastra 2022 Logo" style={{ width: "205px", padding: "20px" }} /></a>
                        </div>
                    </div>
                    {/* <!-- Address  --> */}
                    <div className="col">
                        <h1 className="heady">Address</h1>
                        <ul>
                            <li className="add">IITM Students Activities Trust Shaastra,</li>
                            <li className="add">1st Floor, O/o Dean Of Students Office,</li>
                            <li className="add">IIT Madras, Guindy, Chennai,</li>
                            <li className="add">Tamil Nadu, India - 600036</li>
                            <li className="add">Mobile : +91 9952729095</li>
                        </ul>
                    </div>
                    {/* <!-- Contact Us  --> */}
                    <div className="col">
                        <h1 className="heady">Contact Us</h1>
                        <ul className='emails'>
                            {emails.map((item) => {
                                return (<li><a className="linkylinks" href={item.link}>{item.mail}</a></li>)
                            })}
                        </ul>
                    </div>
                    {/* <!-- Useful links  --> */}
                    <div className="col">
                        <h1 className="heady">Useful Links</h1>
                        <ul className='quickLinks'>
                            {quickLinks.map((item) => {
                                return (<li><a className="linkylinks" href={item.link}>{item.name}</a></li>)
                            })}
                        </ul>
                    </div>
                    {/* Follow Us */}
                    <div className="col follow">
                        <h1 className="heady">Follow Us</h1>
                        <ul className='followUs'>
                            <li><a href="https://www.instagram.com/shaastra_iitm/?hl=en" target="_blank" rel="noreferrer">
                                <FaInstagramSquare size={24} color={"#999999"} />
                            </a></li>
                            <li><a className="linkylinks" href="https://www.linkedin.com/company/shaastra-iit-madras/?originalSubdomain=in" target="_blank" rel="noreferrer">
                                <FaLinkedin size={24} color={"#999999"} />
                            </a></li>
                            <li><a className="linkylinks" href="https://www.youtube.com/channel/UCgY2ugmW-BV2nMRFu-0qPZA" target="_blank" rel="noreferrer">
                                <FaYoutubeSquare size={24} color={"#999999"} />
                            </a></li>
                            <li><a className="linkylinks" href="https://www.facebook.com/Shaastra/" target="_blank" rel="noreferrer">
                                <FaFacebookSquare size={24} color={"#999999"} />
                            </a></li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            {/* <hr width="80%"/> */}
            {/* <!-- The bottom text thingy whatever you call it idk  --> */}
            <div className="colBottom" style={{ paddingBottom: "2px" }}>
                <p>
                    <span className="add">Ⓒ DEVELOPED BY {props.name} | WEB OPERATIONS | SHAASTRA | IIT MADRAS. ALL RIGHTS RESERVED
                        •</span> <a className="linkylinks" href="./">PRIVACY
                            POLICY</a> • <a className="linkylinks" href="./">TERMS &
                                CONDITION</a> • <a className="linkylinks" href="./">SHIPPING POLICY</a> • <a className="linkylinks" href="./">RETURN & REFUND POLICY</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
