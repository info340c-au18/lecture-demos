'use strict';

//pre-written messages
let MESSAGES = ['Hello world!', "Goodbye y'all", "silence", "...", "Bueller?"];

//Example 1

// class Card {
//     constructor(message){
//         this.message = message
//     }

//     render() {
//         let cardDiv = $('<div class="card">')
//      //   let body = cardDiv.append('<div class="card-body>"')
//      //   body.text(this.message)
//           cardDiv.text(this.message)
//         return cardDiv
//     }
// }

//"main work Example 1

// let card = new Card("Hello world");
// let renderedCard = card.render();
// $('#content').append(renderedCard)


// //main work Example 2
// let cards = MESSAGES.map(function(msg) {
//     return new Card(msg)
// })

// cards.forEach(function(card){
//  //   $('#content').append(renderedCard)
//     $('#content').append(card.render())
    
// })


/*
// Example 3

class Card {
    constructor(message, initial){
        this.message = message
        this.clickedCount = initial
    }

    render() {
        let cardDiv = $('<div class="card">')
     //   let body = cardDiv.append('<div class="card-body>"')
     //   body.text(this.message)
          cardDiv.text(this.message + " " + this.clickedCount)
        return cardDiv
    }
}

//main work Example 3
let cards = MESSAGES.map(function(msg, idx) {
    return new Card(msg, idx)
})

cards.forEach(function(card){
 //   $('#content').append(renderedCard)
    $('#content').append(card.render())
    
})

*/
// Example 4

class Card {
    constructor(message, initial){
        this.message = message
        this.clickedCount = initial
    }

    render() {
        let cardDiv = $('<div class="card">')
        cardDiv.text(this.message + " " + this.clickedCount)
        // here the "this" variable is defined as the card
        // console.log("out of callback", this)
        cardDiv.click(function(){
            //in here the "this" variable is defined as the window (browser)
            // console.log("in callback", this)
            console.log("You clicked on "+this.message)
        })

        return cardDiv
    }
  
}

//main work Example 4
let cards = MESSAGES.map(function(msg, idx) {
    return new Card(msg, idx)
})

cards.forEach(function(card){
     $('#content').append(card.render())
    
})

/*
class Card {
    
    constructor(message, initial){
        this.message = message
        this.clickedCount = initial
        this.cardDiv = $('<div class="card">')        
        this.body = this.cardDiv.append('<div class="card-body">')
    }

    incrementCount() {
        this.clickedCount++;
        this.body.text(this.message + " " + this.clickedCount)
    }

    render() {
        this.body.text(this.message + " " + this.clickedCount)

        //this <= the class (Card)
        console.log("out callback", this);

        this.cardDiv.click(() => this.incrementCount())


        return this.cardDiv
    }
}

//"main work"
// let card = new Card("Hello world!");
// let renderedCard = card.render();
// $('#content').append(renderedCard)

let cards = MESSAGES.map((msg, idx) => new Card(msg, idx))

cards.forEach((card) => {
    $('#content').append(card.render())
})


let foo = (params) => 'foo '+params; 
*/