
// Accessing private Methods

var Module = (function(){
    var privateMethod = function(message){
        console.log(message) // this will print the value
    }

    var publicMethod = function(text){
        privateMethod(text)
    }

    return {
        publicMethod: publicMethod
    }
})()

Module.publicMethod('Hello')