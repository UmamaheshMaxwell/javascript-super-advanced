// var person = {
//     firstName: 'Scott',
//     lastName: 'Destanick',
//     city: 'Boston'
// }

// person.age = 45;
// person.firstName = 'Scotty'
// delete person.city;

// console.log(person)

/* Object.preventExtensions()
    ? we can't add new property
    ? we can edit the property
    ? we can delete the property
*/

var preventObjet =  {
    name: 'Uma',
    city: 'Hydrebad',
    age: 25
}

Object.preventExtensions(preventObjet)

preventObjet.country = 'USA' // Add
preventObjet.name = "Umesh" // Edit
delete preventObjet.age; // Delete

console.log(preventObjet)

/* Object.seal()
    ? we can't add new property
    ? we can edit the property
    ? we can't delete the property
*/

var sealObject =  {
    name: 'Uma',
    city: 'Hydrebad',
    age: 25
}

Object.seal(sealObject)

sealObject.country = 'USA' // Add
sealObject.name = "Umesh" // Edit
delete sealObject.age; // Delete

console.log(sealObject)

/* Object.freeze()
    ? we can't add new property
    ? we can't edit the property
    ? we can't delete the property
    ! catch : Inner Objects needs to 
    !  be freezed
*/

var freezeObject =  {
    name: 'Uma',
    city: 'Hydrebad',
    age: 25,
    address: {
        state: 'Telangana',
        street : '1st Main'
    }
}

Object.freeze(freezeObject)

freezeObject.country = 'USA' // Add
freezeObject.name = "Umesh" // Edit
delete freezeObject.age; // Delete

Object.freeze(freezeObject.address)
freezeObject.address.state = 'Karnataka'
console.log(freezeObject)