let myName = "Glen";
function logName() {
    console.log(myName); // logs 'undefined' because the variable is not in scope here!
}

logName()
myName = "Chris"
console.log(myName);
