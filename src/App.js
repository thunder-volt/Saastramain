import Login from "./Components/login"
import Signup from "./Components/signup";
import "./App.css";
import EditUser from "./Components/EditUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Exhibition from "./Components/Exhibition"
import Envisage from './Components/Envisage'
import TIF from "./Components/TIF"
import Profile from "./Components/Profile"
import Events from "./Components/EventsLanding"
import EventsLanding from "./Components/EventsLanding";
import WorkshopsLanding from "./Components/WorkshopsLanding"
import Team from "./Components/pages/Team_page/Team";
import Spons from "./Components/Spons"

function App() {
  return (
    <div>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Shaastra 2023</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/static/styles/styles.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" />
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
