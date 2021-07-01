
// 'use strict'



console.log(this) // Global here
console.log(window)

function sample(){
    var a =20;
    console.log(this) // Global
}

sample()

var obj = {
    name: 'uma',
    log: function(){
        var self = this;

        console.log(self)
        self.name ='mahesh'
        console.log(self) // local

        var setName = function(){
            self.name ="Umesh"
            console.log(self) // local
        }

        setName()

    }
}



obj.log()

var a =10
if(a =10){
    var variable =20
    let value = 30
    value =58
    console.log(value)
    const val =45
    val=98
    console.log(val)
}
console.log(variable)
//console.log(value)
//console.log(val)

function sample(){
    var i = 10; // private variables in javascript
}

if(a=10){
    var i=35
}

console.log(i)
