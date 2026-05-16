import Panier from "./Panier";
import {BrowserRouter ,Route , Link ,Routes } from 'react-router-dom' ;
function NavBar() {


  return (
    <nav className="navBar">
      <div className="logo">DIGeCOM</div>
      <div className="search">
        <input className="filtrer" type="button" value="FILTRER  ↓ "/>
        <input className="chercher" type="text" placeholder="CHERCHER PAR NOM DU PRODUIT, CATÉGORIE OU PAR MARQUE" />
      </div>

      <div className="icons">
        <span>👤</span>
        <span>⚙️</span>
        <span><Link to="/Panier" >🧺</Link>  </span>
        
      </div>
    </nav>
  );
}

export default NavBar;