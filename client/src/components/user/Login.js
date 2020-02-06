import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = { email, password };
    const res = await axios.post("/api/user/login", formData);
    if (res.data) {
      localStorage.setItem("token", res.data.token);
      const user = res.data.user;
      history.push(`/`);
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <div className="box-container">
      <br></br>
      <h1>Login</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-outline-danger btn-block">Login</button>
        <Link className="btn btn-outline-secondary btn-block" to="/Signup">
          Register
        </Link>
      </form>
    </div>
  );
}
