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


