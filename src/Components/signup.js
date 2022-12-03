import React from "react";

const Signup = () => {
  return (
    <section id="signup">
        <center><div className="login-signup"><h1>SIGNUP</h1></div></center>
        <center>
            <form className="signup_form">
                <input className="type-1 name" placeholder="NAME" outline="none"></input>
                <div>
                  <input className="type-3-1 type-3 email" placeholder="EMAIL ID" outline="none"></input>
                  <input className="type-3-2 type-3 phone" placeholder="PHONE NO." outline="none"></input>
                </div>
                <input className="type-1 password" placeholder="PASSWORD"></input>
                <input className="type-1 password" placeholder="CONFIRM PASSWORD"></input>
                <div>
                  <input className="type-3-1 type-3 college" placeholder="COLLEGE" outline="none"></input>
                  <input className="type-3-2 type-3 branch" placeholder="BRANCH" outline="none"></input>
                </div>
                <div>
                  <input className="type-3-1 type-3 city" placeholder="CITY" outline="none"></input>
                  <input className="type-3-2 type-3 state" placeholder="STATE" outline="none"></input>
                </div>
                <input className="type-1 address" placeholder="ADDRESS"></input>
                <button className="type-2">SIGN UP</button>
            </form>
        </center>
    </section>
  );
};

export default Signup;
