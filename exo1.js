/*Créer une fonction “gridGenerator” p
renant les arguments “xAxis” et “yAxis”. 
Vous devez générer une matrice en “table” html de x * y. 
Vous devrez colorer aléatoirement 
chaque case de la grille d’une couleur différente 
toutes les “1s” à “2s”. */

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

/*
 const body = document.getElementsByTagName('body')[0];
  const tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.style.height = '50px';
  tbl.setAttribute('border', '1');
  body.appendChild(tbl)*/