import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Signup(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    // Check if passwords are match
    if (password !== password2) {
      alert("The passwords you entered don't match, please try it again!");
      return;
    }

    const res = await axios.post("/api/user", { email, password });
    localStorage.setItem("token", res.data.token);
    history.push(`/`);
  };

  return (
    <div className="container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Verify Password"
            value={password2}
            onChange={e => setPassword2(e.target.value)}
          />
        </div>
        <button to="/Profile" className=" btn btn-outline-secondary btn-block">
          Sign up
        </button>
        <Link to="/Login" className="btn btn-outline-danger btn-block">
          Cancel
        </Link>
      </form>
    </div>
  );
}
