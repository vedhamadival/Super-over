const strike = document.getElementById("strike");
const reset = document.getElementById("reset");
const score1 =document.getElementById("team1-score");
const wickets1 =document.getElementById("team1-wickets");
const score2=document.getElementById("team2-score");
const wickets2=document.getElementById("team2-wickets");
const team1ball=document.querySelectorAll(".balls");
console.log(team1ball)

var team1score =0;
var team1wickets=0;
var team2score=0;
var team2wickets=0;
var balls=0;

const possibleOutcomes=[0,1,2,3,4,6,"W"];


function result(team1score,team2score){
    if(team1score > team2score) alert ("Team IND wins")
    if(team2score > team1score) alert ("Team PAK wins")
    if(team1score===team2score) alert("It's a TIE- Play another SUPEROVER")
}


reset.onclick= () => {
    window.location.reload();
}

strike.onclick= () => {
    const randomInt = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)];

if(balls<6) {
    team1ball[balls].innerText=randomInt;
    if(randomInt==="W"){
        team1wickets++;
        wickets1.innerText = team1wickets
    }
    else{
        team1score+=randomInt;
        score1.innerText = team1score
    }
    balls++;
}

else if (balls>=6 && balls<12) {
    team1ball[balls].innerText=randomInt;
    if (randomInt=== "W") {
        team2wickets++;
        wickets2.innerText = team2wickets
    }
    else {
     team2score+=randomInt;
     score2.innerText = team2score
    }
      balls++;
    }
  
else{
  if(team1score > team2score) alert ("Team IND wins")
  if(team2score > team1score) alert ("Team PAK wins")
  if(team1score===team2score) alert("It's a TIE- Play another SUPEROVER")
}
}


    
