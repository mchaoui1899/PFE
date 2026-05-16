function Panier () {

    return(
        <div>
                        <h1  className="VPanier" >VOTRE PANIER :</h1>

        <div className="articleETaside" >
            <article className="articl" >
            <table>
                <thead>
                    <tr>
                    <th>PRODUIT</th>
                    <th>PRIX</th>
                    <th>QUANTITÉE</th> 
                    <th>SOUS TOTAL</th>
                    <th> 🗑</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td> PRODUITE 1  </td>
                    <td> PRIX PRODUIT 1  </td>
                    <td> QTE PRODUITE 1  </td>  
                    <td>MONTANT UNITAIRE</td>    
                    <td>X</td>                 
                    </tr>
                     <tr>
                    <td> PRODUITE 1  </td>
                    <td> PRIX PRODUIT 1  </td>
                    <td> QTE PRODUITE 1  </td>      
                    <td>MONTANT UNITAIRE</td>    
                    <td>X</td>             
                    </tr>
                     <tr>
                    <td> PRODUITE 1  </td>
                    <td> PRIX PRODUIT 1  </td>
                    <td> QTE PRODUITE 1  </td>                       
                    <td>MONTANT UNITAIRE</td>    
                    <td>X</td> 
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>DISPOSER VOUS D'UN CODE PROMO OU UN BON D'ACHAT ?</td>
                        <td>ENTRER LE ICI </td  >
                    </tr>
                </tfoot>
             </table>
            </article>
            <aside className="side" >
                <h1>TOTAL TTC : </h1>
                <span>Le Montant</span><br />
                <input type="button" value="PASSER LA COMMANDE"  ></input>
                <button>ENREGISTRER LA COMMANDE</button>
            </aside>
        </div>
        </div>




    );


}
export default Panier ; 