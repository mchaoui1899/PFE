import NavBar from "../Component/NavBar";
import "./Style.css";
import Panier from "../Component/Panier";
function Accueil() {
  return (
    <div>
      
      <div className="UP" >
      <fieldset>
      <h1 className="titreAccueil" >UNIVERS POPULAIRES </h1>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      <p>UP</p>
      </fieldset>
      </div>
      <div className="RPV" >
        <fieldset>
      <h1  className="titreAccueil">RECOMMANDÉ POUR VOUS  </h1>
      </fieldset>
      </div>
      <div className="NV">   
     <fieldset>
     <h1 className="titreAccueil">NOUVEAUTÉS</h1>
        </fieldset>
      </div>
    </div>
  );
}

export default Accueil;