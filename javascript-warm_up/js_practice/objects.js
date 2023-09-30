// let dog = {name: 'spot', breed: 'chow-chow'}
// console.log(dog.name)
// console.log(dog.breed);
// console.log(dog);

// import { log } from "console";

// dynamic typing
// let myNumber = "500"; // oops, this is still a string
// console.log(typeof(myNumber));

// myNumber = 500; // much better - now this is a number
// console.log(typeof(myNumber));


// const bird = { species: "Kestrel" };
// console.log(bird.species, typeof (bird))

// bird.species = "sparrow";
// console.log(bird.species); // you can update the value of an object
//                            // witht the const data type.

// const person = {
//     name: {
//         first: "Bob",
//         last: "Smith",
//     },
//     age: 32,
//     bio() {
//         console.log(
//             `${this.name.first} ${this.name.last} is ${this.age} years old.`);
//     },
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name.first}.`);
//     },
// };

// person.bio()
// person.introduceSelf()


// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//     myDataName: "height",
//     myDataValue: "1.9m",
//     this[myDataName]: myDataValue,
// };

// function logProperty(propertyName) {
//     console.log(person[propertyName]);
// }

// // person.age = 45;
// // person["name"]["last"] = "Glen";
// person['eyes'] = "blue";
// person.farewell  = function () {
//     console.log("Bye Everybody");
// }

// // console.dir(person);

// logProperty("name");
// logProperty("age");
// person.farewell()
// console.log(person.eyes);



// const person1 = {
//     name: "Glen",
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}.`);
//     },
// };

// const person2 = {
//     name: "Miracle",
//     introduceSelf () {
//         console.log(`Hi! I'm ${this.name}.`);
//     },
// };

// person1.introduceSelf()
// person2.introduceSelf()



function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}
createPerson('Glen').introduceSelf();
console.log(createPerson('Glen').name);