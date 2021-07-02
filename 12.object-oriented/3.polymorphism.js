// function over loading - same function with different parameters
// function / method overriding - 
function Shape(){

}

Shape.prototype.draw = function(){
    return "I am generic shape"
}

// Circle
function Circle() {

}

// Polymorphism 
Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function(){
    return "I am Circle"
}

// Square 
function Square(){

}

// Polymorphism
Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function(){
    return "I am Square"
}

// Square 
function Triangle(){

}

// Polymorphism
Triangle.prototype = Object.create(Shape.prototype)

// Triangle.prototype.draw = function(){
//     return "I am Traiangle"
// }

// var shape = new Shape()
// console.log(shape.draw())

// var circle = new Circle()
// console.log(circle.draw())

// var square = new Square()
// console.log(square.draw())

// var triangle = new Triangle()
// console.log(triangle.draw())

var shapes = [ new Shape(), new Circle(),new Square(),new Triangle()]

shapes.forEach(function(shape){
    console.log(shape.draw())
})
