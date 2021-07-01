var colors = new Array(3)
colors[0] ="Red"
colors[1]="Green"
colors[2]="Blue"
colors[3] ="Crimson"

console.log(colors)
console.log(colors.length)

console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(colors[3])
console.log(colors[4])


var fruits = new Array("Apples", "Oranges","Grapes", "Dragon Fruits")
console.log(fruits)


var vegetables = new Array("Potato", "Onions", "Tomato", "Egg Plant")
console.log(vegetables)

var mixofBoth1 = fruits.concat(vegetables)
console.log(mixofBoth1)

var mixofBoth2 = vegetables.concat(fruits)
console.log(mixofBoth2)

var names = new Array('Johngalt', 'Tracy Whitney', 'Ayan Rand')
//var names2 = new Array("Howard Roark")
var concat = names.concat(true)
console.log(concat)