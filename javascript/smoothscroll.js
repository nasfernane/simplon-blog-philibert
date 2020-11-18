// Il suffit d'ajouter la classe ".js-scrollTo" sur l'élement qui contient le lien qu'on veut rendre fluide. 

// Ce script analyse et récupère les éléments dans le HTML qui ont la classe .js-scrollTo, et au clic => déclare la variable page qui récupère l'attribut href (cible du lien) de "this" (élément en cours sur lequel l'évènement se produit), puis déclare la variable speed pour définir une vitesse. Le script utilise ensuite, sur le html et body du document, la fonction animate pour le déplacement latéral en utilisant la vitesse stockée dans la variable speed.


$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});


