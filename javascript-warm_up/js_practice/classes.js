#!/usr/bin/node
//  lets recall what we learnt about constructor functions
//  these are basically funtions that can be called as
// many times ass possible, without having to bother
// about writing the whole code structure from scratch

// a constructor is just a function called using the "new" keyword

// function Person(name) {
//     this.name = name;
//     this.introduceSelf = function () {
//       console.log(`Hi! I'm ${this.name}.`);
//     };
//     // return obj;
//   }

// //   const glen = createPerson("Glen");
// //   glen.name;
// //   glen.introduceSelf();

// //   const jean = createPerson("Jean");
// //   jean.name;
// //   jean.introduceSelf();

// //   const pelcy = createPerson("Pelcy");
// //   pelcy.name;
// //   pelcy.introduceSelf();


// const glen = new Person("Glen");
// glen.name;
// glen.introduceSelf();





// now let's hop into the real deal .... CLASSES


// class Animal {
//     sleep() {
//         console.log('zzzzzz');
//     }
// }

// const cow = new Animal();
// cow.sleep();

// Base class
class Person {
    name;

    constructor(name) {
        this.name = name;
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    }
}

// inheritance from the Person class
// class Professor extends Person {
//     teaches;

//     constructor(name, teaches) {
//         super(name);
//         this.teaches = teaches;
//     }

//     introduceSelf() {
//         console.log(
//             `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
//         );
//     }

//     grade(paper) {
//         const grade = Math.floor(Math.random() * (5 - 1) + 1);
//         console.log(grade);
//     }
// }

// const glen = new Professor('Glen', 'Software E.');
// glen.introduceSelf()
// glen.grade('My paper')


// Now let's learn about Encapsulation

// class Student extends Person {
//     #year;

//     constructor(name, year) {
//         super(name);
//         this.#year = year;
//     }

//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
//     }


//     canStudyArchery() {
//         return this.#year > 1;
//     }
// }

// const summers = new Student('Summers', 2);
// summers.introduceSelf();
// summers.canStudyArchery()
// // console.log(summers.year);  // can only acces this variable from within


// private methods

class Example {
    // public method that call private method
    somePublicMethod() {
        this.#somePrivateMethod();
    }

    #somePrivateMethod() {
        console.log('You called me?');
    }
}

const exampleInstance = new Example();
exampleInstance.somePublicMethod();  // you called me?
// exampleInstance.somePrivateMethod();  // syntax err
