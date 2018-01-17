'use strict';

var mainContainer = document.querySelector(".main-container");

function webmaker(){
    var table = document.createElement("table");
    mainContainer.appendChild(table)
    for(var i = 1; i < 26; i++){
        var row = document.createElement("tr");
        // row.className = "row " + i;
        // row.id = i;

        for(var x = 1; x < 51; x++){
            var column = document.createElement("td");
            column.className = "row " + i + " column " + x;
            // column.id = x;
            row.appendChild(column);
        }
        table.appendChild(row);
    }

}


webmaker();
