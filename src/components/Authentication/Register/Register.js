import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../firebase";
import "../../../styles/Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading, navigate]);
  
  return (


<div className="register">
<div>
  <h1 id="heading1">Register Here</h1>
  <div>
    <form action className="myForm" name="myForm">
      <div className="input-container">
        <i className="fa fa-envelope icon" />
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="input-field" required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-container">
        <i className="fa fa-envelope icon" />
        <input type="text" placeholder="Email" name="email" className="input-field" required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-container">
        <i className="fa fa-key icon" />
        <input type="password" placeholder="Password" name="password" className="input-field" required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <input type="button" className="bttn" value="Register" onClick={register} />
        <input type="button" className="bttn register_btn" value="Google" onClick={signInWithGoogle} />
        <div>
          Already have an account!! <Link to="/Login">Login</Link> now.
        </div>
      </div>
    </form>
  </div>
</div>
</div>
);
}
export default Register;