class form {
    constructor (){

    }
    display(){
        var title = createElement('h2')
        title.html("Car Racer")
        title.position(530,100)
        var input = createInput("Enter Name Here")
        input.position(500,300)
        var button = createButton("Start")
        button.position(550,350)
        var reset = createButton("RESET")
        reset.position(540,400)

        button.mousePressed(function(){
       button.hide();
       input.hide()
       reset.hide()
       title.hide();

        var name = input.value();
        playerCount = playerCount+1
        players.updateCount(playerCount)   
        players.update(name)   
            







         var greeting = createElement('h2')
        greeting.html("Welcome")
        greeting.position(530,130)
        
        })
    }   
}