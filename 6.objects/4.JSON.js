var obj1 ={
    "userId": 1,
    "id": 1,
    "title": "This is title",
    "body": "This is body"
}

console.log(obj1)

var obj2 = {
    userId: 1,
    id: 1,
    title: 'This is title',
    body: 'This is body'
}

console.log(obj2)

var person = {firstName: 'John', lastName: "Galt"}



console.log(person, typeof person)

var personString= JSON.stringify(person)
console.log(personString, typeof personString)

var personObject = JSON.parse(personString)
console.log(personObject , typeof personObject)