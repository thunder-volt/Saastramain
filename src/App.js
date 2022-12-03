import Login from "./Components/login";
import Signup from "./Components/signup";
import './App.css';

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
				<Login />
				<Signup />
	</div>

  );
}

export default App;