import React from 'react'
import img1 from "../Images/Outlook-signature_.png"
import img2 from "../Images/mtx.82256c8f.png"
import img3 from "../Images/AMD.9ce067c9.png"
import img4 from "../Images/Wells_Fargo.b3210ca8.png"
import img5 from "../Images/SBI.3a0a95da.png"
import img6 from "../Images/Boeing.63b212fe.png"
import img7 from "../Images/logo2.c6436bca-1.png"
import img8 from "../Images/Astra.92adb9d4.png"
import img9 from "../Images/L&T.fe1eb41c.png"
import img10 from "../Images/CAT.9fc50504.png"
import img11 from "../Images/ACR.9e438039.png"
import img12 from "../Images/WC.5de40956.png"
import img13 from "../Images/MouserElectronics.jpeg"
import img14 from "../Images/Bajaj.png"
import img15 from "../Images/Juspay.png"
import img16 from "../Images/KLA.6b2bfd91.png"
import img17 from "../Images/caterpillar.jpeg"
import img18 from "../Images/ME-B.2510110f.png"
import img19 from "../Images/CL.6f6509b9.png"
import img20 from "../Images/ES.d5de8fee.png"
import img21 from "../Images/Times.1a73488a.jpg"
import img22 from "../Images/MW.3a56a8d5.png"
import img23 from "../Images/capermint.0b96d822.png"
import img24 from "../Images/Nescafe.0d3d1306.png"
import img25 from "../Images/BN.667aa409.png"
import img26 from "../Images/GOB.d8c56021.png"
import img27 from "../Images/Chess.ce0418f5.png"
import img28 from "../Images/BSC.7a613ba2.png"
import img29 from "../Images/GF.e3ef753b.png"
import img30 from "../Images/UC.b58fb217.png"
import img31 from "../Images/MZ.b025c41c.png"
import img32 from "../Images/YB.7eb906bd.png"
import img33 from "../Images/wrapcart.e8a02718.jpg"
import img34 from "../Images/NEW.c706d957.png"

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
                    {/* <div className='slide-track'> */}
                    <div className="slide ">
                        <img src={img1} alt="" />
                        <h2 class="title">Title Sponser</h2>
                    </div>
                    {/* <div className="slide">
                            <img src={img2} alt="" />
                            <h2 class="title">Associate Title Sponser</h2>

                        </div>
                        <div className="slide">
                            <img src={img3} alt="" />
                            <h2 class="title">Powered By</h2>
                        </div>
                        <div className="slide">
                            <img src={img4} alt="" />
                            <h2 class="title">Gold Sponsor</h2>
                        </div>
                        <div className="slide">
                            <img src={img5} alt="" />
                            <h2 class="title">Silver Sponsor</h2>
                        </div> */}

                    {/* 5 slides doubled up for the infinite loop */}
                    {/* <div className="slide ">
                        <img src={img1} alt="" />
                        <h2 class="title">Title Sponser</h2>
                    </div> */}
                    {/* <div className="slide">
                            <img src={img2} alt="" />
                            <h2 class="title">Associate Title Sponser</h2>

                        </div>
                        <div className="slide">
                            <img src={img3} alt="" />
                            <h2 class="title">Powered By</h2>
                        </div>
                        <div className="slide">
                            <img src={img4} alt="" />
                            <h2 class="title">Gold Sponsor</h2>
                        </div>
                        <div className="slide">
                            <img src={img5} alt="" />
                            <h2 class="title">Silver Sponsor</h2>
                        </div> */}
                </div>

                {/* </div> */}
                <div className='spons-events'>Events Sponsor</div>
                <section class="container-main">
                    {/* <div class="cards-events">
                        <img src={img13} alt="" className='imp-spons1' />
                        
                    </div> */}
                    <div class="cards-events">
                        <img src={img14} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div>
                    <div class="cards-events">
                        <img src={img15} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div>
                    <div class="cards-events">
                        <img src={img16} alt="" className='imp-sales' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div>
                    <div class="cards-events">
                        <img src={img10} alt="" className='imp-o' />
                        {/* <h2 class="title-1">IDP Sponsor</h2> */}
                    </div>
                    <div class="cards-events">
                        <img src={img18} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                    </div>
                </section>
                {/* <div className="slider1"> */}
                {/* <div className='slide-track'> */}
                {/* <div className="slide ">
                            <img src={img6} alt="" />
                            <h2 className="title-1">Technology Sponsor</h2>
                        </div>
                        <div className="slide">
                            <img src={img7} alt="" />
                            <h2 className="title-1">Co Sponsor</h2>

                        </div>
                        <div className="slide">
                            <img src={img8} alt="" />
                            <h2 className="title-1">Co Sponsor</h2>
                        </div>
                        <div className="slide">
                            <img src={img9} alt="" />
                            <h2 className="title-1">Co Sponsor</h2>
                        </div> */}
                {/* <div className="slide">
                    <img src={img10} alt="" />
                    <h2 className="title-1">IDP Sponsor</h2>
                </div> */}

                {/* 5 slides doubled up for the infinite loop */}
                {/* <div className="slide ">
                            <img src={img6} alt="" />
                            <h2 className="title-1">Technology Sponsor</h2>
                        </div>
                        <div className="slide">
                            <img src={img7} alt="" />
                            <h2 className="title-1">Co Sponsor</h2>

                        </div>
                        <div className="slide">
                            <img src={img8} alt="" />
                            <h2 className="title-1">Co Sponsor</h2>
                        </div>
                        <div className="slide">
                            <img src={img9} alt="" />
                            <h2 className="title-1">Co Sponsor</h2>
                        </div> */}
                {/* <div className="slide">
                        <img src={img10} alt="" />
                        <h2 className="title-1">IDP Sponsor</h2>
                    </div> */}
                {/* </div> */}

                {/* </div> */}
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