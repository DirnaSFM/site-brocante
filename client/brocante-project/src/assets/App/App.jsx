import React, { useState } from 'react';
import './App.css';
//import Splashscreen from "../Splashscreen/Splashscreen";
import Login from "../Login/login";
/*import Inscription from "../Inscription/Inscription";
import Accueil from "../Accueil/Accueil";
import MangaDetail from "../MangaDetail/MangaDetail";
import Parcourir from "../Parcourir/Parcourir";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MangaReader from "../MangaReader/MangaReader";
import ErrorPage from "../ErrorPage/ErrorPage";
import NavBarQueryContext from "../../contexts/NavBarQueryContext";
import UserContext from "../../contexts/UserContext";
import Favoris from "../Favoris/Favoris";
import Parametres from "../Parametres/Parametres";
import Disclaimer from "../Disclaimer/Disclaimer";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";*/


const queryClient = new QueryClient();

function App() {

  const [mangaQuery, setMangaQuery] = useState("");
  const [user, setUser] = useState(null);
  
  return (
    <Router>
      <UserContext.Provider value={[user, setUser]}>
      <NavBarQueryContext.Provider value={[mangaQuery, setMangaQuery]}>
        <QueryClientProvider client={queryClient}>
          <div className="main-container-app">
            <Routes>
              <Route path="/" element={<Splashscreen loadingScreen={false}/>} />
              <Route path="/login" element={<Login />} />
              {/*<Route path="/signup" element={<Inscription />} />
              <Route path="/accueil" element={<Accueil />} />
              <Route path="/favoris" element={<Favoris />} />
              <Route path="/parametres" element={<Parametres />} />
              <Route path="/mangas" element={<Parcourir />} />
              <Route path="/mangas/:slug" element={<MangaDetail />} />
              <Route path="/mangas/read/:slug/:numChap/:numPage" element={<MangaReader />} />
              <Route path="/*" element={<ErrorPage />} />
              <Route path="/disclaimer" element={<Disclaimer />} />*/}
              { /* Ajouter une route qui mène au Splashscreen avec une route qui n'existe pas */  }
            </Routes>
            <CookieConsent buttonText="Je comprends" buttonStyle={{fontFamily: "inherit", background: "#E74B4B", color: "white"}}>Ce site utilise les cookies pour améliorer l'expérience utilisateur.</CookieConsent>
            <Link to="/disclaimer">
              <p style={{textAlign: "center", color: "white"}}>Mentions légales</p>
            </Link>
          </div>
        </QueryClientProvider>
      </NavBarQueryContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;