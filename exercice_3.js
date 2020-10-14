
'use strict';

/*
*
*Je tiens à préciser que pour cet exercice, je me suis (très) grandement inspiré du code de Ali
*
*/

/**
 * Represents a tic-tac-toe game.
 * @constructor
 */

var MyMorpionXO = function MyMorpionXO(){
}

/**
 * Creates board game 
 */

MyMorpionXO.prototype.game = function(){
    var body = document.querySelector('body');
    var board = document.createElement('table');
    //Style
    board.style.margin = "10% 30% 0 30%";
    board.style.borderCollapse = "collapse";
    board.style.borderSpacing = "0px";

    for(var i = 1; i <= 3; i++){
        var board_row = document.createElement('tr');
        //Style
        board_row.style.margin = "0px";
        board_row.style.borderCollapse = "collapse";
        board_row.style.borderSpacing = "0px";
    
        for(var j = 1; j <= 3; j++){   
            var cases = document.createElement('td');
            //Style
            cases.setAttribute('class', 'case');
            cases.style.border = '2px solid black';
            cases.style.width = '200px';
            cases.style.height = '200px';
            cases.style.textAlign = 'center';
            cases.style.borderCollapse = "collapse";
            cases.style.borderSpacing = "0px";

            board_row.appendChild(cases);
        }board.appendChild(board_row);
    }body.appendChild(board);

    var turn = 0;

    var cases = document.querySelectorAll('.case');
    cases.forEach(el => el.addEventListener ('click', event =>{
        if(turn % 2 == 0){
           if(!el.textContent) el.textContent = 'X';
        }else{
           if(!el.textContent) el.textContent = 'O';
        }
        turn++;
        this.win();
    }));
   
}

/**
 * Check if a round is won.
 */

MyMorpionXO.prototype.win = function(){
    var box = document.querySelectorAll('.case');

    if(box[0].textContent !== '' 
      && box[0].textContent == box[1].textContent 
      && box[1].textContent == box[2].textContent){
        this.theWinnerIs(box[0].textContent);
    }
    else if(box[3].textContent !== '' 
      && box[3].textContent == box[4].textContent 
      && box[4].textContent == box[5].textContent){
        this.theWinnerIs(box[3].textContent);
    }
    else if(box[6].textContent !== '' 
      && box[6].textContent == box[7].textContent 
      && box[7].textContent == box[8].textContent){
        this.theWinnerIs(box[6].textContent);
    }
    else if(box[0].textContent !== '' 
      && box[0].textContent == box[3].textContent 
      && box[3].textContent == box[6].textContent){
        this.theWinnerIs(box[0].textContent);
    }
    else if(box[1].textContent !== '' 
    && box[1].textContent == box[4].textContent 
    && box[4].textContent == box[7].textContent){
        this.theWinnerIs(box[1].textContent);
    }
    else if(box[2].textContent !== '' 
    && box[2].textContent == box[5].textContent 
    && box[5].textContent == box[8].textContent){
        this.theWinnerIs(box[2].textContent);
    }
    else if(box[0].textContent !== '' 
    && box[0].textContent == box[4].textContent 
    && box[4].textContent == box[8].textContent){
        this.theWinnerIs(box[0].textContent);
    }
    else if(box[2].textContent !== '' 
    && box[2].textContent == box[4].textContent 
    && box[4].textContent == box[6].textContent){
        this.theWinnerIs(box[2].textContent);
    }
    else if(box[0].textContent !== '' 
      && box[1].textContent !== '' 
      && box[2].textContent !== '' 
      && box[3].textContent !== '' 
      && box[4].textContent !== '' 
      && box[5].textContent !== '' 
      && box[6].textContent !== '' 
      && box[7].textContent !== '' 
      && box[8].textContent !== ''){
        this.theWinnerIs();
    }

}

