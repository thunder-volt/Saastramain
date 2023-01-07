import React, { useEffect, useState } from "react";
import "./chess.css";
// import Footer from "../../shared/Footer";
// import CustomBox from "../../shared/CustomBox";
import { useColorModeValue } from "@chakra-ui/color-mode";
// import {
//   RegisterChessMutation,
//   useCapturePaymentChessMutation,
//   useGetChessDetailsCsvQuery,
//   useRegisterChessMutation,
// } from "../../../generated/graphql";
// import {
//   Modal,
//   ModalCloseButton,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
//   useDisclosure,
// } from "@chakra-ui/react";
// import fileDownload from "js-file-download";
// import dotenv from "dotenv";
import { FaTimes } from "react-icons/fa";

// dotenv.config();

// function loadScript(src) {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// }

function ChessBlitz() {
  const theme = useColorModeValue("white", "black");
  const [isAlert, setIsAlert] = useState({
    isVisible: false,
    message: "",
  });
//   const { data: data1 } = useGetChessDetailsCsvQuery();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("role") === "Admin") {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    let ticking;
    if (isAlert.isVisible) {
      ticking = setTimeout(() => {
        setIsAlert({
          isVisible: false,
          message: "",
        });
      }, 5000);
    }
    return () => {
      clearTimeout(ticking);
    };
  }, [isAlert]);

  return (
   <div>
      <div className={`ChessBlitz ${theme}`}>
        <div className="ChessBlitz_landing">
          <div className="contentBox">
            <div className="checkboard">
              <div className="checkboard-tile-1">
                <div>BLITZ</div>
              </div>
              <div className="checkboard-tile-2">

              </div>
              <div className="checkboard-tile-2">

              </div>
              <div className="checkboard-tile-1">
                <div>CHESS</div>
              </div>
              
            </div>
            <h2>SHAASTRA 2023</h2>
            <p>
              This year, Shaastra, IIT Madras, is hosting the Online Blitz Open
              Chess Championship! Last year's competition drew over 450 players
              from all over the world, including several notable grand masters.
              While we continue to fight the pandemic, we've chosen to hold the
              event online again this year. The competition offers a total prize
              pool of INR 85000, as well as various goodies. Don't miss out on
              your chance to play in the year's largest online blitz tournament!
            </p>
            <button
              onClick={() =>
                setIsAlert({
                  isVisible: true,
                  message: "Registration has been closed!!",
                })
              }
            >
              Registration Closed
            </button>
            {/* {isAdmin === true ? (
              <button
                style={{
                  padding: "10px 20px",
                  width: "fit-content",
                  backgroundColor: "#311c1b",
                  borderRadius: "4px",
                  marginLeft: "20px",
                }}
                onClick={() => {
                  fileDownload(
                    data1?.getChessDetailsCSV!,
                    `BlitzChess_regristants.csv`
                  );
                }}
              >
                Download Users Data CSV
              </button>
            ) : null} */}
          </div>
        </div>
        <div className="ChessBlitz_Overview">
          <div className="contentBox">
            <div className="card">
              <h4>Prize Money</h4>
              <h2>
                85k <span>+ Chess Premium Memberships</span>
              </h2>
            </div>
            <div className="card">
              <h4>Registration Fee</h4>
              <h2>INR 200</h2>
            </div>
            <div className="card">
              <h4>Event Date</h4>
              <h2>
                16th <span>January 2023</span>
              </h2>
            </div>
            <div className="card">
              <h4>Event Time</h4>
              <h2>9 AM - 12 PM</h2>
            </div>
            <div className="card">
              <h4>Format</h4>
              <h2>
                3 min + 1 sec <span>12 rounds, Swiss tournament</span>
              </h2>
            </div>
            <div className="card">
              <h4>Platform</h4>
              <h2>Chess.com</h2>
            </div>
          </div>
        </div>
        <div className="ChessBlitz_PrizeDistribution">
          <h2>Prize Distribution</h2>
          <div className="main_category">
            <h4>Main Category : </h4>
            <div className="cardBox">
              <div className="card">
                <h4>1st</h4>
                <h3>Rs 20000</h3>
              </div>
              <div className="card">
                <h4>2nd</h4>
                <h3>Rs 15000</h3>
              </div>
              <div className="card">
                <h4>3rd</h4>
                <h3>Rs 10000</h3>
              </div>
              <div className="card">
                <h4>4th</h4>
                <h3>Rs 5000</h3>
              </div>
              <div className="card">
                <h4>5th</h4>
                <h3>Rs 3000</h3>
              </div>
              <div className="card">
                <h4>6th</h4>
                <h3>Rs 1500</h3>
              </div>
              <div className="card">
                <h4>7th - 11th</h4>
                <h3>Rs 1250</h3>
              </div>
              <div className="card">
                <h4>12th - 16th</h4>
                <h3>Rs 1000</h3>
              </div>
              <div className="card">
                <h4>17th - 21st</h4>
                <h3>Rs 750</h3>
              </div>
              <div className="card">
                <h4>22th - 25th</h4>
                <h3>Rs 500</h3>
              </div>
            </div>
          </div>
          <div className="rated_category">
            <h4>Rated Categories : </h4>
            <div className="twrapper">
              <table>
                <tr>
                  <td>Rank</td>
                  <td>Unrated</td>
                  <td>Below 1400</td>
                  <td>1400 - 1600</td>
                  <td>1600 - 1800</td>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>1000</td>
                  <td>1000</td>
                  <td>1000</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>750</td>
                  <td>750</td>
                  <td>750</td>
                  <td>750</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>500</td>
                  <td>500</td>
                  <td>500</td>
                  <td>500</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="rated_category">
            <h4>Age Categories : </h4>
            <div className="twrapper">
              <table>
                <tr>
                  <td>Rank</td>
                  <td>U - 16</td>
                  <td>U - 14</td>
                  <td>U - 12</td>
                  <td>U - 10</td>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>2 months Chess.com subscription</td>
                  <td>2 months Chess.com subscription</td>
                  <td>2 months Chess.com subscription</td>
                  <td>2 months Chess.com subscription</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                  <td>1 month Chess.com subscription</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="rated_category">
            {/* <h4>Other Categories : </h4> */}
            <div className="twrapper">
              <table>
                <tr>
                  <td>Rank</td>
                  <td>Best Woman</td>
                  <td>Best Veteran</td>
                  <td>Best IITM</td>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>1000</td>
                  <td>1000</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>750</td>
                  <td>750</td>
                  <td>2 months Chess.com subscription</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="ChessBlitz_Contact">
          <h2>Contact</h2>
          <div className="ContactBox">
            <div className="emailBox">
              <h4>Email</h4>
              <p>rapidchess@shaastra.org</p>
            </div>
            <div className="emailBox">
              <h4>Phone</h4>
              <p>
                <span>Shyam Sundar PB : </span>
                <span>+91 7397259369</span>
              </p>
              <p>
                <span>Aditya S Sadhu : </span>
                <span>+91 9566129422</span>
              </p>
            </div>
          </div>
        </div>
        {/* <Footer
          designed={[{ name: "Rohit", mail: "cs19b038@smail.iitm.ac.in" }]}
        /> */}
        <div
          className={`AlertPopupsContainer ${
            isAlert.isVisible ? "active" : ""
          }`}
        >
          <button
            onClick={() => {
              setIsAlert({
                isVisible: false,
                message: "",
              });
            }}
          >
            <FaTimes />
          </button>
          <div className="alertBox">{isAlert.message}</div>
        </div>
      </div>
    </div>
  );
}

export default ChessBlitz;
