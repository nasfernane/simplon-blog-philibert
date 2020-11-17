// récupère l'id de la fenêtre dans une variable
            var modal = document.getElementById("myModal");

            // récupère la classe du span pour fermer la fenêtre
            var span = document.getElementsByClassName("close")[0];

            // ferme la fenêtre quand l'utilisateur appuie sur la croix
            span.onclick = function() {
                modal.style.display = "none";
            }
            // ferme la fenêtre si l'utilisateur clique n'importe où en dehors
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }