import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const RESET = gql`
  mutation ResetPassword($data: ResetPasswordInput!) {
    resetPassword(data: $data)
  }
`;

const ResetPassword = () => {
  const [resetFunction, { data, loading, error }] = useMutation(RESET);
  const [user, setUser] = useState({ email: "", password: "", otp: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(user);
    resetFunction({
      variables: {
        data: { email: user.email, newPassword: user.password, otp: user.otp },
      },
    });
  };

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (data) {
    navigate("/");
  }
  return (
    <section id="login">
      <center>
        <div className="login-signup">
          <h2>RESET PASSWORD</h2>
        </div>
      </center>
      <center>
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            className="type-1 email"
            placeholder="EMAIL ID"
            outline="none"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <input
            className="type-1 email"
            placeholder="OTP"
            outline="none"
            value={user.otp}
            onChange={(e) => setUser({ ...user, otp: e.target.value })}
          ></input>
          <div className="password">
            <input
              className="type-1 password"
              type="password"
              placeholder="PASSWORD"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></input>
          </div>
          <button type="submit" className="type-2">
            CONFIRM RESET
          </button>
        </form>
      </center>
    </section>
  );
};

export default ResetPassword;
