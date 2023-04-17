import React from "react";
import "./Login.css";
//import logo from "../../assets/sakura-transparent.png";
import { useState } from "react";
//import Input from "../Input/Input";
//import Bouton from "../Bouton/Bouton";
/*import { Link, useNavigate } from "react-router-dom";
import { Fade } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
*/

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!email || !password) return setErrorMessage("Champs vides, veuillez réessayer.");

    // Si les deux champs sont remplis, on commence à vérifier les logins.
    if (email && password) {

      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
          method: "POST",
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password})
        });

        const data = await res.json();

        if(res.status === 200) {
          setUser({id: data.id, pseudo: data.pseudo, email});
          navigate(`/accueil`);
        } else if (res.status === 400) {
          setErrorMessage(data.errorMessage);
        }
      } catch (e) {
        console.log(e);
        setErrorMessage("Une erreur est survenue, veuillez réessayer.");
      }
      
    }
  };

  return (
    <Fade in={true} timeout={400}>
      <div className="main-container-login">
        <div className="logo-section">
          <img src={logo} alt="" className="login-logo" />
          <span className="app-title">Sakura</span>
        </div>
        <form className="login-section" onSubmit={handleSubmit}>
          <div className="email-section">
            <label htmlFor="email">E-mail : </label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="styled-input"
            />
          </div>

          <div className="password-section">
            <label htmlFor="password">Mot de passe : </label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="styled-input"
            />
          </div>
          <Bouton type="submit" value="Se connecter" className="styled-btn" />
          <span style={{ color: "red", textAlign: "center" }}>
            {errorMessage ? errorMessage : null}
          </span>
          <span className="text-redirect">
            Pas encore de compte ?{" "}
            <Link to="/signup">
              <span className="text-sign-up">S'inscrire</span>
            </Link>
          </span>
        </form>
      </div>
    </Fade>
  );
}

export default Login;