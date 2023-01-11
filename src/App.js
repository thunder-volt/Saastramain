import Login from "./components/login";
import Signup from "./components/signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Verify from "./components/Verify";
import Admin from "./components/Admin";
import EditUser from "./components/EditUser";
import AddEvent from "./components/AddEvent";
import EditEvent from "./components/EditEvent";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PayRegister from "./components/payRegister";
import Exhibition from "./components/Exhibition";
import Envisage from "./components/Envisage";
import TIF from "./components/TIF";
import Profile from "./components/Profile";
import Events from "./components/EventsLanding";
import EventsLanding from "./components/EventsLanding";
import WorkshopsLanding0 from "./components/WorkshopsLanding";
import Team from "./components/pages/Team_page/Team.tsx";
import Spons from "./components/Spons";
import Privacy from "./components/policies/Privacy";
import Refund from "./components/policies/Refund";
import Shipping from "./components/policies/Shipping";
import Terms from "./components/policies/TermsConditions";
import Vastra from "./components/vastra";
import Homepage from "./components/Homepage";
import ProfileEdit from "./components/ProfileEdit";
import Workshop from "./components/Workshop";
import WorkshopsLanding from "./components/WorkshopsLanding"
import GetCSV from "./components/Getcsv";
import ChessBlitz from "./blitz-chess";

import Temp from "./components/tempHome";

import Contact from "./Contact";
import React, { useState, useEffect } from "react";
import ReactGA from 'react-ga';

import { Modal2 } from "./components/Modal2";
import { Container, ButtonModal } from "./components/modalContainer";

const TRACKING_ID = "UA-220438183-5";
ReactGA.initialize(TRACKING_ID);

function App() {
  const [auth, setAuth] = useState("");
  const verifier = localStorage.getItem("role") || "";

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    setAuth(localStorage.getItem("role"));
    console.log(verifier);
  }, [verifier]);
  const [showModal2, setShowModal2] = useState(false);
  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };

  return (
    <div>


      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/edit" element={<ProfileEdit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/envisage" element={<Envisage />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/tif" element={<TIF />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<EventsLanding />} />
          <Route path="/workshops" element={<WorkshopsLanding />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Spons />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/forgotpassword/resetpassword"
            element={<ResetPassword />}
          />
          <Route path="/verify" element={<Verify />} />
          <Route path="/policies/Privacy" element={<Privacy />} />
          <Route path="/policies/Shipping" element={<Shipping />} />
          <Route path="/policies/Terms" element={<Terms />} />
          <Route path="/policies/Refund" element={<Refund />} />
          <Route path="/verify" element={<Verify />} />
          {/* <Route path="/pay/:id" element={<PayRegister />} /> */}
          <Route path="/socialendeavours" element={<Vastra />} />
          <Route path="/blitzchess" element={<ChessBlitz />} />
        </Routes>
        {auth === "admin" && (
          <Routes>
            <Route path="/getcsv" element={<GetCSV />} />
            <Route path="/admin/workshops" element={<Workshop />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/addevent" element={<AddEvent />} />
            <Route path="/admin/edit/:id" element={<EditEvent />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
