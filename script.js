var spikes = document.getElementById('spikes')
var gameArea = document.getElementById('gameArea')
gameArea.width = window.innerWidth
gameArea.height = window.innerHeight
spikes.width = window.innerWidth
spikes.height = '50'
var cSpikes = spikes.getContext('2d')

cSpikes.beginPath()
cSpikes.moveTo(0, 0)
for(var x=0;x<window.innerWidth; x = x+50){
  cSpikes.lineTo(x+25, 50)
  cSpikes.lineTo(x+50, 0)  
  cSpikes.fillStyle = 'red'
  cSpikes.fill()
  cSpikes.stroke()
}

//c.rect(xPos[Math.round(Math.random()*5)], yPos[Math.round(Math.random()*3)], 150, 20)
//c.rect(xPos[Math.round(Math.random()*5)], yPos[Math.round(Math.random()*3)], 150, 20)
//c.rect(xPos[Math.round(Math.random()*5)], yPos[Math.round(Math.random()*3)], 150, 20)
//c.rect(xPos[Math.round(Math.random()*5)], yPos[Math.round(Math.random()*3)], 150, 20)
//c.rect(xPos[Math.round(Math.random()*5)], yPos[Math.round(Math.random()*3)], 150, 20)
/*if(window.rectY1 > 60){
  window.rectY1 -= 0.001
} */   
//c.stroke()
console.log(gameArea)
var c = gameArea.getContext('2d')
c.beginPath()
//function Rects(){
  //requestAnimationFrame(Rects)
  var xPos = [100, 200, 300, 400, 500, 600, 700, 800]
  var yPos = [150, 300, 450, 600]
  console.log(c)
  console.log(xPos)
  console.log(xPos[Math.round(Math.random()*7)])
  c.rect(100, 200, 150, 20)
  c.stroke()
//}

//Rects()

//xPos[Math.round(Math.random()*3)]
//yPos[Math.round(Math.random()*2)]