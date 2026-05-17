import { useEffect } from "react";
import Accueil from "./Pages/Accueil";
import {BrowserRouter ,Route , Link ,Routes } from 'react-router-dom' ;
import NavBar from "./Component/NavBar";
import Panier from "./Component/Panier";
import Profil from "./Component/Profil";
import Settings from "./Component/Settings";
import Resultats from "./Component/Resultats";
function App() {

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test")
      .then(res => res.json())
      .then(data => {
        console.log("DATA FROM LARAVEL:", data);
      })
      .catch(err => console.error("ERROR:", err));
  }, []);

  return (
    <BrowserRouter>
  <NavBar/>    

    <Routes>
       <Route path="/" element={<Accueil />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/Settings" element={<Settings/>} ></Route>
        <Route path="/Profil" element={<Profil/>} ></Route>
          <Route path="/Resultats" element={<Resultats/>}   ></Route>
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;