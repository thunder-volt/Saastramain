import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SIGN_UP = gql`
  mutation Mutation($data: CreateUserInput!) {
    createUser(data: $data)
  }
`;

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    college: "",
    department: "",
    city: "",
    state: "",
    address: "",
  });
  const navigate = useNavigate();
  const [signup, { data, loading, error }] = useMutation(SIGN_UP);

  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({
        variables: {
          data: {
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            password: user.password,
            college: user.college,
            department: user.department,
            city: user.city,
            state: user.state,
            address: user.address,
          },
        },
      }).then((res) => {
        if (res.data?.createUser) {
          navigate("/verify");
        }
      });
    } catch (err) {
      console.log(`error--->${err}`);
    }
  };

  if (error) {
    return <p>{error.message}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (data) {
    navigate("/edit");
  }

  return (
    <section id="signup">
      <center>
        <div className="login-signup">
          <h1>SIGNUP</h1>
        </div>
      </center>
      <center>
        <form className="signup_form" onSubmit={handleSubmit}>
          <input
            className="type-1 name"
            placeholder="NAME"
            outline="none"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
          <div>
            <input
              className="type-3-1 type-3 email"
              placeholder="EMAIL ID"
              outline="none"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></input>
            <input
              className="type-3-2 type-3 phone"
              placeholder="PHONE NO."
              outline="none"
              value={user.mobile}
              onChange={(e) => setUser({ ...user, mobile: e.target.value })}
            ></input>
          </div>
          <input
            className="type-1 password"
            placeholder="PASSWORD"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
          <input
            className="type-1 password"
            placeholder="CONFIRM PASSWORD"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          ></input>
          <div>
            {user.password && confirm && user.password !== confirm ? (
              <div class="password-alert">Passwords don't match</div>
            ) : null}
          </div>
          <div>
            <input
              className="type-3-1 type-3 college"
              placeholder="COLLEGE"
              outline="none"
              value={user.college}
              onChange={(e) => setUser({ ...user, college: e.target.value })}
            ></input>
            <input
              className="type-3-2 type-3 branch"
              placeholder="DEPARTMENT"
              outline="none"
              value={user.department}
              onChange={(e) => setUser({ ...user, department: e.target.value })}
            ></input>
          </div>
          <div>
            <input
              className="type-3-1 type-3 city"
              placeholder="CITY"
              outline="none"
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            ></input>
            <input
              className="type-3-2 type-3 state"
              placeholder="STATE"
              outline="none"
              value={user.state}
              onChange={(e) => setUser({ ...user, state: e.target.value })}
            ></input>
          </div>
          <input
            className="type-1 address"
            placeholder="ADDRESS"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          ></input>
          {user.password && confirm && user.password !== confirm ? (
            <button className="type-2" type="submit" disabled>
              SIGN UP
            </button>
          ) : (
            <button className="type-2" type="submit">
              SIGN UP
            </button>
          )}
        </form>
      </center>
    </section>
  );
};

export default Signup;
