

document.getElementById("but").onclick = function() {myFunction()};




function myFunction(){

    var i =(Math.ceil(Math.random()*6)).toString();

    var j=(Math.ceil(Math.random()*6)).toString();
    

    document.getElementById("player1").src="/Users/arshaannazir/Desktop/Dice Game/dice"+(i)+".png";
    document.getElementById("player2").src="/Users/arshaannazir/Desktop/Dice Game/dice"+(j)+".png";


    if (Number(i)>Number(j)){

        document.getElementById("but").innerHTML="Player 1 Wins!!"
       

       

      


    }

    if (Number(i)<Number(j)){

        document.getElementById("but").innerHTML="Player 2 Wins !"
        

       

      


    }

    if (Number(i)===Number(j)){

        document.getElementById("but").innerHTML="Draw!"
        

       

      


    }

    
   

};


document.getElementById("again").onclick= function() {againFunction()};




function againFunction(){

    document.getElementById("player1").src="/Users/arshaannazir/Desktop/Dice Game/dice6.png";
    document.getElementById("player2").src="/Users/arshaannazir/Desktop/Dice Game/dice6.png";
    document.getElementById("but").innerHTML="Play"



};



