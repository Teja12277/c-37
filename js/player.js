class Player {
    constructor (){

    }

    update(name){
        var playerIndex = "player1"//playerCount
        //player1
        database.ref(playerIndex).set({
            name: name
        })
    }
    updateCount(count) {
database.ref('/').update({
    playerCount : count
})
    }
    getCount(){
        var playerCountRef = database.ref('playerCount').on("value",function (data){
playerCount : data.val()
        })
    }
}