class Game {
    constructor (){

    }
    getState(){
        var gameStateRef = database.ref('gameState').on("value",function (data){
            gameState = data.val()
                    })
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
    start(){
        if(gameState === 0){
            players = new Player()
            players.getCount()
            forms = new form()
            forms.display();
        }
    }
}