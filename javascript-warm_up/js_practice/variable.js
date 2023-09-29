// let myName = "Glen";
// function logName() {
//     console.log(myName); // logs 'undefined' because the variable is not in scope here!
// }

// logName()
// myName = "Chris"
// console.log(myName);
// const fruitType = "Bananas"
// switch (fruitType) {
//     case "Oranges":
//         console.log("Oranges are $0.59 a pound.");
//         break;
//     case "Apples":
//         console.log("Apples are $0.32 a pound.");
//         break;
//     case "Bananas":
//         console.log("Bananas are $0.48 a pound");
//         break;
//     case "Cheries":
//         console.log("Cherries are $3.00 a pound");
//         break;

//     default:
//         console.log(`Sorry, we are out of ${fruitType}`);
//         break;
// }
// console.log("Is there anything else you'd like?");


// function getMonthName(mo) {
//     mo--; // adjust month number for array index (so
//     // that 0 = Jan, 11 = Dec)
//     const months = [
//         "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//     ];
//     if (months[mo]) {
//         return months[mo];
//     } else {
//         throw new Error("InvalidMonthNo"); // throw keyword is used here
//     }
// }

// try {
//     //statements to try
//     monthName = getMonthName(myMonth); // function could throw exception
// } catch (e) {
//     monthName = "unknown";
//     logMyErrors(e); // pass exception object to error 
//     // handler (i.e. you own function)
// }

// // function call
// getMonthName(5);



// function f()  {
//     try {
//         console.log(0);
//         throw "bogus";
//     } catch (e) {
//         console.log(1);
//         // This return statement is suspended
//         // until finally block has completed
//         return true;
//         console.log(2);  // not reachable
//     } finally {
//         console.log(3);
//         return false; // overwrites the previous return
//         console.log(4); // not reachable
//     }
//     // "return false" is executed now
//     console.log(5) // not reachable
// }
// console.log(f()); // 0, 1, 3, false

// function doSomethingErrorProne() {
//     if (ourCodeMakesAMistake()) {
//       throw new Error("The message");
//     } else {
//       doSomethingToGetAJavaScriptError();
//     }
//   }
  
//   try {
//     doSomethingErrorProne();
//   } catch (e) {
//     // Now, we actually use `console.error()`
//     console.error(e.name); // 'Error'
//     console.error(e.message); // 'The message', or a JavaScript error message
//   }
  





