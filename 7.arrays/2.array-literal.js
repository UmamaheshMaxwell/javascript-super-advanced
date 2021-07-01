// var data = []
// data[0] ="Uma"
// data[1]= 1234
// data[3]=true
// console.log(data)
var data =[
            1,
            "uma",
            true,
            null,
            undefined,
            {name: 'mahesh'},
            function(name){return name},
            ["red", "blue", "yellow"]
          ]

console.log(data[6](data[5].name))