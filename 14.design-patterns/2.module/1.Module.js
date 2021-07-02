/* 
 ? Deals with code encapsulation 
*/

var Module = (function(){

    // private method
    var privateMethod = function(){
        console.log('Prviate method is called by ')
    }

    var publicMethod = function(){
        console.log('This is public method')
    }

    var rohit = "Hello"

    var getModule = (function(){
        return 'This is module pattern'
    })()


    return {
        publicMethod : publicMethod,
        priMethod:privateMethod,
        uma:rohit,
        mod: getModule
    }

 })()

 Module.publicMethod()
 Module.priMethod()
 console.log(Module.uma)
 console.log(Module.mod)