import './App.css';
import {AiOutlineMail} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";
import TopBar from './Components/TopBar';
import NavBar from './Components/navigation/NavBar';
import Footer from './Components/Footer';
function Contact() {
  return (
   <body>
    <TopBar />
    <NavBar />
     <div className="contact">
  <div class="contact-us-heading">
    Contact Us
  </div>
  <div class="container contact-container">
    <div class="left-side">
      <div class="icon-container">
        <div class="icon-box">
        <AiOutlineMail class="icon"/>
        </div>
      </div>
      <div class="content-container email-align">
        <div>
          <a href="#">sponsorship@shaastra.org ➜</a><br />
          <a href="#">outreach@shaastra.org ➜</a><br />
          <a href="#">sec_cocur@shaastra.org ➜</a>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="icon-container">
        <div class="icon-box">
         <BsTelephone class="icon"/>
        </div>
      </div>
      <div class="content-container content-container-para" style={{marginTop: "-60px"}}>
        <div class="para-left">
          <div class="contact-component">
            <div class="heading">English</div>
            <div class="content">
              <p>maxfirstnamelen +91 1234567890</p> <br />
              <p>maxfirstnamelen +91 1234567890</p>
            </div>
          </div>

          <div class="contact-component">
            <div class="heading">Tamil</div>
            <div class="content">
              <p>maxfirstnamelen +91 1234567890</p> <br />
              <p>maxfirstnamelen +91 1234567890</p>
            </div>
          </div>

          <div class="contact-component">
            <div class="heading">Hindi</div>
            <div class="content">
              <p>maxfirstnamelen +91 1234567890</p> <br />
              <p>maxfirstnamelen +91 1234567890</p>
            </div>
          </div>
        </div>
        <div class="para-right">
          <div class="contact-component">
            <div class="heading">Kannada</div>
            <div class="content">
              <p>maxfirstnamelen +91 1234567890</p> <br />
              <p>maxfirstnamelen +91 1234567890</p>
            </div>
          </div>

          <div class="contact-component">
            <div class="heading">Marathi</div>
            <div class="content">
              <p>maxfirstnamelen +91 1234567890</p> <br />
              <p>maxfirstnamelen +91 1234567890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <Footer />
   </body>
  );
}

export default Contact;
