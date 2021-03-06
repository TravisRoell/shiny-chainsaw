// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  const result = [];
  for(let i = 0; i < array.length; i++){
    if (array[i] % 2 === 1) {
      result.push(array[i]);
    }
  }
  return result;
}


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
  }
  return result;
}


// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  return Math.max.apply(null, array);
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  return string.trim();
}

// under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
// the "Array" object also contains a number of methods that give arrays their functionality.
// the below function should return an empty object that has the behavior and functionality of an array. this object should have the following methods:
// push(val) adds val to the end
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods

function createArray() {
  this.array = { };
  this.index = 0;
}
createArray.prototype.push = function (val) {
  this.array[this.index] = val;
  this.index++;
  return this;
};
createArray.prototype.pop = function () {
  const value = this.array[this.index - 1];
  this.index--;
  return value;
};
createArray.prototype.unshift = function (val) {
  for (let i = this.index - 1; i >= 0; i--) {
    this.array[i + 1] = this.array[i];
  }
  this.index++;
  this.array[0] = val;
};
createArray.prototype.shift = function () {
  const val = this.array[0];
  for (let i = 0; i < this.index; i++) {
    this.array[i] = this.array[i + 1];
  }
  this.index--;
  return val;
};
