import Login from "./Components/login";
import Signup from "./Components/signup";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import Verify from "./Components/Verify";
import Admin from "./Components/Admin";
import EditUser from "./Components/EditUser";
import AddEvent from "./Components/AddEvent";
import EditEvent from "./Components/EditEvent";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PayRegister from "./Components/payRegister";
import Exhibition from "./Components/Exhibition";
import Envisage from "./Components/Envisage";
import TIF from "./Components/TIF";
import Profile from "./Components/Profile";
import Events from "./Components/EventsLanding";
import EventsLanding from "./Components/EventsLanding";
import WorkshopsLanding from "./Components/WorkshopsLanding";
import Team from "./Components/pages/Team_page/Team.tsx";
import Spons from "./Components/Spons";
import Privacy from "./Components/policies/Privacy";
import Refund from "./Components/policies/Refund";
import Shipping from "./Components/policies/Shipping";
import Terms from "./Components/policies/TermsConditions";
import Vastra from "./Components/vastra";
import Homepage from "./Components/Homepage";
import ProfileEdit from "./Components/ProfileEdit";
import Workshop from "./Components/Workshop";

import Temp from "./Components/tempHome";

import Contact from "./Contact";


import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal2 } from './Components/Modal2';


const Container = styled.div`
display: flex;
justify-content: center;
  align-items: center;
  height: 10vh;
  float: right;
`;

const ButtonModal = styled.button`
  position: absolute;
  right:30px;
  bottom:30px;
  min-width: 75px;
  padding: 10px 25px;
  border-radius: 4px;
  border: none;
  background: linear-gradient(224.52deg, #0B0454 1.63%, #7E10B3 70.6%, rgba(130, 16, 176, 0.88) 90.31%, rgba(162, 17, 156, 0.82) 101.2%);;
  color: #fff;
  font-size: 24px;
  cursor: pointer;  
  transform: rotate(0deg);
`;

function App() {
  const [showModal2, setShowModal2] = useState(false);

  const openModal2 = () => {
    setShowModal2(prev => !prev);
  };
  return (
    <div>
    
      <ButtonModal onClick={openModal2}>SALES!</ButtonModal>
      <Container>
        <Modal2 showModal2={showModal2} setShowModal2={setShowModal2} />
      </Container>

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
          <Route path="/admin/workshops" element={<Workshop />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/policies/Privacy" element={<Privacy />} />
          <Route path="/policies/Shipping" element={<Shipping />} />
          <Route path="/policies/Terms" element={<Terms />} />
          <Route path="/policies/Refund" element={<Refund />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/pay/:id" element={<PayRegister />} /> */}
          <Route path="/admin/addevent" element={<AddEvent />} />
          <Route path="/admin/edit/:id" element={<EditEvent />} />
          <Route path="/socialendeavours" element={<Vastra />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
