/* Class
 ? any number of instances for the class
 ? more objects will be created and takes up memory 
 ? rathar we would create a single instance and share that instance
*/ 

var Singleton = (function(){
        var instance = null;

        // create an instance
        var createInstance = function(){
            var obj = Object.create(null)
            console.log('Object has been created')
            return obj;
        }

        var getInstance = function(){
           if(!instance){
                instance = createInstance()
           }
            return instance
        }

        var obj = {
                  getInstance: getInstance, 
                  sayHello: sayHello
                }

        return obj
        
})()

var singleton1 = Singleton.getInstance()
console.log(singleton1)

var singleton2 = Singleton.getInstance()
console.log(singleton2)

var singleton3 = Singleton.getInstance()
Singleton.sayHello()


// var obj= Singleton.getInstance()
// console.log(obj)
