//Function Scoped

function sample(){
    var firstName="blue"
    console.log(firstName)
}
console.log(firstName) // Reference Error 

// Blocked Scope 
if (true){
    var foo="hello"
    let bar= "How are you"
    const baz="I am done"

    console.log(foo)
    console.log(bar)
    console.log(baz)
}

console.log(foo)
console.log(bar)
console.log(baz)

for(var i=0; i<3; i++){
    console.log(i)
}
console.log(i)


for(let i=0; i<3; i++){
    console.log(i)
}
console.log(i)

let value =1;
    value= 10

//let value =100 // can't use 'let keyword again for value

console.log(value)

const data = 10;

data =20;
