class Grille
{
    constructor()
    {
        this.lignes = parseInt(prompt("Nombre de lignes"));
        this.colonnes = parseInt(prompt("Nombre de colonnes"));

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

        var boutonRelancer = document.createElement("button");
        boutonRelancer.textContent = "Relancer une partie";
        boutonRelancer.addEventListener("click", () =>
        {
            window.location.reload();
        });
        body.appendChild(boutonRelancer);
    }

    PlacementJeton(event)
    {
        var colonne = event.target.getAttribute('coordy');

        for (var i = this.lignes - 1; i >= 0; i--)
        {
            var token = document.querySelector('td[coordx="' + i + '"][coordy="' + colonne + '"]');
            if (token.style.backgroundColor === "white" || token.style.backgroundColor === "lightgray")
            {
                var joueurActuel = document.querySelector("div");
                joueurActuel.textContent = "Au tour du joueur : " + this.joueur;

                if (this.joueur === 2)
                {
                    token.style.backgroundColor = "red";
                    this.joueur = 1;
                }
                else
                {
                    token.style.backgroundColor = "yellow";
                    this.joueur = 2;
                }
                if (this.CheckVictoire())
                {
                    alert("Le joueur " + this.joueur + " a gagné !");
                    window.location.reload();
                }
                break;
            }
        }
    }

    CheckVictoire()
    {
        for (let i = 0; i < this.lignes; i++)
        {
            for (let j = 0; j < this.colonnes - 3; j++)
            {
                if (this.CheckLigne(i, j)) return true;
            }
        }

        for (let i = 0; i < this.lignes - 3; i++)
        {
            for (let j = 0; j < this.colonnes; j++)
            {
                if (this.CheckVerticale(i, j)) return true;
            }
        }

        for (let i = 0; i < this.lignes - 3; i++)
        {
            for (let j = 0; j < this.colonnes - 3; j++)
            {
                if (this.CheckDiagonaleDroite(i, j)) return true;
            }
        }

        for (let i = 0; i < this.lignes - 3; i++)
        {
            for (let j = 3; j < this.colonnes; j++)
            {
                if (this.CheckDiagonaleGauche(i, j)) return true;
            }
        }

        return false;

    }

    CheckLigne(cramptés, colonne1)
    {
        let color = this.GetColor(cramptés, colonne1);
        if (color === "white") return false;

        for (let j = 1; j < 4; j++)
        {
            if (this.GetColor(cramptés, colonne1 + j) !== color)
            {
                return false;
            }
        }
        return true;
    }

    CheckVerticale(ligne1, apanyan)
    {
        let color = this.GetColor(ligne1, apanyan);
        if (color === "white") return false;

        for (let i = 1; i < 4; i++)
        {
            if (this.GetColor(ligne1 + i, apanyan) !== color)
            {
                return false;
            }
        }
        return true;
    }

    CheckDiagonaleDroite(ligne1, colonne1)
    {
        let color = this.GetColor(ligne1, colonne1);
        if (color === "white") return false;

        for (let i = 1; i < 4; i++)
        {
            if (this.GetColor(ligne1 + i, colonne1 + i) !== color)
            {
                return false;
            }
        }
        return true;
    }

    CheckDiagonaleGauche(ligne1, colonne1)
    {
        let color = this.GetColor(ligne1, colonne1);
        if (color === "white") return false;

        for (let i = 1; i < 4; i++)
        {
            if (this.GetColor(ligne1 + i, colonne1 - i) !== color)
            {
                return false;
            }
        }
        return true;

    }

    GetColor(cramptés, apanyan)
    {
        let token = document.querySelector('td[coordx="' + cramptés + '"][coordy="' + apanyan + '"]');
        return token.style.backgroundColor;
    }
}

let obj = new Grille();