/*Créer une fonction “gridGenerator” p
renant les arguments “xAxis” et “yAxis”. 
Vous devez générer une matrice en “table” html de x * y. 
Vous devrez colorer aléatoirement 
chaque case de la grille d’une couleur différente 
toutes les “1s” à “2s”. */

function gridGenerator(xAxis, yAxis) {
  const tab = document.createElement("table");
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  for (let i = 1; i < xAxis.length; i++) {
    for (let j = 0; j < yAxis.length; j++) {
      return td[j];
    }
    return tr[i];
  }


  document.body.appendChild(tab);
  tab.appendChild(tr);
  tr.appendChild(td);
}
gridGenerator(9, 9);

function updateRandomColor() {
  get.style.background;
}
/*
 const body = document.getElementsByTagName('body')[0];
  const tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.style.height = '50px';
  tbl.setAttribute('border', '1');
  body.appendChild(tbl)*/