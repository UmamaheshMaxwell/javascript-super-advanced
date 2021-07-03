let array = ["Scott", "Adam", "Tuan", null]

let [name1, name2, name3, name4]= array

console.log(name1, name2, name3, name4)

//console.log("Uma Mahesh".split(' '))

let [firstName, lastName] = "John Galt".split(' ')
console.log(firstName)
console.log(lastName)

// Empty values

let [fName, , title] = ["Uma", "Mahesh", "Mr."]
console.log( fName,  title)

// Objects

let user = {someName: 'Uma', age: 39, city: 'Hyd'}

let {someName, age, city} = user;

console.log(someName, age, city)


let props = {
             skill: 'C#', 
             heroName: 'Tuan',
             key1: 'Uma',
             Id: 1
            }

            console.log(props)
let {skill, heroName, key1, Id} = props

console.log(props.skill)
console.log(props.heroName)
console.log(props.key1)
console.log(props.Id)

console.log(skill, heroName)

let options = {title1: 'Menu', width: 100, height:200}

let {title1, width, height} = options

console.log(title1, width, height)