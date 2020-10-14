/*Créer une fonction “gridGenerator” p
renant les arguments “xAxis” et “yAxis”. 
Vous devez générer une matrice en “table” html de x * y. 
Vous devrez colorer aléatoirement 
chaque case de la grille d’une couleur différente 
toutes les “1s” à “2s”. */

/**
*Génère un tableau
*@param xAxis = nombre de ligne du tableau
*@param yAxis = nombre de colonne du tableau
*/

function gridGenerator(xAxis, yAxis) {
  var table = document.createElement("table");
  var tr = document.createElement("tr");
  var td = document.createElement("td");


  for (j = 0; j < xAxis; j++) {
    tr.appendChild(td.cloneNode());
    tr.style.width = "100px";
    tr.style.height = "20px";
  }
 
  for (i = 0; i < yAxis; i++) {
    table.appendChild(tr.cloneNode(true));
    td.style.width = "100px";
    td.style.height = "20px";
  }

  document.body.appendChild(table);
 
  return table;
}

/** Selectionne une couleur aléatoire */
function getRandomColor() {
  function random() {
    return Math.random()*255;
  }
  return "rgb(" +random()+ "," +random()+ "," +random()+")";
}

/** Choisi aléatoirement un td individuel pour le colorer*/
function selecteRandomColor(table) {
  var tds = table.getElementsByTagName("td");


  return tds[Math.floor(Math.random) * tds.length];
}
/** Actualise une couleur aléatoire */
function updateColor(table) {
  var cell = table.getElementsByTagName("td");
  for (var i = 0; i < cell.length; i++) {
    var color = getRandomColor();
    cell[i].style.background = color;
  }
}

/**
*
*Lance le code
*@param 20 = xAxis
*@param 9 = yAxis
*actualise le code toute les secondes
*/
var table = gridGenerator(20, 9);
setInterval(function() {
    updateColor(table);
},1000)
updateColor(table);
