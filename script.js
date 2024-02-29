addEventListener("DOMContentLoaded", (event) =>
{
    class Grille
    {
        constructor()
        {
            // var lignes = parseInt(prompt("Nombre de lignes"));
            // var colonnes = parseInt(prompt("Nombre de colonnes"));

            var lignes = 6;
            var colonnes = 6;

            var body = document.getElementsByTagName("body")[0];
            var table = document.createElement("table");
            var tableBody = document.createElement("tbody");

            this.currentPlayer = 1;

            for (var i = 0; i < lignes; i++)
            {
                var ligne = document.createElement("tr");

                for (var j = 0; j < colonnes; j++)
                {
                    var jeton = document.createElement("td");
                    jeton.style.backgroundColor = "white";
                    jeton.style.border = "8px solid blue";
                    jeton.style.width = "8em";
                    jeton.style.height = "8em";
                    jeton.style.borderRadius = "50%";
                    table.style.backgroundColor = "navy";
                    table.style.borderRadius = "30px";
                    table.style.border = "3px solid blue";

                    jeton.addEventListener("click", this.handleCellClick.bind(this));

                    ligne.appendChild(jeton);
                }

                tableBody.appendChild(ligne);
            }

            table.appendChild(tableBody);
            body.appendChild(table);
            table.setAttribute("border", "2");
        }

        handleCellClick(event)
        {
            if (this.currentPlayer === 1)
            {
                if (event.target.style.backgroundColor == "white")
                {
                    event.target.style.backgroundColor = "red";
                    this.currentPlayer = 2;
                }
            }
            else
            {
                if (event.target.style.backgroundColor == "white")
                {
                    event.target.style.backgroundColor = "yellow";
                    this.currentPlayer = 1;
                }
            }
        }
    }

    let obj = new Grille();
});