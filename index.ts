/** HIGHER ORDER FUNCTIONS
 * 1.) Given a string variable, revert its letter casing and print it to the console.
 * For example if given the string 'ReVERt this StriNG' the expected output
 * should be 'rEverT THIS sTRIng'
 * Conditions: Do not use a for loop or the .forEach utility function,
 * you must use the .map() Array operator.
 */

const sentence = 'LETS INVERT the CasE in THIs sTRING';
const result = [];
const invertCasing = (letter) => {
  // your code here
};

/** ASYNCHRONOUS PROGRAMMING
 * 2.) Given a function doAsync(), write code in this
 * function that executes a passed function that prints
 * to the console a parameter called 'word' from an
 * outside function after 2 seconds. The outside function
 * has to be the one responsible from passing the 'word' param
 * to the doAsync fn
 */

const doAsync = (/** ? */) => {
  // your code here
};

/** CLOSURES
 * 3.) make the console.log inside the function outter()
 * print 'Bob' instead of 'John'
 */
function outter() {
  this.name = 'John';
  return (function () {
    console.log(this.name);
  })();
}

function closure() {
  this.name = 'Bob';
  // your code here
}

closure();

/** OBJECT ORIENTED PROGRAMMING
 * 4.) Write a typescript class Robot that is generic so that you can
 * create various Robots of different companies [SpaceX, DynamicIndustries, GenericProtos], and that implements an IMobility interface that contains basic human motions like walk, run, jump. Lastly create 2 types of Robots with different IMobility implementations.
 */

// class here
