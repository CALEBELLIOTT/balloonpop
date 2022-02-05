let startButton = document.getElementById("start-button")
let inflateButton = document.getElementById("inflate-button")
let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxSize = 300
let popCount = 0
let gameLength = 5000
let clockId = 0
let timeRemaining = 0


function drawClock(){
let countdownElement = document.getElementById("countdown")
countdownElement.innerText = (timeRemaining / 1000).toString()
timeRemaining -= 1000
}

function startGame(){

startButton.setAttribute("disabled", "true")
inflateButton.removeAttribute("disabled")
  startClock()
  setTimeout(stopGame, gameLength)

}

function startClock(){
  timeRemaining = gameLength
  drawClock()
  clockId = setInterval(drawClock, 1000)


}

function stopClock(){
  clearInterval(clockId)
}



function inflate(){
  clickCount++
  height += inflationRate
  width += inflationRate
  
  if(height >= maxSize){
    console.log("pop the balloon")
    height = 0
    width = 0
    popCount ++
  }
  draw()
}

function draw(){
  var balloonElement = document.getElementById("balloon")
  var clickCountElement = document.getElementById("click-count")
  let popCountElement = document.getElementById("pop-count")
  
  balloonElement.style.height = height + "px"
  balloonElement.style.width = width + "px"
  
  clickCountElement.innerText = clickCount.toString()
  popCountElement.innerText = popCount.toString()
}


function stopGame(){
  console.log("The game is over")
  inflateButton.setAttribute("disabled", "true")
  startButton.removeAttribute("disabled")

  clickCount = 0
  height = 120 
  width = 100
  stopClock()
  draw()

}