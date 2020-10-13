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
var drawBar = function DrawBar(sum, nbr) {
  this.sum = sum;
  this.nbr = nbr;
}


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

var loadedBar = new drawBar(100, 50);
loadedBar.run();
/*.percent-count {
  width: 450px;
  height: 50px;
  margin: 100px auto;
  font-size : 50px;
  text-align: center;
  color: #fff;
}

.progress-bar {
  width: 506px;
  height: 26px;
  background-color: #bbb;
  border-radius: 13px;
  padding : 3px;
  margin: 50px auto;
}

.progress {
  width: 25px;
  height: 20px;
  border-radius: 10px;
  background-color: dodgerblue;

}
*/