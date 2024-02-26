document.addEventListener("DOMContentLoaded", (event)=>
{
    function grid()
    {
        var rows = 6;
        var columns = 7;

        var body = document.getElementsByTagName("body")[0];
        var table = document.createElement("table");
        var tableBody = document.createElement("tbody");

        for (var i = 0; i < rows; i++)
        {
        var row = document.createElement("tr");

        for (var j = 0; j < columns; j++)
        {
            var cell = document.createElement("td");
            cell.style.backgroundColor = "white";
            cell.style.border = "8px solid blue";
            cell.style.width = "8em";
            cell.style.height = "8em";
            cell.style.borderRadius = "50%";
            table.style.backgroundColor = "navy";
            table.style.borderRadius = "30px"
            table.style.border = "3px solid blue";
;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
        }

        table.appendChild(tableBody);
        body.appendChild(table);
        table.setAttribute("border", "2");
    }
    grid();
});