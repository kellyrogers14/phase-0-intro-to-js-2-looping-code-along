// Code your solutions in this file

let names = ["Guadalupe", "Ollie", "Aki"]
let event = "surprise"

function writeCards(names, event){
    let messages = [];
    
    for (let i = 0; i < names.length; i++) {
        messages.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return messages;
}

//

let number = 10

function countDown (number) {
 while (number >= 0) {
    console.log(number--)
 }
}

