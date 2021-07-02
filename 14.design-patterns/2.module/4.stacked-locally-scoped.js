var Module = (function(){
    //locally scoped

    var privateMethod = function(){}
    var myObj ={
        someMethod : function(){

        },
        anotherMethod: function(){

        },
        oneMoreMethod: function(){

        }
    }
    
    return myObj;

})()

console.log(Module)