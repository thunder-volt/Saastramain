import React from "react";

const Login = () => {
  return (
    <section id="login">
        <center><div className="login-signup"><h1>LOGIN</h1></div></center>
        <center>
            <form className="login_form">
                <input className="type-1 email" placeholder="EMAIL ID" outline="none"></input>
                <input className="type-1 password" placeholder="PASSWORD"></input>
                <button className="type-2">LOG IN</button>
            </form>
        </center>
    </section>
  );
};

export default Login;
