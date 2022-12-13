import React from 'react';
import "./../styles/Footer.css";
import { FaYoutubeSquare,FaInstagramSquare,FaFacebookSquare,FaLinkedin} from "react-icons/fa";
import Logo from "./../images/23_white logo-02.png";

const Footer = (props) => {

    const quickLinks =[
        {
            name:"About",
            link:"./",
        },
        {
            name:"Events",
            link:"./",
        },
        {
            name:"Team",
            link:"./",
        },
        {
            name:"Contact Us",
            link:"./",
        }
    ]

    return(
        <div>
        <div className="footer">
            <div className="contain">
                {/* <!-- Shaastra Logo --> */}
                <div className="col">
                    <div className="logoFooter">
                        <a href="./"><img src={Logo} alt="Shaastra 2022 Logo" style={{width:"205px",padding: "20px"}}/></a>
                    </div>
                </div>
                {/* <!-- Address  --> */}
                <div className="col">
                    <h1>Address</h1>
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
                    <h1>Contact Us</h1>
                    <ul className='emails'>
                        <li><a href="mailto:sec_cocur@smail.iitm.ac.in">sec_cocur@smail.iitm.ac.in</a></li>
                        <li><a href="mailto:outreach@shaastra.org">outreach@shaastra.org</a></li>
                        <li><a href="mailto:sponsorship@shaastra.org">sponsorship@shaastra.org</a></li>
                        <li><a href="mailto:webops@shaastra.org">webops@shaastra.org</a></li>
                    </ul>
                </div>
                {/* <!-- Useful links  --> */}
                <div className="col">
                    <h1>Useful Links</h1>
                    <ul className='quickLinks'>
                        {quickLinks.map((item) =>{
                            return(<li><a href={item.link}>{item.name}</a></li>)
                        })}
                    </ul>
                </div>
                {/* Follow Us */}
                <div className="col follow">
                    <h1>Follow Us</h1>
                    <ul className='followUs'>
                        <li><a href="./"><FaInstagramSquare size={24} color={"#999999"}/></a></li>
                        <li><a href="./"><FaLinkedin size={24} color={"#999999"}/></a></li>
                        <li><a href="./"><FaYoutubeSquare size={24} color={"#999999"}/></a></li>
                        <li><a href="./"><FaFacebookSquare size={24} color={"#999999"}/></a></li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
        {/* <hr width="80%"/> */}
        {/* <!-- The bottom text thingy whatever you call it idk  --> */}
        <div className="colBottom" style={{paddingBottom: "2px"}}>
            <p>
                <span className="add">Ⓒ DEVELOPED BY {props.name} | WEB OPERATIONS | SHAASTRA | IIT MADRAS. ALL RIGHTS RESERVED
                        •</span> <a href="./">PRIVACY
                            POLICY</a> • <a href="./">TERMS &
                                CONDITION</a> • <a href="./">SHIPPING POLICY</a> • <a href="./">RETURN & REFUND POLICY</a>
            </p>
        </div>
        </div>
    );
};

export default Footer;