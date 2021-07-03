// function say(message){
//     console.log(message)
// }

// say() //undefined

//ES5 fix 

function say(message){
    message = typeof message !== 'undefined' ? message : 'Hi'
    console.log(message)
}

say()

function say(message="hi"){
    console.log(message)
}

say()