import * as React from "react";
//import { useColorModeValue } from "@chakra-ui/react";
//import { ReactComponent as DiceOutlineDarkAnimated } from "./../../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
//import { ReactComponent as DiceOutlineLightAnimated } from "./../../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import "../../../styles/Team_styles/Team.css";
import Card from "./Card";
import SliderImgBox from "./SliderImgBox";
import photos from "./photos";
import { FaFilter, FaTimes } from "react-icons/fa";
import NavBar from "../../navigation/NavBar";
import Footer from "../../Footer";
interface Props {}

const Team = (props: Props) => {
  //const colorTheme = useColorModeValue("light", "dark");

  //const Logo = useColorModeValue(
    //DiceOutlineDarkAnimated,
    //DiceOutlineLightAnimated);

  let Profiles = [
    {
      name: "Nitish Gupta",
      role: "Core",
      dept: "Co-Curricular Affairs Secretary",
      mailId: "be17b022@smail.iitm.ac.in",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/nitish-gupta86/",
        instagram: "https://www.instagram.com/nitishhgupta/",
        shastraMailId: "nitish.gupta@shaastra.org",
        contact: "9840903852",
      },
      //desc: "***NOT MY DESCRIPTION***\nI would suggest to remove this part, because this way it wont be a same template for everyone. The positions can give anyone fair bit of idea as to what is the role of that particular person.",
      imgURL: photos.be17b022,
    },
    {
      mailId: "be19b012@smail.iitm.ac.in",
      name: "Abhishek sv",
      dept: "Webops",
      social_links: {
        instagram: "https://www.instagram.com/abhi_shx_25/",
        linkedIn: "https://www.linkedin.com/in/abhishek-sv-69b67719a/",
        shastraMailId: "abhisheksv@shaastra.org",
        contact: "8300682565",
      },
      //desc: "Being a part of shaastra is always like a ride in rollercoaster, fun and enjoyable. Being a part of this team meant everything to me , like I always say its never a bug, its always a undocumented feature.",
      imgURL: photos.be19b012,
    },
    {
      mailId: "be19b012@smail.iitm.ac.in",
      name: "Shobham",
      dept: "Webops",
      social_links: {
        instagram: "https://www.instagram.com/abhi_shx_25/",
        linkedIn: "https://www.linkedin.com/in/abhishek-sv-69b67719a/",
        shastraMailId: "abhisheksv@shaastra.org",
        contact: "8300682565",
      },
      //desc: "Being a part of shaastra is always like a ride in rollercoaster, fun and enjoyable. Being a part of this team meant everything to me , like I always say its never a bug, its always a undocumented feature.",
      imgURL: photos.be19b012,
    },
    {
      mailId: "ce19b029@smail.iitm.ac.in",
      name: "Charitha S ",
      dept: "Concept & Design",
      social_links: {
        instagram: "https://www.instagram.com/charitha_2611 ",
        linkedIn: "https://www.linkedin.com/in/Charitha Cherry ",
        shastraMailId: "charitha@shaastra.org ",
        contact: "9177679069",
      },
      //desc: "This is Charitha.S ce19b029, 2nd year undergraduate from Civil engineering department, Shaastra core - Concept and Design team\n\nShaastra is the biggest annual technical festival of the IITM. My contribution may be small but being a core I got to learn how to manage a team, how to articulate and assign tasks to the team. This helps me grow to be in a better position in both academically and professionally. This time Shaastra being online it's way too different from previous years. So it was pretty challenging to communicate with in the team and to make sure assigned tasks are done in the expected deadline.",
      imgURL: photos.ce19b029,
    },
    {
      mailId: "ed18b057@smail.iitm.ac.in",
      name: "Rohit Survase",
      dept: "Concept & Design",
      social_links: {
        instagram: "https://www.instagram.com/_rohitsurvase",
        linkedIn: "https://www.linkedin.com/in/Rohit Survase",
        shastraMailId: "rohit@shaastra.org",
        contact: "7020250404",
      },
      //desc: "Shaastra has always been special to me. The experience that I have had being in Shaastra will be cherished throughout my life. Meeting wonderful seniors,juniors and peers had made my time in Shaastra extremely special.",
      imgURL: photos.ed18b057,
    },
    {
      mailId: "ee18b054@smail.iitm.ac.in",
      name: "K.L.Soumya",
      dept: "Envisage",
      social_links: {
        instagram: "https://www.instagram.com/envisageiitmadras/",
        linkedIn: "https://www.linkedin.com/in/soumya-kollipara-69aa361a8",
        shastraMailId: "soumya@shaastra.org",
        contact: "9176415740",
      },
      //desc: "I am K.L.Soumya, an Electrical Engineering (Btech) student at IIT Madras. I have always been fascinated by technology and innovation. This is what drove me to be a part of Shaastra. I have been a part of Shaastra since my first year. I started as a volunteer for Shaastra and that is when I fell in love with Shaastra. Watching all the cool stuff that happened during those 4 days was an amazing experience. I definitely wanted to be a part of such a team and hence became a coordinator for Shaastra in my second year followed by manager in my third year and finally Core in my final year. The experience so far has been phenomenal. Being part of Shaastra, I got exposed to lot of experiences, had a sharp learning curve, found lots of friends and  had loads of fun!!",
      imgURL: photos.ee18b054,
    },
    {
      mailId: "ce18b003@smail.iitm.ac.in",
      name: "Battu Lochana Janaki",
      dept: "Envisage",
      social_links: {
        instagram: "https://www.instagram.com/envisageiitmadras/",
        facebook: "https://www.facebook.com/Envisage.IITM",
        shastraMailId: "lochana@shaastra.org",
        contact: "7032377877",
      },
      //desc: "I am Lochana Janaki, a final year B. Tech Civil Engineering Student at IIT Madras. Back then in my freshie year, I was taken aback looking at the amazing technological events, shows, and many more activities put up by Shaastra. Right then, I decided to be a part of this great Team and started my journey as an Envisage Coordinator at Shaastra. This got me an opportunity to work on remarkable projects, make new friends, gain new skills and a lot of memories to cherish in my life. These experiences always boosted me and motivated me in continuing with the Team. That's how I ended up being one of the Cores at Shaastra. I am very excited to take up this new responsibility and eagerly waiting for one more amazing Shaastra ahead. ",
      imgURL: photos.ce18b003,
    },
    {
      mailId: "cs18b050@smail.iitm.ac.in",
      name: "Aniswar Srivatsa Krishna",
      dept: "Events & Workshops",
      social_links: {
        facebook: "https://www.facebook.com/aniswarsrivatsak/",
        shastraMailId: "aniswar@shaastra.org",
      },
      //desc: "I aim to contribute something big to society. Being part of Shaastra and conducting various events connects me to various students from colleges all over India and provides me a great platform for exchange of ideas. It also gives me an opportunity to be at the forefront of technological innovation in the country",
      imgURL: photos.cs18b050,
    },
    {
      mailId: "ch18b020@smail.iitm.ac.in",
      name: "S Vishal",
      dept: "Events & Workshops",
      social_links: {
        instagram: "s_._vishal",
        shastraMailId: "vishal@shaastra.org",
      },
      //desc: "A fourth year student from Chemical engineering department, with special interests in statistics, control and a bunch of associated stuff hoping to contribute to a better world. My journey with Shaastra started with exposure to popular and fun events like reverse coding and I gradually worked my way up to the head of Coding&Logic managing to conduct 15 events. Aside from Shaastra being an enriching experience in terms of personal development, it is the everlasting friendships that I made which made it a memorable experience. Back here one last time have an enjoyable as well as socially impactful Shaastra for participants across the spectrum!",
      imgURL: photos.ch18b020,
    },
    {
      mailId: "me18b145@smail.iitm.ac.in",
      name: "Ashwin Kumar",
      dept: "Evolve",
      social_links: {
        instagram: "https://www.instagram.com/ash_twenty5/",
        linkedIn: "https://www.linkedin.com/in/ashwin-kumar-242288185/",
        shastraMailId: "ashwin@shaastra.org",
        contact: "+91 99622 96616",
      },
      //desc: "Being part of the Core organizing team of India's largest completely student-run festival is an overwhelming and fantastic experience to say the least. Shaastra has remained an integral part of my Insti life and has provided innumerous cherishable memories. ",
      imgURL: photos.me18b145,
    },
    {
      mailId: "ed18b031@smail.iitm.ac.in",
      name: "Siddhant Toknekar",
      dept: "Evolve",
      social_links: {
        instagram: "https://www.instagram.com/token_taker/",
        linkedIn: "https://www.linkedin.com/in/abhishek-sv-69b67719a/",
        shastraMailId: "siddhant@shaastra.org",
        contact: "9130213213",
      },
      //desc: "Having been a part of Shaastra right from my very first semester at IIT Madras, it would be fair to say that the fest has essentially shaped my personal and professional life as an IITM student. The friends I have made, the managerial skills I have learnt and the last but not the least the memories I have made over the last three Shaastras have moulded me into the person I am today! ",
      imgURL: photos.ed18b031,
    },
    {
      mailId: "ce18b060@smail.iitm.ac.in",
      name: "Kranthi Kiran T",
      dept: "Finance",
      social_links: {
        instagram: "https://www.instagram.com/sonukranthy",
        shastraMailId: "kranthi.t@shaastra.org",
        contact: "6303733655",
      },
      //desc: "Some of the memorable days in the whole year that we spend and gaining new relations that last forever.",
      imgURL: photos.dummy,
    },
    {
      mailId: "ee18b022@smail.iitm.ac.in",
      name: "Nune Sahithi",
      dept: "Finance",
      social_links: {
        instagram: "https://www.intsagram.com/sahithi0022",
        shastraMailId: "sahithi@shaastra.org",
        contact: "9948812020",
      },
      //desc: "I have been a member of Shaastra for 3 years now. I have learnt a learnt along the way. It has been a wonderful journey with so many ups and downs. Looking forward for Shaastra'22.",
      imgURL: photos.ee18b022,
    },
    {
      mailId: "ce18b112@smail.iitm.ac.in",
      name: "Ayushman Sharma",
      dept: "Operations & Infrastructure Planning",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/ayushman-sharma-b1a486188",
        instagram: "https://www.instagram.com/_ayushman_sharma/",
        shastraMailId: "Ayushman@shaastra.org",
        contact: "6377340561",
      },
      //desc: "My Shaastra journey started from my first year and each year I am learning new things and skills. My coordinator year was the one when I felt a bonding with my team and decided to carry on with it and the experience have been better each year.",
      imgURL: photos.ce18b112,
    },
    {
      mailId: "ed18b050@smail.iitm.ac.in",
      name: "Rutvik Baxi",
      dept: "Operations & Infrastructure Planning",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/rutvik-baxi",
        instagram: "https://www.instagram.com/baaxzzeee/",
        shastraMailId: "rutvik@shaastra.org",
        contact: "8866419419",
      },
      //desc: "My experience with Team O&IP has been nothing less than fabulous. I joined this team in my 3rd year and have made some of my best friends and nicest memories during my journey last year in organising the first ever Online Shaastra.  OIP OP🙅\u200d♂️.",
      imgURL: photos.ed18b050,
    },
    {
      mailId: "be18b013@smail.iitm.ac.in",
      name: "Shvetha Sivaprasad",
      dept: "Publicity",
      social_links: {
        instagram: "https://www.instagram.com/shvethasivaprasad",
        facebook: "https://www.facebook.com/Shvetha S",
        shastraMailId: "shvetha@shaastra.org",
        contact: "6379764273",
      },
      //desc: "Hi, I'm Shvetha. A Malayalee settled in Chennai. Nature and the changes that happen in our environment interest me a lot. Got to explore some survival skills and the secret of having fun while making an impact, being a part of Shaastra through the last couple of years! ",
      imgURL: photos.be18b013,
    },
    {
      mailId: "ep18b006@smail.iitm.ac.in",
      name: "H Madhan Kumar",
      dept: "Publicity",
      social_links: {
        instagram: "https://www.instagram.com/madmannedme/",
        shastraMailId: "madhan@shaastra.org",
        contact: "6303564574",
      },
      //desc: "Heyy! This is Madhan. I love things out of context. My favourite emoji is 🙃. Being the publicity core, I feel responsible to ask you to recommend your friends to check out Shaastra. Do recommend. ",
      imgURL: photos.ep18b006,
    },
    {
      mailId: "ee18b138@smail.iitm.ac.in",
      name: "HARSHITHA",
      dept: "Quality Management System",
      social_links: {
        instagram: "https://www.instagram.com/harshithaa_aaa",
        shastraMailId: "harshitha@shaastra.org",
        contact: "6303344798",
      },
      //desc: "Being part of the team inspires and motivates me to work hard and be responsible:)",
      imgURL: photos.ee18b138,
    },
    {
      mailId: "ed18b053@smail.iitm.ac.in",
      name: "Shivam Maheshwari",
      dept: "Quality Management System",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/shivam-maheshwari",
        shastraMailId: "Shivam@shaastra.org",
        contact: "6264115563",
      },
      //desc: "My 'Shaastra Journey' started in my first year when I became Events-workshop manager & OIP-VIP care coordinator. Next year I applied for the Head position in OIP, and currently, I am QMS Core. I aspire to bring upon relevant changes to strengthen the quality of Shaastra and enjoy the very process:)",
      imgURL: photos.ed18b053,
    },
    {
      mailId: "ep18b005@smail.iitm.ac.in",
      name: "Baibhabi Patnaik ",
      dept: "Shows & Exhibitions",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/baibhabi-patnaik-b1563419b",
        instagram: "https://www.instagram.com/baibhabi_musical",
        shastraMailId: "baibhabi@shaastra.org",
        contact: "+91 9989591690",
      },
      //desc: "For my love of interacting with people, two years at Shaastra and counting have suited me well. The experience has been wholesome and loaded with learnings and memories. The team is family, and we have an amazing time here, organizing all innovation under one umbrella!",
      imgURL: photos.ep18b005,
    },
    {
      mailId: "ch18b036@smail.iitm.ac.in",
      name: "Aman Kumar",
      dept: "Shows & Exhibitions",
      social_links: {
        instagram: "https://www.instagram.com/aman_k07/",
        linkedIn: "https://www.linkedin.com/in/aman-kumar-17a0ba192/",
        shastraMailId: "aman@shaastra.org",
        contact: "+91 6385140247",
      },
      //desc: "From completing assigned tasks as a coordinator to managing 30 people to fulfil my vision for my team, working for Shaastra helps develop my skillset and gives unforgettable memories of insti life.",
      imgURL: photos.ch18b036,
    },
    {
      mailId: "be18b026@smail.iitm.ac.in",
      name: "Nithish Venkatesh",
      dept: "Sponsorship and PR",
      social_links: {
        linkedIn: "https://linkedin.com/in/nithish-venkatesh",
        instagram: "https://www.instagram.com/nithyanandaa ",
        shastraMailId: "nithish.venkatesh@shaastra.org",
        contact: "7200939339",
      },
      //desc: "Money can't buy happiness, but it certainly can keep the biggest Techno-Managerial fest of India running.",
      imgURL: photos.be18b026,
    },
    {
      mailId: "ch18b037@smail.iitm.ac.in",
      name: "Anandlogesh R R",
      dept: "Sponsorship and PR",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/anandlogesh-r-r/",
        instagram: "https://www.instagram.com/the_a.r.r._/",
        shastraMailId: "anandlogesh.rr@shaastra.org",
      },
      //desc: "Some parts of truth and a dash of pure lie makes the perfect lie.",
      imgURL: photos.ch18b037,
    },
  ];
  let i = 0;

  const [marker, setMarker] = React.useState({
    top: window.innerWidth > 700 ? "44px" : "13px",
  });

  const [navbar, setNavbar] = React.useState(
    window.innerWidth < 700 ? false : true
  );

  const [type, setType] = React.useState("all");

  const handleFilter = () => {
    if (navbar) setNavbar(false);
    else setNavbar(true);
  };

  const handleClick = (e) => {
    setType(e.target.attributes[0].value);
    setMarker({
      top: e.target.offsetTop + "px",
    });
  };

  return (
     <body>
     <NavBar></NavBar>
     <div
        style={{
          backgroundImage: "url('https://www.wallpaperup.com/uploads/wallpapers/2014/03/18/301510/e88533431a5e0caa6e8bd055bc60fbd1.jpg')",
          backgroundRepeat: "no-repeat",backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100vw',
          // height: '100vh',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="ContentBox">
          <h1>Meet Our Team</h1>
          <p>
            Meet the Men and Women who worked countless hours behind the scenes
            to bring you the Spectacle, that is India's biggest
            Techno-Managerial Fest.
          </p>
        </div>
        <div className="imageContainer">
          <div className="imageSlider">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((count) => {
              i += 4;
              i = i % 22;

              // console.log(i, 21 - i, (i + 4) % 22, (28 - i) % 22);
              // console.log(
              //   Profiles[i],
              //   Profiles[21 - i],
              //   Profiles[(i + 4) % 22],
              //   Profiles[(28 - i) % 22]
              // );
              return (
                <>
                  <div className="col">
                    <SliderImgBox profile={Profiles[i]} />
                    <SliderImgBox profile={Profiles[(i + 1) % 22]} />
                  </div>
                </>
              );
            })}
            {
              <div className="col">
                <SliderImgBox profile={Profiles[22]} />
                <SliderImgBox profile={Profiles[12]} />
              </div>
            }
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((count) => {
              i += 4;
              i = i % 22;

              // console.log(i, 21 - i, (i + 4) % 22, (28 - i) % 22);
              // console.log(
              //   Profiles[i],
              //   Profiles[21 - i],
              //   Profiles[(i + 4) % 22],
              //   Profiles[(28 - i) % 22]
              // );
              return (
                <>
                  <div className="col">
                    <SliderImgBox profile={Profiles[i]} />
                    <SliderImgBox profile={Profiles[(i + 1) % 22]} />
                  </div>
                </>
              );
            })}
            {
              <div className="col">
                <SliderImgBox profile={Profiles[11]} />
                <SliderImgBox profile={Profiles[22]} />
              </div>
            }
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((count) => {
              i += 4;
              i = i % 22;

              // console.log(i, 21 - i, (i + 4) % 22, (28 - i) % 22);
              // console.log(
              //   Profiles[i],
              //   Profiles[21 - i],
              //   Profiles[(i + 4) % 22],
              //   Profiles[(28 - i) % 22]
              // );
              return (
                <>
                  <div className="col">
                    <SliderImgBox profile={Profiles[i]} />
                    <SliderImgBox profile={Profiles[(i + 1) % 22]} />
                  </div>
                </>
              );
            })}
            {
              <div className="col">
                <SliderImgBox profile={Profiles[22]} />
                <SliderImgBox profile={Profiles[12]} />
              </div>
            }
          </div>
        </div>
        <div className="DetailCards">
          {navbar ? (
            <button onClick={handleFilter} className="FilterBtn">
              <FaTimes /> CLOSE
            </button>
          ) : (
            <button onClick={handleFilter} className="FilterBtn">
              <FaFilter /> FILTER
            </button>
          )}
          <div
            className="navbar"
            style={{
              display: navbar ? "flex" : "none",
            }}
          >
            <button
              style={{
                color: type === "all" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="all"
            >
              All
            </button>
            <button
              style={{
                color:
                  type === "Co-Curricular Affairs Secretary" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Co-Curricular Affairs Secretary"
            >
              Co-Curricular Affairs Secretary
            </button>
            <button
              style={{
                color: type === "Webops" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Webops"
            >
              Webops
            </button>
            <button
              style={{
                color: type === "Concept & Design" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Concept & Design"
            >
              Concept & Design
            </button>
            <button
              style={{
                color: type === "Envisage" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Envisage"
            >
              Envisage
            </button>
            <button
              style={{
                color: type === "Events & Workshops" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Events & Workshops"
            >
              Events & Workshops
            </button>
            <button
              style={{
                color: type === "Evolve" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Evolve"
            >
              Evolve
            </button>
            <button
              style={{
                color: type === "Finance" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Finance"
            >
              Finance
            </button>
            <button
              style={{
                color: type === "Publicity" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Publicity"
            >
              Publicity
            </button>
            <button
              style={{
                color:
                  type === "Operations & Infrastructure Planning"
                    ? "#000"
                    : "#fff",
              }}
              onClick={handleClick}
              data-type="Operations & Infrastructure Planning"
            >
              Operations & Infrastructure Planning
            </button>
            <button
              style={{
                color: type === "Quality Management System" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Quality Management System"
            >
              Quality Management System
            </button>
            <button
              style={{
                color: type === "Shows & Exhibitions" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Shows & Exhibitions"
            >
              Shows & Exhibitions
            </button>
            <button
              style={{
                color: type === "Sponsorship and PR" ? "#000" : "#fff",
              }}
              onClick={handleClick}
              data-type="Sponsorship and PR"
            >
              Sponsorship and PR
            </button>
            <span
              id="marker"
              style={{
                top: marker.top,
              }}
            >
              <span></span>
              <span></span>
            </span>
          </div>
          <div className="CardBox">
            {Profiles.map((profile) => {
              return <Card type={type} profile={profile} />;
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
     </body>
  );
};

export default Team;
