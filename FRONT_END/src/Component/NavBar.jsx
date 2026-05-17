import { useState } from "react";
import Panier from "./Panier";
import {BrowserRouter ,Route , Link ,Routes } from 'react-router-dom' ;

  

function NavBar() {

 const [menu , setMenu]=useState(false);

 const handleClique = () => {

        setMenu(!menu); 
  };
  const [filtre , setFiltre ]=useState(false);
  const handleFilter = () => { setFiltre(!filtre)  };

  return (
    <nav className="navBar">

      <span className="logo"> <Link to="/" > DIGeCOM </Link>   </span>
      <button className="menu" onClick={handleClique} > MENU </button>
      {menu && (<ul className="menuListe" > 
        <li> ORDINATEURS</li> 
        <li> SMARTPHONES</li> 
        <li> ACCESSOIRES</li> 
        <li> PERIPHERIQUE</li> 
        <li> TABLETTE</li> 
        </ul>)}
      <div className="search">
        <input className="filtrer" type="button" value="TOUS LES UNIVERS  ↓ " onClick={handleFilter}  />
        { filtre && (
            <ul className="filtreListe" > 
        <li> TELEPHINES</li> 
        <li> INFORMATOQUE</li> 
        <li> SON</li> 
        <li> CONNECTOQUES</li> 
        </ul>

        )  }
        <input className="chercher" type="text" placeholder="CHERCHER PAR NOM DU PRODUIT, CATÉGORIE OU PAR MARQUE" />
        <button class="soumissionButton"> <Link to="/Resultats">🔍</Link> </button>
      </div>

      <div className="icons">
        
        <span><Link to="/Profil" >👤</Link>  </span>
        <span><Link to="/Settings" >⚙️</Link>  </span>
        <span><Link to="/Panier" >🧺</Link>  </span>
        
      </div>
    </nav>
  );
}

export default NavBar;