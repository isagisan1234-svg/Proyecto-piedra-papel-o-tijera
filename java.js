let jugadorsCore = 0;
let computersCore = 0;

function PlayGame(userChoice) {
    const choice = ['piedra','papel','tijeras'];
    let computerChoice = choice[Math.floor(Math.random()*3)]
    let result = "";
    if (userChoice === computerChoice) {
       result = `Empate. ambos eligieron ${userChoice}`
    } else if ((userChoice === `piedra` && computerChoice === `tijeras`) || (userChoice === `papel` && computerChoice === `piedra`) || (userChoice === `tijeras` &&  computerChoice === `papel`)) {
     result= `Ganaste ${userChoice} gana a ${computerChoice}`
     jugadorsCore++;
    } else{
       result = `Perdiste. ${computerChoice} gana a ${userChoice}`
        computersCore++;
    }

document.getElementById('result').textContent = result;
document.getElementById('score').textContent = `jugador: ${jugadorsCore}  | computadora :${computersCore}`;
 
if (jugadorsCore === 3 || computersCore === 3) {
    Endchoice()
}
}

function Endchoice() {
    const finalresult = jugadorsCore === 3 ? 'felicidades has ganado' : 'lo siento has perdido';

    document.getElementById('finalresult').textContent = finalresult
    document.getElementById('btnpiedra').disabled = true;
    document.getElementById('btnpapel').disabled = true;
    document.getElementById('btntijeras').disabled = true;
}