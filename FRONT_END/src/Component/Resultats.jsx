import { useState } from "react";
import {BrowserRouter ,Route , Link ,Routes } from 'react-router-dom' ;
function Resultats (){

  const [resultats , setResultats ]=useState("Produits");
  

return(
        <div className="resultatsRecherche" > 
        <h1>Les résultats pour X{} dans le rayon Y{}</h1>
        <div>
            <span className="resultatsProduits" onClick={()=>{setResultats("Produits")}} >{}Produits</span> 
             <span className="resultatsCatégories" onClick={ ()=>{setResultats("Catégories")} }>  {}Catégories</span>
              <span className="resultatsMarque" onClick={()=>{ setResultats("Marque")   }}>  {}Marques</span>
            <div>
                <fieldset>
                    <div>
                        {  resultats==="Produits" && <div className="ResultatsProduits" > DIV DES PRODUITS </div>  }
                        {  resultats==="Catégories" && <div className="ResultatsCategorie" > DIV DES Catégories </div>  }
                        {  resultats==="Marque" && <div className="ResultatsMarque" > DIV DES Marques </div>  }

                    </div>
                </fieldset>
            </div>

        </div>

    </div>

);

}
export default Resultats ;