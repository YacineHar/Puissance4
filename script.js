addEventListener("DOMContentLoaded", (event) =>
{
    class Grille
    {
        constructor()
        {
            this.lignes = parseInt(prompt("Nombre de lignes"));
            this.colonnes = parseInt(prompt("Nombre de colonnes"));

            // let lignes = 5;
            // let colonnes = 5;

            var body = document.getElementsByTagName("body")[0];
            var table = document.createElement("table");
            var tableBody = document.createElement("tbody");

            this.joueur = 1;

            for (var i = 0; i < this.lignes; i++)
            {
                var ligne = document.createElement("tr");

                for (var j = 0; j < this.colonnes; j++)
                {
                    var jeton = document.createElement("td");
                    jeton.setAttribute('coordx', i);
                    jeton.setAttribute('coordy', j);
                    jeton.style.backgroundColor = "white";
                    jeton.style.border = "8px solid blue";
                    jeton.style.width = "8em";
                    jeton.style.height = "8em";
                    jeton.style.borderRadius = "50%";
                    table.style.backgroundColor = "navy";
                    table.style.borderRadius = "30px";
                    table.style.border = "3px solid blue";

                    jeton.addEventListener("click", this.PlacementJeton.bind(this));

                    jeton.addEventListener("mouseover", function(event)
                    {
                        if (event.target.style.backgroundColor === "white")
                        {
                            event.target.style.backgroundColor = "lightgray";
                        }
                    });

                    jeton.addEventListener("mouseout", function(event)
                    {
                        if (event.target.style.backgroundColor === "lightgray")
                        {
                            event.target.style.backgroundColor = "white";
                        }
                    });

                    ligne.appendChild(jeton);
                }

                tableBody.appendChild(ligne);
            }

            table.appendChild(tableBody);
            body.appendChild(table);
            table.setAttribute("border", "2");
        }

        PlacementJeton(event)
        {
            var colonne = event.target.getAttribute('coordy');

            for (var i = this.lignes - 1; i >= 0; i--)
            {
                var token = document.querySelector('td[coordx="' + i + '"][coordy="' + colonne + '"]');
                if (token.style.backgroundColor === "white" || token.style.backgroundColor === "lightgray")
                {
                    if (this.joueur === 1)
                    {
                        token.style.backgroundColor = "red";
                        this.joueur = 2;
                    }
                    else
                    {
                        token.style.backgroundColor = "yellow";
                        this.joueur = 1;
                    }
                    break;
                }
            }
        }
    }
    let obj = new Grille();
});