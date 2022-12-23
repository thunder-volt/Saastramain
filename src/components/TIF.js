import "../App.css";
import React from "react";
import i1 from "../Images/i1.png";
import i3 from "../Images/i2.png";
import i2 from "../Images/i3.png";
import i4 from "../Images/i4.png";
import i5 from "../Images/i5.png";
import i6 from "../Images/i6.png";
import i7 from "../Images/i7.png";
import i8 from "../Images/i8.png";
import i9 from "../Images/i9.png";
import Card from "./cards";

import NavBar from "./navigation/NavBar";
import TopBar from './TopBar'
import Footer from "./Footer";

function Tif() {
  return (
    <body>
      <TopBar />
      <NavBar></NavBar>
      <div className="App">
      <div className="first-box">
        <div className="title">
          <h1 className="headers">
            TECH<span className="and"> & </span>INNOVATION FAIR
          </h1>
          <p><a href="https://tif.shaastra.org">Visit our website</a></p>
        </div>
        <div className="content1">
          <p>
            The event helps the participants to take their tech-based prototype
            to the next level by converting it into an MVP (Minimum-viable
            product).These benchmark models can further be incubated for the
            commencement of a start-up.
          </p>
        </div>
      </div>
      <div className="content2">
        <p>
          The fair comprises multiple stages of professional guidance in the
          form of Workshops, Panel discussions and seminars based on
          entrepreneurship and management and a culmination event during
          Shaastra where they will exhibit their product to the massive crowd of
          Shaastra.The event concludes with the final pitching competition which
          takes place at IITM research park. By the end of the event,
          participants will be equipped with the knowledge, resources, and
          opportunities they need to kickstart their startup journey.
        </p>
      </div>
      {/* <div className="second-box">
        <div className="title">
          <h3 className="headers">
            Our<span className="and"> Partners</span>
          </h3>
        </div>
        <div className="partners_logo">
          <img src={i1} className="i1" alt="i"></img>
          <img src={i2} className="i2" alt="i"></img>
          <img src={i3} className="i3" alt="i"></img>
        </div>
      </div> */}
      <div className="third-box">
        <div className="title">
          <h3 className="headers">
            Workshops And<span className="seminar"> Seminars</span>
          </h3>
        </div>
        <div className="workshop_pics">
          <img src={i5} className="i5" alt="i"></img>
          <img src={i6} className="i6" alt="i"></img>
          <img src={i7} className="i7" alt="i"></img>
        </div>
      </div>
      <div className="envelope_parent">
        <div className="title">
          <h3 className="headers">
            Success<span className="seminar"> Stories</span>
          </h3>
        </div>
        <div className="envelope">
          <Card
            class="card1"
            title="-Mohammed Safi, Team Night Fury"
            content="Drowning rescue kit - Finds drowning people and launches life jackets for rescue (Winner TIF- 2020)"
            author="Initially, when we got the mail saying we’ve been shortlisted for TIF at IIT Madras, we were surprised. No one in our entire family, our generation, had ever seen an IIT. We got a really good mentor and, Tech and Innovation Fair was really supportive from Day 0. I thank the entire team for everything they’ve done for us."
          />
          <Card
            class="card2"
            title="-Sriram Shreedharan, Team Leader Glucoglobin."
            content="Non Invasive Measurement of Blood Glucose &Haemoglobin (Winner TIF-2019)"
            author="We were working on our device for few months and always wanted to make it into a startup to help people. That’s when we came across Tech and Innovation Fair at Shaastra ‘19 in IIT Madras. The TIF platform helped us by organising workshops on IPR and Pitching. At the end of the day, we were also given an opportunity for pre-incubation at the IITM Research Park. This event helped us take our product to the next phase."
          />
          <Card
            class="card3"
            title="-Shree Ram, CEO & Co-founder, Modulus Housing"
            content="Foldable House (Winner TIF-2018)"
            author="We were a project prototype while we registered for Shaastra TIF 2018. TIF 2018 gave us much insights through its mentoring sessions and webinars. It helped us to work more aggressively on our project and now its soon to be launched as a startup."
          />
          <Card
            class="card4"
            title="-Shreesha Yajaman, Team Flabrr"
            content="The Automatic Flatbread Robot (Winner - TIF 2022) "
            author="Tech and Innovation Fair, Shaastra is one of the most sought-after events for any student-run startup across the country. The plethora of opportunities it provides and opens up are innumerable and of utmost value. The mentorship provided is of great essence from the startups' point of view to analyze where they stand, what they can improve upon, and sketch their roadmap forward. The diversity of startups and their domains was impressive and one gets to learn a lot from this. Kudos to the entire team for the professional manner in which the whole show was planned and executed."
          />
        </div>
      </div>
      <div className="fourth-box">
        <div className="title">
          <h3 className="headers">
            Exhibitions And<span className="seminar"> Research Park Visit</span>
          </h3>
        </div>
        <div className="exhibition_pics">
          <img src={i8} className="i8" alt="i"></img>
          <img src={i9} className="i9" alt="i"></img>
          {/* <img src={i10} className="i10" alt="i"></img> */}
        </div>
      </div>
    </div>
    <Footer designed={[{name: "Jainav", mail:"mailto:ce21b062@smail.iitm.ac.in "}]} />
    </body>
  );
}

export default Tif;
