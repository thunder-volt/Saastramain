import Login from "./Components/login"
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

import Exhibition from "./Components/Exhibition"
import Envisage from './Components/Envisage'
import TIF from "./Components/TIF"
import Profile from "./Components/Profile"
import Events from "./Components/EventsLanding"
import EventsLanding from "./Components/EventsLanding";
import WorkshopsLanding from "./Components/WorkshopsLanding"
import Team from "./Components/pages/Team_page/Team.tsx";
import Spons from "./Components/Spons"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/edit" element={<EditUser />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/envisage' element={<Envisage />} />
          <Route path='/exhibition' element={<Exhibition />} />
          <Route path='/tif' element={<TIF />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/events' element={<EventsLanding />} />
          <Route path='/workshops' element={<WorkshopsLanding />} />
          <Route path='/team' element={<Team />} />
          <Route path='/sponsors' element={<Spons />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/forgotpassword/resetpassword"
            element={<ResetPassword />}
          />
          <Route path="/verify" element={<Verify />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/addevent" element={<AddEvent />} />
          <Route path="/admin/edit/:id" element={<EditEvent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
