/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - if no rules apply, the this keyword defaults to the Window object,
* unless we specify strict mode, then it returns undefined
* 2. Impilicit Binding - automatic binding to whatever is on the left will be refered to as this
* 3. Explicit Binding - explicitly telling the JavaScript engine to point to a specific value using
* call, apply, or bind
* 4. New Binding - use the new keyword and it will refer to that instance of the object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this) // Will log the entirety of the window object

// Principle 2

// code example for Implicit Binding

let Travis = {
    name: 'Travis',
    last: 'Laudahl',
    birthYear: 1995,
    age: function() {
        return `${this.name} is ${2019-this.birthYear} years old`; // Implicit - this. refers to the Travis object
    }
};

// Principle 3

// code example for New Binding

function FullName(name) {
    this.name = name;
    this.sport = 'fishing';
};

let newTravis = new FullName('Travis Laudahl'); // Creates a newTravis object that will reference the FullName object

console.log(newTravis.name);

// Principle 4
// code example for Explicit Binding

function logSport() {
    console.log(this.sport);
}

logSport.call(newTravis); // 'this' will refer to the FullName Object
