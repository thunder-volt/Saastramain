import Login from "./Components/login";
import Signup from "./Components/signup";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import Verify from "./Components/Verify";
import Admin from "./Components/Admin";
import "./App.css";
import EditUser from "./Components/EditUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/forgotpassword/resetpassword"
            element={<ResetPassword />}
          />
          <Route path="/verify" element={<Verify />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
