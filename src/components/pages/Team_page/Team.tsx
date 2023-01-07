import * as React from "react";
//import { useColorModeValue } from "@chakra-ui/react";
//import { ReactComponent as DiceOutlineDarkAnimated } from "./../../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
//import { ReactComponent as DiceOutlineLightAnimated } from "./../../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import "../../../styles/Team_styles/Team.css";
import Card from '../../../components/pages/Team_page/Card';
import SliderImgBox from "./SliderImgBox";
import photos from "../Team_page/photos";
import { FaFilter, FaTimes } from "react-icons/fa";
import NavBar from "../../navigation/NavBar";
import Footer from "../../Footer";
import TopBar from "../../TopBar";
interface Props {}

const Team = (props: Props) => {
  //const colorTheme = useColorModeValue("light", "dark");

  //const Logo = useColorModeValue(
    //DiceOutlineDarkAnimated,
    //DiceOutlineLightAnimated);

  let Profiles = [
    {
      id:1,
      name: "Baibhabi Patnaik",
      // role: "Core",
      dept: "Co-Curricular Affairs Secretary",
      mailId: "maitto:sec_cocur@smail.iitm.ac.in",
      social_links: {
        whatsapp:"https://wa.me/9989591690",
        mailid: "mailto:sec_cocur@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/baibhabi-patnaik-b1563419b/",
        instagram: "https://www.instagram.com/baibhabi_patnaik",
      },
      //desc: "",
      imgURL: photos.cocas_baibhabi,
    },
    {
      id:2,
      mailId: "mailto:be20b020@smail.iitm.ac.in",
      name: "Krithikaa",
      dept: "Webops",
      social_links: {
        whatsapp:"https://wa.me/8925693976",
        mailid: "mailto:be20b020@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/krithikaa-senthilkumar-92ba6b202/",
        instagram: "https://www.instagram.com/krithsss22",
      },
      //desc: "",
      imgURL: photos.webops_krithikaa,
    },
    {
      id:3,
      mailId: "mailto:nikithakrishna.ark@gmail.com",
      name: "Nikitha Krishna A",
      dept: "Concept & Design",
      social_links: {
        whatsapp:"https://wa.me/9481407245",
        mailid: "mailto:nikithakrishna.ark@gmail.com",
        linkedIn: "https://www.linkedin.com/in/nikitha-krishna-9a3776187",
        instagram: "https://www.instagram.com/__nikithakrishna",
      },
      //desc: "",
      imgURL: photos.candd_nikitha,
    },
    {
      id:4,
      mailId: "mailto:koyyeprashanth@gmail.com",
      name: "Prashanth K",
      dept: "Concept & Design",
      social_links: {
        whatsapp:"https://wa.me/9392634527",
        mailid: "mailto:koyyeprashanth@gmail.com",
        linkedIn: "https://www.linkedin.com/in/prashanth-koyye-534400213",
        instagram: "https://www.instagram.com/_im.kp._",
      },
      //desc: "",
      imgURL: photos.candd_prashanth,
    },
    {
      id:5,
      mailId: "mailto:me19b061@smail.iitm.ac.in",
      name: "Pavithra Mohan",
      dept: "Envisage",
      social_links: {
        whatsapp:"https://wa.me/6385140235",
        mailid: "mailto:me19b061@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/pavithra-mohan-2445551a5",
        instagram: "https://www.instagram.com/_pavithra_mohan",
      },
      //desc: "",
      imgURL: photos.envisage_pavithra,
    },
    {
      id:6,
      mailId: "mailto:shihad080601@gmail.com",
      name: "Mohamed Shihad P",
      dept: "Envisage",
      social_links: {
        whatsapp:"https://wa.me/9072775601",
        mailid: "mailto:shihad080601@gmail.com",
        linkedIn: "https://www.linkedin.com/in/mohamed-shihad-p-6a19411a9",
        instagram: "https://www.instagram.com/shihad_pilatheth",
      },
      //desc: "",
      imgURL: photos.envisage_shihad,
    },
    {
      id:7,
      mailId: "mailto:ee19b036@smail.iitm.ac.in",
      name: "Hema Landa",
      dept: "Events & Workshops",
      social_links: {
        whatsapp:"https://wa.me/8688618113",
        mailid: "mailto:ee19b036@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/hema-landa-7ba1b11b4",
        instagram: "https://www.instagram.com/hema_242424",
      },
      //desc: "",
      imgURL: photos.eandw_hema,
    },
    {
      id:8,
      mailId: "mailto:kudaripavani27@gmail.com",
      name: "Kudari Pavani",
      dept: "Events & Workshops",
      social_links: {
        whatsapp:"https://wa.me/9390321494",
        mailid: "mailto:kudaripavani27@gmail.com",
        linkedIn: "https://www.linkedin.com/in/kudari-pavani-27383a203/",
        instagram: "https://www.instagram.com/pavani_kudari",
      },
      //desc: "",
      imgURL: photos.eandw_kudari,
    },
    {
      id:9,
      mailId: "mailto:me19b042@smail.iitm.ac.in",
      name: "Nithin",
      dept: "Events & Workshops",
      social_links: {
        whatsapp:"https://wa.me/9361334004",
        mailid: "mailto:me19b042@smail.iitm.ac.in",
        linkedIn: "https://https://www.linkedin.com/in/nithin1139/",
        instagram: "https://www.instagram.com/_n.ithi.n_",
      },
      //desc: "",
      imgURL: photos.eandw_nithin,
    },
    {
      id:10,
      mailId: "mailto:mahboob@smail.iitm.ac.in",
      name: "Mahboob Ali",
      dept: "Evolve",
      social_links: {
        whatsapp:"https://wa.me/9207317647",
        mailid: "mailto:mahboob@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/mahboob-ali-a483371a6/",
        instagram: "https://www.instagram.com/ali_mahbu",
      },
      //desc: "",
      imgURL: photos.evolve_mahboob,
    },
    {
      id:11,
      mailId: "mailto:pranavsrichinta@smail.iitm.ac.in",
      name: "Pranav Srichinta",
      dept: "Evolve",
      social_links: {
        whatsapp:"https://wa.me/7619396661",
        mailid: "mailto:pranavsrichinta@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/pranav-srichinta/",
        instagram: "https://www.instagram.com/pranav.cooks",
      },
      //desc: "",
      imgURL: photos.evolve_pranav,
    },
    {
      id:12,
      mailId: "mailto:be19b026@smail.iitm.ac.in",
      name: "Papisetty Lakshmi Sowmya Sri",
      dept: "Finance",
      social_links: {
        whatsapp:"https://wa.me/8897339866",
        mailid: "mailto:be19b026@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/papisetty-lakshmi-sowmya-sri-8418b61a3",
        instagram: "https://www.instagram.com/sowmya._.papisetty",
      },
      //desc: "",
      imgURL: photos.finance_soumya,
    },
    {
      id:13,
      mailId: "mailto:ch19b102@smail.iitm.ac.in",
      name: "Mahesh R",
      dept: "Finance",
      social_links: {
        whatsapp:"https://wa.me/9344814661",
        mailid: "mailto:ch19b102@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/mahesh-r-21a4981a4/",
        instagram: "https://www.instagram.com/mahesh_ram_",
      },
      //desc: "",
      imgURL: photos.finance_mahesh,
    },
    {
      id:14,
      mailId: "mailto:bs19b004@smail.iitm.ac.in",
      name: "Anchal Pandey",
      dept: "Operations & Infrastructure Planning",
      social_links: {
        whatsapp:"https://wa.me/6387640233",
        mailid: "mailto:bs19b004@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/anchal-pandey-770b0b1b6",
        instagram: "https://www.instagram.com/aa_chall",
      },
      //desc: "",
      imgURL: photos.oandip_anchal,
    },
    {
      id:15,
      mailId: "mailto:bs19b030@smail.iitm.ac.in",
      name: "Tushar",
      dept: "Operations & Infrastructure Planning",
      social_links: {
        whatsapp:"https://wa.me/7737699201",
        mailid: "mailto:bs19b030@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/tushar-balani-a22880192",
        instagram: "./",
      },
      //desc: "",
      imgURL: photos.oandip_tushar,
    },
    {
      id:16,
      mailId: "mailto:me19b124@smail.iitm.ac.in",
      name: "Vyashnavi",
      dept: "Publicity",
      social_links: {
        whatsapp:"https://wa.me/6301308213",
        mailid: "mailto:me19b124@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/rupa-kashameni-1495831b0",
        instagram: "https://www.instagram.com/rupa_lucky07",
      },
      //desc: "",
      imgURL: "",
    },
    {
      id:17,
      mailId: "mailto:me19b124@smail.iitm.ac.in",
      name: "Rupa Lakshmi",
      dept: "Quality Management System",
      social_links: {
        whatsapp:"https://wa.me/6301308213",
        mailid: "mailto:me19b124@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/rupa-kashameni-1495831b0",
        instagram: "https://www.instagram.com/rupa_lucky07",
      },
      //desc: "",
      imgURL: photos.qms_rupa,
    },
    {
      id:18,
      mailId: "mailto:ch19b023@smail.iitm.ac.in",
      name: "S U Mrinalini",
      dept: "Shows & Exhibitions",
      social_links: {
        whatsapp:"https://wa.me/8431899478",
        mailid: "mailto:ch19b023@smail.iitm.ac.in",
        linkedIn: "www.linkedin.com/in/mrinalini-shivangi",
        instagram: "https://www.instagram.com/mrinalini.shivangi",
      },
      //desc: "",
      imgURL: photos.sande_mrinalini,
    },
    {
      id:19,
      mailId: "mailto:sauban.asharaf@gmail.com",
      name: "Sauban Asharaf",
      dept: "Shows & Exhibitions",
      social_links: {
        whatsapp:"https://wa.me/8137025866",
        mailid: "mailto:sauban.asharaf@gmail.com",
        linkedIn: "https://www.linkedin.com/in/sauban-asharaf-98a42a1b1/",
        instagram: "https://www.instagram.com/_sauban",
      },
      //desc: "",
      imgURL: photos.sande_sauban,
    },
    {
      id:20,
      mailId: "mailto:ed19b002@smail.iitm.ac.in",
      name: "Anushka Pillai",
      dept: "Sponsorship and PR",
      social_links: {
        whatsapp:"https://wa.me/7987184709",
        mailid: "mailto:ed19b002@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/anushka-pillai-639a341a8",
        instagram: "https://www.instagram.com/anushka__pillai",
      },
      //desc: "",
      imgURL: photos.sandp_anushka,
    },
    {
      id:20,
      mailId: "mailto:ed19b065@smail.iitm.ac.in",
      name: "Saicharan",
      dept: "Sponsorship and PR",
      social_links: {
        whatsapp:"https://wa.me/8123719967",
        mailid: "mailto:ed19b065@smail.iitm.ac.in",
        linkedIn: "https://www.linkedin.com/in/saicharan-g-1b59b91b3",
        instagram: "https://www.instagram.com/saic2804",
      },
      //desc: "",
      imgURL: photos.sandp_saicharan,
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
      <TopBar/>
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
                  <div className="col-team">
                    <SliderImgBox profile={Profiles[i]} />
                    <SliderImgBox profile={Profiles[(i + 1) % 22]} />
                  </div>
                </>
              );
            })}
            {
              <div className="col-team">
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
                  <div className="col-team">
                    <SliderImgBox profile={Profiles[i]} />
                    <SliderImgBox profile={Profiles[(i + 1) % 22]} />
                  </div>
                </>
              );
            })}
            {
              <div className="col-team">
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
                  <div className="col-team">
                    <SliderImgBox profile={Profiles[i]} />
                    <SliderImgBox profile={Profiles[(i + 1) % 22]} />
                  </div>
                </>
              );
            })}
            {
              <div className="col-team">
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
            className="navbar-team"
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
              return <Card key={profile.id} type={type} profile={profile} />;
            })}
          </div>
        </div>
      </div>
      <Footer designed={[{name: " ROHIT",mail:"mailto:ce21b065@smail.iitm.ac.in"},{name: " JUANA ",mail:"mailto:ce21b065@smail.iitm.ac.in"}]}/>
     </body>
  );
};

export default Team;
