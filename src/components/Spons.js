import React from 'react'
import img1 from "../Images/Outlook-signature_.png"
import img2 from "../Images/SLBlight.png"
import img3 from "../Images/NomuraRed.png"
import img6 from "../Images/Edufabrica1.jpeg"
import img7 from "../Images/Boeing_full_logo.svg.png"
import img8 from "../Images/GalaxEye.png"
import img9 from "../Images/Agnikul.png"
import img10 from "../Images/pvr.png"
import img14 from "../Images/BAJAJupdated.png"
import img15 from "../Images/juspay.png"
import img16 from "../Images/KLA.6b2bfd91.png"
import img18 from "../Images/ME-B.2510110f.png"
import img35 from "../Images/CHETAK.jpg"
import img36 from "../Images/FTL.jpg"
import img37 from "../Images/BioconBiologics.png"
import img38 from "../Images/Flipkartlogo.png"
import img39 from "../Images/S&SLogo.png"
import img40 from "../Images/NPTELLogo.png"
import img41 from "../Images/IITM_BS_Degree_ Black_logo.png";
import img42 from "../Images/ArcesiumLogo.png"
import img43 from "../Images/Ansys.png"
import img44 from "../Images/L&T.png"



import "../styles/styles.css"

import NavBar from './navigation/NavBar'
import Footer from './Footer'

