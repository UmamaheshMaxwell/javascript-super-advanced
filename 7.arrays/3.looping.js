var data = ["scott", "adam", "Tuan"]

console.log('******** Using For ********')
//1st way 
for(var i=0; i<data.length; i++){
   console.log(i, data[i]) 
}

console.log('******** Using Foreach ********')

// 2nd Way
var forEachData = data.forEach(function(item, index){
    console.log(index, item)
})

console.log(forEachData)

console.log('******** Using map********')
// 3rd way 

var mapData = data.map(function(item, index){
    return  index + '_' + item 
})

console.log(mapData)

//4th way 

for(var i in data){
    console.log(i, data[i])
}

// 5th Way

for(var [i,item] of data.entries()){
    console.log(i, item)
}



