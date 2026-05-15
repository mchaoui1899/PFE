function Panier () {

    return(
        <div>
            <h1>VOTRE PANIER :</h1>
            <article>
            <table>
                <thead>
                    <tr>
                    <th>PRODUIT</th>
                    <th>PRIX</th>
                    <th>QUANTITÉE</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    /* ICI OU LE NOMBRE DES LIGNES VA S'AUGMENTER AVEC LAJOUT DES PRODUIT  */
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>DISPOSER VOUS D'UN CODE PROMO OU UN BON D'ACHAT ?</td>
                        <td>ENTRER LE ICI </td>
                    </tr>
                </tfoot>
             </table>
            </article>
            <aside>
                <h1>TOTAL TTC : </h1>
            </aside>
        </div>





    );


}
export default Panier ; 