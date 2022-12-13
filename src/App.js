import Login from "./components/login"
import Signup from "./components/signup";
import "./App.css";
import EditUser from "./components/EditUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Envisage from './components/Envisage'

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
