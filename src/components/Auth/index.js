import React, { useState } from "react";
import "./index.css";
import { Provider } from "react-redux";
import { auth, provider } from "../../firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignInGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        const user = res.user;
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(error);
        // ...
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setLoading(false);
          // navigate("/");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className="auth">
      <div className="auth-container">
        <p>Add another way to log in using any of the following services</p>
        <div className="sign-options">
          <div
            onClick={handleSignInGoogle}
            className="single-options"
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ marginLeft: "5px" }}
              src="https://img.icons8.com/?size=512&id=17949&format=png"
              alt="google"
            />
            <p style={{ padding: "10px" }}>Login with Google</p>
          </div>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                <div className="input-field">
                  <p>Username</p>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  style={{ marginTop: "10px" }}
                  onClick={handleRegister}
                  disabled={loading}
                >
                  {loading ? "Registering.." : "Register"}
                </button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  style={{ marginTop: "10px" }}
                  onClick={handleSignIn}
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Login"}
                </button>
              </>
            )}
            <p
              onClick={() => setRegister(!register)}
              style={{
                marginTop: "10px",
                textAlign: "center",
                textDecoration: "underline",
                cursor: "pointer",
                color: "#095ff",
              }}
            >
              {register ? "Login" : "Register"}?
            </p>
          </div>
        </div>
        {error !== "" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;
