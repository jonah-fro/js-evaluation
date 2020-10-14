'use strict'
/*class drawBar(sum, nbr) {
  var prg = document.getElementById('progress');
  var counter = 5;
  var progress = 25;
  var id = setInterval(frame, 50);


  function update(coef) {
    prg.style.width = coef * 100 + '%';
  }
  for (var i = 0; i < 500; i += 50) {
    setTimeout(update,)
  }
}
    
drawBar();*/

/**
*Défini la somme total et la portion de la barre chargée de la barre 
*@param sum = Somme totale du nombre
*@param nbr = portion de la barre chargée
*/
var drawBar = function DrawBar(sum, nbr) {
  this.sum = sum;
  this.nbr = nbr;
}

/** responsivité, stylisation et creation de la barre */
drawBar.prototype.run = function(){
var divP = document.createElement("div");
var divE = document.createElement("div");

divP.style.width = "35%";
divP.style.height = "50px";
divP.style.backgroundColor = "grey";
divP.style.borderRadius = "20px";

divE.style.width = this.nbr + "%";
divE.style.height = "100%";
divE.style.backgroundColor ="dodgerblue";
divE.style.borderRadius = "20px";

divP.appendChild(divE);
document.body.appendChild(divP);
}
/** lance le programme*/
var loadedBar = new drawBar(100, 50);
loadedBar.run();
