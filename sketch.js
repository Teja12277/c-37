var database
var players, forms, games
var playerCount = 0
var gameState = 0

function setup(){
 database = firebase.database()
  //forms = new form()
  //forms.display();
}

function draw(){
  background("white");
  game = new Game()
  game.start()
  game.getState()
  
}

