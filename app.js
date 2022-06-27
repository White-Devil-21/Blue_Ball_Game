var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var c = canvas.getContext('2d')

var timeCalcn = 0

// Spikes
c.beginPath()
c.moveTo(0, 0)
for(var x=0;x<window.innerWidth;x = x+50){
  c.lineTo(x+25, 50)
  c.lineTo(x+50, 0)  
  c.fillStyle = 'red'
  c.fill()
  c.stroke()
  
}
c.closePath()

var blocks = []

var hearts = 3

var score = 0;

var blkH = 0;
for(var i=0;i<100;i++){
  window.blkH += Math.random()*(120) + 70
  var block = {
    width: (Math.floor(Math.random() * 60) + 5)*20 ,
    height: window.blkH
  }
  blocks[i] = block
}
console.log(blocks)

// Ball 
var ctrX = 600
var ctrY = 100

function autoMove(){
  for(var i=0;i<100;i++){
    if(window.blocks[i].height > 55){
      window.blocks[i].height -= 2 
    }
    else{
      window.blocks[i].height = -100
    }
  }

  var req = requestAnimationFrame(autoMove)
  window.timeCalcn += 1
  c.clearRect( 0, 51, window.innerWidth , window.innerHeight) 
  c.beginPath()
  c.arc(window.ctrX, window.ctrY, 20, 0, Math.PI * 2)
  c.strokeStyle = 'BLUE'
  c.fillStyle = 'BLUE'
  c.fill()
  c.stroke()

  var img = document.getElementsByTagName('img')[0]
  if(window.hearts == 3){
    c.drawImage(img, 30, 60)
    c.drawImage(img, 80, 60)
    c.drawImage(img, 130, 60)
  }
  else if(window.hearts == 2){
    c.drawImage(img, 30, 60)
    c.drawImage(img, 80, 60)
  }
  else if(window.hearts == 1){
    c.drawImage(img, 30, 60)
  }
  else{
    cancelAnimationFrame(req)
    alert("Oops Bud, You lost the Game")
    alert(`Your score is ${window.score}`)
    window.history.go(-1)
  }

  rects()
  for(var i=0;i<100;i++){
    stepper(blocks[i])
  }
  if(window.ctrY > window.innerHeight){
    window.hearts -= 1
    window.ctrY = 100
  }
  else if(window.ctrY  > 72){
    window.ctrY += 2;
    window.score += 1
  }
  else{
    window.ctrY = 100
    window.hearts -= 1
  }
  
}

document.addEventListener('keydown', () =>{
  var press = (event.key)
  if(press == "ArrowRight"){
    if(window.ctrX < innerWidth){
      window.ctrX += 9
    }
  }
  else if(press == "ArrowLeft"){
    if(window.ctrX > 0){
      window.ctrX -= 9
    }
  }  
})
// Blocks 

function rects(){
  c.beginPath()  
  for(var i=0;i<100;i++){
    c.rect(window.blocks[i].width, window.blocks[i].height, 200, 25)
  }
  c.stroke()
}

function stepper(e){
  if((e.width < window.ctrX ) && (window.ctrX < (e.width + 200))){
    if((window.ctrY + 1) == Math.floor(e.height) || ((window.ctrY) == Math.floor(e.height)) || ((window.ctrY - 1) == Math.floor(e.height)) || ((window.ctrY - 2) == Math.floor(e.height))){
      window.ctrY -= 4
    }
 }  
}

autoMove()






