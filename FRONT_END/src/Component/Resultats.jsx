import { useState } from "react";
import {BrowserRouter ,Route , Link ,Routes } from 'react-router-dom' ;


function Resultats (){
return(
    
    <div className="resultatsRecherche" > 
        <h1>Les résultats pour {} dans le rayon {}</h1>
        <div>
            <span>{}Produits</span>  <span>  {}Catégorie</span> <span>  {}Marque</span>
            <div>
                <fieldset>
                    <div>
                        
                    </div>
                </fieldset>
            </div>

        </div>

    </div>



);

}
export default Resultats ;