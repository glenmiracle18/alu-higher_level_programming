#!/usr/bin/node
// In the code you wrote for Task 3, the greeting() 
// method is defined twice, once for each cat. This isn't ideal 
// (specifically, it violates a principle in programming sometimes 
// called DRY or "Don't Repeat Yourself").

// In this task we want you to improve the code so greeting() is only 
// defined once, and every cat instance gets its own greeting() 
// method. Hint: you should use a JavaScript constructor to create cat instances.

function cat (name, breed, color)  {
    name = 'Bertie',
    breed = 'Cymric',
    color = 'white',
    cat.prototype.greeting = function () {
      console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
  }
  
// const cat2 = {
//     name : 'Elfie',
//     breed : 'Aphrodite Giant',
//     color : 'ginger',
//     greeting: function() {
//       console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
//   }
  
const cat1 = new cat('Bertie', 'Cymric', 'white');
cat1.greeting()


// cat.greeting();
// cat2.greeting();
    