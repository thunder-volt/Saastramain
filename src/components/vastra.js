import React from "react";
import "./style.scss";

import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import TopBar from './TopBar'

function Vastra() {
  return (
    <body>
      <TopBar />
      <NavBar />
      <section className="vastra-section">
      <div className="banner">
        <h1 className="vastxt">VASTRA</h1>
      </div>
      <div className="aboutvastra">
        <p>
          You walk into a store and see a cotton t-shirt that costs $50. But is
          that truly all it costs? No. This additional 'cost' is paid by the
          environment as the 3-5 kg of carbon dioxide emissions and the 2700
          litres of water spent making it. That's not all. All around the world,
          a garbage truck's worth of clothes is burned every second. The
          dichotomy of a section of society buying more and more clothes and
          adversely affecting the environment while millions don't have the
          clothes to cover themselves is truly distressing.And that is where
          Vastra comes in.
        </p>
        <h2>About</h2>
        <p>
          Vastra is aimed at providing accessible clothing to all and promoting
          the concept of sustainable fashion to develop a circular economy.
          Through this initiative, we aim to bring about a change in the mindset
          of consumers, eventually making fashion a circular economy where fewer
          and fewer resources are utilized and wasted in the process.
        </p>
      </div>
      <div className="vastrainit">
        <h2>Initiatives</h2>
        <div className="vasin vasin1">
          <div>
            <p>
              Along with spreading awareness of the negative impacts of fashion
              waste on our planet, we wish to teach people to upscale existing
              clothing and encourage them to donate clothes to the
              underprivileged or to small support groups that can turn them into
              handicrafts.
              <br />
              <br />
              The campaign was kickstarted with a launch on our campus along
              with an institute-wide clothes donation drive. Some of the
              highlights of the campaign launch were:
            </p>
            <ul>
              <li>
                A survey about the students' shopping habits concluded in an
                awareness session on the negative impacts of the garment
                industry.
              </li>
              <li>
                A display of sustainable clothes made from upcycled fabric by
                Chennai-based designer Sanah Sharma.
              </li>
            </ul>
          </div>
          <div id="vasimg1"></div>
        </div>
        <div className="vasin vasin2">
          <div id="vasimg2"></div>
          <div>
            <p>
              Over the next few weeks, several events were conducted across
              various locations: Clothes donation drives and awareness sessions
              in PS Senior Secondary School and CPS Global School, in
              collaboration with the NGO, Goonj. A workshop was conducted at the
              Institute Of Child Health and Hospital for Children in
              collaboration with Sanah Sharma, a well-renowned fashion designer
              based in Chennai. The mothers of the children admitted to the
              hospital were enlightened on how their old clothing could be
              repurposed into small bags that they could use.
              <br />
              <br />
              Another highlight of the campaign was a case study competition
              conducted as a collaboration between Shaastra and the Case Club of
              IIT Madras, themed on sustainable clothing to encourage college
              students to come up with innovative solutions to this pressing
              issue.
              <br />
              <br />
              Apart from these feats, some future events that the students have
              planned include
            </p>
            <ul>
              <li>
                Donation drives and sessions in many more schools and colleges
                in and around Chennai.
              </li>
              <li>More workshops in collaboration with Sanah Sharma.</li>
            </ul>
          </div>
        </div>
        <p>
        When asked about the workshop, Ms Sharma says, 
        </p>  
        <h3>
        “Empowering women through an upcycling workshop is a great way to promote both social and environmental sustainability. I’m very happy to have been part of this initiative and I hope that more and more designers, educators and students can come together for such endeavors that are so rewarding by virtue of the process.”
        </h3>
        <p>
        Women living in the Perungudi area of Chennai were made aware of how they could repurpose and reuse old clothing instead of discarding them promoting the ideology of sustainable clothing, in a workshop in collaboration with the students of the National Institute of Fashion Technology (NIFT), Chennai.
        </p>
      </div>
    </section>
    <Footer />
    </body>
  );
}

export default Vastra;