const Spons = () => {
    const cards = document.querySelectorAll('.cards');
    window.addEventListener("scroll", checkBoxes);

    function checkBoxes() {
        // e.window.scrollY;
        const triggerBottom = window.innerHeight / 6 * 5;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        })
    }

    window.onload = function () {
        var reloading = sessionStorage.getItem("reloading");
        if (reloading) {
            sessionStorage.removeItem("reloading");
            checkBoxes();
        }
    }


    // reloadP()
    return (
        <body>
            <NavBar />
            <div className='spons-body'>
                <div className='spons-intro'>
                    <h2 className='spons-heading'>Our Sponsor</h2>
                    <div className='spons-info'>Shaastra, ever since it's conception has been growing by leaps and bounds and this wouldn't have been achieved without the support of the student community and our corporate partners. We are continuously on the look out for long-term and mutually beneficial associations with reputed organizations from around the globe. In case your organization shares and believes in Shaastra’s vision, we would love to work out an association. We always welcome ideas, queries and criticism of any kind and hence, do feel free to contact us.</div>
                </div>
                <div className="slider">
                    <div className='slide-track'>
                        <a href="https://m2pfintech.com/"> <div className="slide ">
                            <img src={img1} alt="" />
                            <h2 class="title">Title Sponsor</h2>
                        </div></a>
                        <a href="https://www.slb.com/"><div className="slide">
                            <img src={img2} alt="" />
                            <h2 class="title">Gold Sponsor</h2>
                        </div></a>
                        <a href="https://www.nomura.com/"><div className="slide">
                            <img src={img3} alt="" />
                            <h2 class="title">Co Sponsor</h2>
                        </div></a>
                        <a href="https://www.arcesium.com/"><div className="slide">
                            <img src={img42} alt="" />
                            <h2 class="title">Technology Sponsor</h2>
                        </div></a>
                        <a href="https://www.ansys.com/en-in">
                            <div className="slide">
                                <img src={img43} alt="" />
                                <h2 class="title">Industry Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://lntedutech.com/">
                            <div className="slide">
                                <img src={img44} alt="" />
                                <h2 class="title">IDP Sponsor</h2>
                            </div>
                        </a>
                        {/* 5 slides doubled up for the infinite loop */}
                        <a href="https://m2pfintech.com/"> <div className="slide ">
                            <img src={img1} alt="" />
                            <h2 class="title">Title Sponsor</h2>
                        </div></a>
                        <a href="https://www.slb.com/"><div className="slide">
                            <img src={img2} alt="" />
                            <h2 class="title">Gold Sponsor</h2>
                        </div></a>
                        <a href="https://www.nomura.com/"><div className="slide">
                            <img src={img3} alt="" />
                            <h2 class="title">Co Sponsor</h2>
                        </div></a>
                        <a href="https://www.arcesium.com/"><div className="slide">
                            <img src={img42} alt="" />
                            <h2 class="title">Technology Sponsor</h2>
                        </div></a>
                        <a href="https://www.ansys.com/en-in">
                            <div className="slide">
                                <img src={img43} alt="" />
                                <h2 class="title">Industry Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://lntedutech.com/">
                            <div className="slide">
                                <img src={img44} alt="" />
                                <h2 class="title">IDP Sponsor</h2>
                            </div>
                        </a>
                    </div>

                </div>
                <div className='spons-events'>Events Sponsor</div>
                <section class="container-main">
                    <a href="https://www.bajajauto.com/"><div class="cards-events">
                        <img src={img14} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>

                    <a href="https://www.bajajauto.com/"><div class="cards-events">
                        <img src={img35} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>
                    <a href="https://flowthermolab.com/"><div class="cards-events">
                        <img src={img36} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>
                    <a href="https://juspay.in/"><div class="cards-events">
                        <img src={img15} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>
                    <a href="https://www.kla.com/"><div class="cards-events">
                        <img src={img16} alt="" className='imp-sales' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>
                    <a href="https://www.mouser.in/">
                        <div class="cards-events">
                            <img src={img18} alt="" className='imp-spons1' />
                            {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                        </div>
                    </a>

                    <a href="http://www.bioconbiologics.com/"><div class="cards-events">
                        <img src={img37} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                    </div></a>
                    <a href="https://www.flipkart.com/"><div class="cards-events">
                        <img src={img38} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                    </div></a>
                    <a href="https://suranaandsurana.com/"><div class="cards-events">
                        <img src={img39} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                    </div></a>
                    <a href="https://nptel.ac.in/"><div class="cards-events">
                        <img src={img40} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                    </div></a>
                    <a href="https://onlinedegree.iitm.ac.in/">
                        <div class="cards-events">
                            <img src={img41} alt="" className='imp-spons1' />
                            {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                        </div>
                    </a>

                </section>
                <div className="slider1">
                    <div className='slide-track1'>
                        <a href="https://www.edufabrica.net/">
                            <div className="slide ">
                                <img src={img6} alt="" />
                                <h2 className="title-1">Biology Workshop Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://www.boeing.co.in"><div className="slide">
                            <img src={img7} alt="" />
                            <h2 className="title-1">Innovation Sponsor</h2>
                        </div></a>
                        <a href="https://galaxeye.space/"> <div className="slide">
                            <img src={img8} alt="" />
                            <h2 className="title-1">Summit Sponsor</h2>
                        </div></a>
                        <a href="https://agnikul.in/#/"><div className="slide">
                            <img src={img9} alt="" />
                            <h2 className="title-1">Summit Sponsor</h2>
                        </div></a>
                        <a href="https://instagram.com/pvrcinemas_official?igshid=YmMyMTA2M2Y=">
                            <div className="slide">
                                <img src={img10} alt="" />
                                <h2 className="title-1">Movie Sponsor</h2>
                            </div>
                        </a>
                        {/* 5 slides doubled up for the infinite loop */}
                        <a href="https://www.edufabrica.net/">
                            <div className="slide ">
                                <img src={img6} alt="" />
                                <h2 className="title-1">Biology Workshop Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://www.boeing.co.in"><div className="slide">
                            <img src={img7} alt="" />
                            <h2 className="title-1">Innovation Sponsor</h2>
                        </div></a>
                        <a href="https://galaxeye.space/"> <div className="slide">
                            <img src={img8} alt="" />
                            <h2 className="title-1">Summit Sponsor</h2>
                        </div></a>
                        <a href="https://agnikul.in/#/"><div className="slide">
                            <img src={img9} alt="" />
                            <h2 className="title-1">Summit Sponsor</h2>
                        </div></a>
                        <a href="https://instagram.com/pvrcinemas_official?igshid=YmMyMTA2M2Y=">
                            <div className="slide">
                                <img src={img10} alt="" />
                                <h2 className="title-1">Movie Sponsor</h2>
                            </div>
                        </a>
                    </div>

                </div>
                {/* <div className='spons-extra'>
                <div className="cards">
                    <img src={img6} alt="" className='imp-spons' />
                    <h2 className="title-1">Technology Sponsor</h2>
                </div>
                <div className="cards">
                    <img src={img7} alt="" className='imp-spons' />
                    <h2 className="title-1">Co Sponsor</h2>
                </div>
                <div className="cards">
                    <img src={img8} alt="" className='imp-spons' />
                    <h2 className="title-1">Co Sponsor</h2>
                </div>
                <div className="cards">
                    <img src={img9} alt="" className='imp-spons' />
                    <h2 className="title-1">Co Sponsor</h2>
                </div>
                <div className="cards">
                    <img src={img10} alt="" className='imp-spons' />
                    <h2 className="title-1">IDP Sponsor</h2>
                </div>
                <div className="cards">
                    <img src={img11} alt="" className='imp-spons' />
                    <h2 className="title-1">Prize Money Sponsor</h2>
                </div>
            </div> */}
                {/* <section class="container-main">
                    <div class="cards-events">
                        <img src={img12} alt="" className='imp-spons1' />
                        <h2 class="title-1">Juniors Sponsor</h2>
                    </div>
                    <div class="cards-events">
                        <img src={img19} alt="" className='imp-spons1' />
                        <h2 class="title-1">Campus Ambassador Sponsors</h2>
                    </div>
                    <div class="cards-events">
                        <img src={img20} alt="" className='imp-spons1' />
                        <h2 class="title-1">Campus Ambassador Sponsors</h2>
                    </div>
                    <div class="cards-events">
                        <img src={img21} alt="" className='imp-sales' />
                        <h2 class="title-1">Shows Sponsors</h2>
                    </div>
                    <div class="cards-events">
                        <img src={img22} alt="" className='imp-o' />
                        <h2 class="title-1">Workshop Sponsor</h2>
                    </div>
                    <div class="cards-events">
                        <img src={img23} alt="" className='imp-spons1' />
                        <h2 class="title-1">Workshop Sponsor</h2>
                    </div>

                </section> */}
                {/* <div className='spons-events'>Other Sponsor</div> */}
                {/* <div class="container-main">
                    <div class="cards-events1">
                        <img src={img24} alt="" className='imp-spons2' />
                        <h2 class="title-1">Beverage Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img25} alt="" className='imp-spons2' />
                        <h2 class="title-1">Confectionery Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img26} alt="" className='imp-spons2' />
                        <h2 class="title-1">
                            Savings Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img27} alt="" className='imp-spons2' />
                        <h2 class="title-1">Chess Platform Sponsors</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img34} alt="" className='imp-spons2' />
                        <h2 class="title-1">Eatery Sponsor</h2>
                    </div>
                </div> */}
                {/* <div className="container-main">
                    <div class="cards-events1">
                        <img src={img28} alt="" className='imp-spons2' />
                        <h2 class="title-1">Grooming Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img29} alt="" className='imp-spons2' />
                        <h2 class="title-1">Desert Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img30} alt="" className='imp-spons2' />
                        <h2 class="title-1">Snack Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img31} alt="" className='imp-spons2' />
                        <h2 class="title-1">Industry Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img32} alt="" className='imp-spons2' />
                        <h2 class="title-1">Nutrition Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img33} alt="" className='imp-spons2' />
                        <h2 class="title-1">Gifting Sponsor</h2>
                    </div>
                </div> */}

            </div>
            <Footer designed={[{ name: " Akshay", mail: "mailto:ce21b006@smail.iitm.ac.in" }]} />
        </body>
    )
}

export default Spons