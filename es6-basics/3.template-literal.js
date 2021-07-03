let simple = `This is a template literal`     
console.log(simple)
console.log(simple.length)
console.log(typeof simple)

// Multiline

var msg = 'Multiple \n String '
console.log(msg)

let string = `Template literal in ES6
I can write string in anther line
I can write string in multi lines
`
console.log(string)

// using single quotes

let anotherString = `Here's is a template literal`
console.log(anotherString)

// string contains  a backtick 

let strWithBacktick = ` \` Template literal use backticks \` instead of quotes `
console.log(strWithBacktick)

// Variable substitutions

let firstName ='Scott',
    lastName = 'Desatnick'

//    var output =  'Hello Mr.' + firstName + ' ' + lastName
//    console.log(output)
let greeting =`Hello Mr. ${firstName} ${lastName}`

console.log(greeting)

let message= `Hey this is your 100$ bill and you can buy {}`
console.log(message)


let message1= `Hey this is your 100 \$\{ firstName\} bill and you can buy {}`
console.log(message1)