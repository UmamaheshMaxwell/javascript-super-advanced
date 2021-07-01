// Immediately invoked function

(function(name, city){
    console.log('Hello my name is ' + name + ' and I am from' + city)
})('Johngalt', 'Boston')

var Singleton = (function(){
    return "This is Singleton and would create Object only once"
})()


// function sample(){

// }

// var sample = function(){

// }

// var sample = (function(){
    
// })()