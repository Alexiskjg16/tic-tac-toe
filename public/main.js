

const playerSelectedRock = () => {
  console.log("rock")
  document.querySelector('.player1selection').textContent = 'rock'
}

const playerSelectedPaper = () => {
  console.log("paper")
  document.querySelector('.player1selection').textContent = 'paper'
}

const playerSelectedScissors = () => {
  console.log("scissors")
  document.querySelector('.player1selection').textContent = 'scissors'
}

const player2SelectedRock = () => {
  console.log("rock2")
  document.querySelector('.player2selection').textContent = 'rock'
}

const player2SelectedPaper = () => {
  console.log("paper2")
  document.querySelector('.player2selection').textContent = 'paper'
}

const decideAWinner = () => {
 //see what player 1 selected
 //see what player 2 selected
 //compare results
 const player1selection = document.querySelector('.player1selection').textContent
 const player2selection = document.querySelector('.player2selection').textContent
 console.log(player1selection,player2selection)
if(player1selection== "rock") {
  if(player2selection=="rock"){
console.log('tie')
document.querySelector('.displayresults').textContent = 'Tie'
  }else if(player2selection=="paper"){
console.log('rocklosestopaper')
document.querySelector('.displayresults').textContent = 'Rock Loses To Paper'
  }else if(player2selection=="scissors"){
console.log('rockbeatsscissors')
document.querySelector('.displayresults').textContent = 'Rock Beats Scissors'
  }
}
if(player1selection== "paper") {
 if(player2selection=="paper"){
   console.log('tie')
   document.querySelector('.displayresults').textContent = 'Tie'
 }else if (player2selection=="scissors"){
   console.log('paperlosestoscissors')
   document.querySelector('.displayresults').textContent = 'Paper Loses To Scissors'
 }else if(player2selection=="rock"){
   console.log('rocklosestopaper')
   document.querySelector('.displayresults').textContent = 'Rock Loses To Paper'
   }
}
if(player1selection=="scissors"){
  if(player2selection=="scissors"){
    console.log('tie')
    document.querySelector('.displayresults').textContent = 'Tie'
  }else if(player2selection=="paper"){
    console.log('scissorsbeatpaper')
    document.querySelector('.displayresults').textContent = 'Scissors Beats Paper'
  }else if(player2selection=="rock"){
    console.log('scissorslosestorock')
    document.querySelector('.displayresults').textContent = 'Scissors Loses To Rock'
  }
}
}


const player2SelectedScissors = () => {
  console.log("scissors2")
  document.querySelector('.player2selection').textContent = 'scissors'
}

document.querySelector('.gamewinner').addEventListener('click', decideAWinner)
document.querySelector('.scissorsbutton2').addEventListener('click', player2SelectedScissors)
document.querySelector('.paperbutton2').addEventListener('click', player2SelectedPaper)
document.querySelector('.rockbutton2').addEventListener('click', player2SelectedRock)
document.querySelector('.scissorsbutton1').addEventListener('click', playerSelectedScissors)
document.querySelector('.paperbutton1').addEventListener('click', playerSelectedPaper)
document.querySelector('.rockbutton1').addEventListener('click', playerSelectedRock)
