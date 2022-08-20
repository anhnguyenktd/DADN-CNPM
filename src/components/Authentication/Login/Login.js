import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from  "../../../firebase";

//command: npm install --save react-firebase-hooks
import { useAuthState } from "react-firebase-hooks/auth";

import "../../../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading, navigate]);
  return (
    <div className="login">
      <div>
        <h2 id="heading1">Đăng nhập</h2>
        <div>
          <form action className="myForm" name="myForm">
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
              <input type="button" className="bttn" value="Login" onClick={() => logInWithEmailAndPassword(email, password)} />
              <input type="button" className="bttn register" value="Google" onClick={signInWithGoogle} />
              <div className="likkn">
                <div >
                  <Link to="/reset">Quên mật khẩu</Link>
                </div>
                <div>
                  <Link to="/register">Đăng ký</Link> 
                </div>
              </div>
            <div>
        </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;