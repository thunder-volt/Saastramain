import React from 'react';
import "./../styles/footer.css";
import { FaYoutubeSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Logo from "../Images/23_white logo-02.png";

const Footer = (props) => {

    const emails = [
        { mail: "sec_cocur@smail.iitm.ac.in", link: "mailto:sec_cocur@smail.iitm.ac.in" },
        { mail: "outreach@shaastra.org", link: "mailto:outreach@shaastra.org" },
        { mail: "sponsorship@shaastra.org", link: "mailto:sponsorship@shaastra.org" },
        { mail: "webops@shaastra.org", link: "mailto:webops@shaastra.org" }
    ]
    const quickLinks = [
        { name: "About", link: "./EventsLanding" },
        { name: "Events", link: "./" },
        { name: "Team", link: "./" },
        { name: "Contact Us", link: "./" }
    ]

    return (
        <div>
            <div className="footer">
                <div className="contain">
                    {/* <!-- Shaastra Logo --> */}
                    <div className="coly logothing">
                        <div className="logoFooter">
                            <a className="linkylinks" href="./"><img src={Logo} alt="Shaastra 2022 Logo" style={{ width: "250px", padding: "20px" }} /></a>
                        </div>
                    </div>

                    {/* <!-- Address  --> */}
                    <div className="coly" style={{ marginRight: 50 }}>
                        <h1 className="heady">Address</h1>
                        <ul>
                            <li className="add">IITM Students Activities Trust Shaastra,</li>
                            <li className="add">1st Floor, O/o Dean Of Students Office,</li>
                            <li className="add">IIT Madras, Guindy, Chennai,</li>
                            <li className="add">Tamil Nadu, India - 600036</li>
                            {/* <li className="add">Mobile : +91 9952729095</li> */}
                        </ul>
                    </div>
                    {/* <!-- Contact Us  --> */}
                    <div className="coly">
                        <h1 className="heady">Contact Us</h1>
                        <ul className='emails'>
                            {emails.map((item) => {
                                return (<li><a className="linkylinks" href={item.link}>{item.mail}</a></li>)
                            })}
                        </ul>
                    </div>
                    {/* <!-- Useful links  --> */}
                    <div className="coly">
                        <h1 className="heady">Useful Links</h1>
                        <ul className='quickLinks'>
                            {quickLinks.map((item) => {
                                return (<li><a className="linkylinks" href={item.link}>{item.name}</a></li>)
                            })}
                        </ul>
                    </div>
                    {/* Follow Us */}
                    <div className="coly follow">
                        <h1 className="heady">Follow Us</h1>
                        <ul className='followUs'>
                            <li><a className="linkylinks" href="https://www.instagram.com/shaastra_iitm/?hl=en" target="_blank" rel="noreferrer">
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
                </div>
            </div>
            {/* <hr width="80%"/> */}
            {/* <!-- The bottom text thingy whatever you call it idk  --> */}
            <div className="colBottom" style={{ paddingBottom: "2px" }}>
                <p>
                    <span className="add">Ⓒ DEVELOPED BY {props.name} | WEB OPERATIONS | SHAASTRA | IIT MADRAS. ALL RIGHTS RESERVED
                        •</span> 
                    <div className="link-footer-div">
                    <a className="linkylinks"  href="./policies/Privacy" target="_blank">PRIVACY
                            POLICY</a> • <a className="linkylinks" href="./policies/Terms" target="_blank">TERMS &
                                CONDITION</a> • <a className="linkylinks"  href="./policies/Shipping" target="_blank">SHIPPING POLICY</a> • <a className="linkylinks" href="./policies/Refund" target="_blank">RETURN & REFUND POLICY</a>
                    </div>
                </p>
            </div>
        </div >
    );
};

export default Footer;
