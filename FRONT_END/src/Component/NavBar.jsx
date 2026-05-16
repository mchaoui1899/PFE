import Panier from "./Panier";
import {BrowserRouter ,Route , Link ,Routes } from 'react-router-dom' ;
function NavBar() {


  return (
    <nav className="navBar">
      <span className="logo"> <Link to="/" > DIGeCOM </Link>   </span>
      <div className="search">
        <input className="filtrer" type="button" value="FILTRER  ↓ "/>
        <input className="chercher" type="text" placeholder="CHERCHER PAR NOM DU PRODUIT, CATÉGORIE OU PAR MARQUE" />
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