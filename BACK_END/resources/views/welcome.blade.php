<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        header#GTitre{

            text-align:center ;
            background-color: rgb(52, 52, 121) ;
            border-radius: 8px    ;
            margin-top:0% ;
            margin-left : 0% ;
            margin-right : 0%;

        }
        img#logo{
            margin-right: 90%;
        }
        input#BarRech{
            margin-bottom: 2% ;
            width: 50%;
        }
        section#nouveautes{
            border-radius:  8px ; ;
            background-color: rgb(52, 52, 121) ;
            margin-top: -1% a    ;

        }
        section#Recomandation{
            margin-top: 0.5% ;
            border-radius:  8px ; ;
            background-color: rgb(52, 52, 121) ;
        }
        button#loupeRech{
            padding: 10px;
            cursor: pointer;

        }
    </style>
</head>
<body>
    <header id="GTitre" >
        <img id="logo" src="" alt="LOGO_SITE_WEB" >
        <select name="liste">
            <option> PC </option>
            <option> PIECES </option>
            <option> ACCESSOIRES </option>
            <option> PERIPHERIQUES   </option>
            <option> TABLETTE </option>
            <option> SMARTPHONES </option>
            <option> TELEVISION </option>
            <option> CONSOLES </option>
         </select>
        <input type="search" id="BarRech" placeholder="CHERCHER UN PRODUIT , UNE CATEGORIE , UNE MARQUE ..." >
        <button id="LoupeRech" >🔍</button>
        <input type="button" id="panier" value="PANIER" ></input>
        <input type="button" id="compte" value="COMPTE" ></input>
    </header>

    <section id="Recomandation">
        <img src="" alt="Les recommandation">

        <P>ce que nous vous recommandons </P>
    </section>
    <section id="nouveautes" >
        <img src="" alt="Les nouveatées">


        <p>Les nouveautées du mois </p>
    </section>
    <h1>
        Les taches terminées :

    </h1>
    <ol>
        <?php  foreach ($cours as $item): ?>

        <li>
            <?php  echo $item ;  ?>
       </li>
       <?php endforeach; ?>
    </ol>

</body>

    </html>
