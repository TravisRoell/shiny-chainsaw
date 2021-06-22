// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// const callback = function(element, index, array) {
//   console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function divideByTwo(a) {
  return a / 2;
}
const divideByTwoo = function (a) {
  return a / 2;
};
const divideByTwooo = (a) => {
  return a / 2;
};

const divideByTwoooo = (a) => a / 2;
// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// const timeThree = function(element, index, array) {
//   return element * 3;
//   }
// map(arr, timeThree);
// BONUS: use the forEach method you use to create map
function map(array, callback) {
  const arr = [];
  forEach(array, (element, index, array) => {
    arr[index] = callback(element);
  });
  return arr;
}


// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// let arr = [1, 2, 3, 4];
// const isEven = function (element, index, collection) {
//   return element % 2 === 0;
// };
// filter([1, 2, 3, 4], (e) => e % 2 === 0);

// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  const solution = [];
  for (let i = 0; i < collection.length; i++){
    if (callback(collection[i])) {
      solution.push(collection[i]);
    }
  }
  return solution;
}

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return value % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
  if (Array.isArray(collection)) {
    const solution = [];
    for (let i = 0; i < collection.length; i++){
      const element = collection[i];
      if (!callback(element)) {
        solution.push(element);
      }
    }
    return solution;
  }
  const solution = {};
  for (const property in collection) {
    const element = collection[property];
    if (!callback(element)) {
      solution[property] = element;
    }
  }
  return solution;
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
//unique.indexOf searches for the position of array[i]'s element in itself, returns -1 if fail. && Sanity check that the element isnt blank?
function uniq(array) {
  const unique = [];
  for (let i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i]) === -1 && array[i] !== '') {
      unique.push(array[i]);
    }
  }
  return unique;
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++){
    if (array[i] === value) {
      return i;
    }
  }
  return -1;

}


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
  return function () {
    func && func.apply(this, arguments);
    func = null;
  };
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
  let indexElement = 0;
  if (start || start === 0) {
    indexElement = 0;
  }
  else {
    indexElement = 1;
  }// If start is supplied then start index at 0, otherwise if not supplied start with the first element arr[1] (?)
  let element = 1;
  if (start === undefined) {
    element = array[0];
  }
  else {
    element = start;
  } //Check if start is not supplied - undefined then start with the zero(?) index in the collection. If it is supplied start with that element.
  //1 hour of banging my head over start ? 0 : 1; then I realized we start on second iterations, because first iteration is because element is being assigned to first value...
  for (let i = indexElement; i < array.length; i++){
//    console.log(element);
    element = callback(element, array[i]);
//    console.log("stored: " + element + "current: " + array[i]);
  }
  console.log("End");
  return element;
}

//last 2 est 1.5hr

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array, func) {
  return reduce(array, (stored, current) => {
    if (stored === false) return false;
    return func(current);
  }, 0);
}

/*
function map(array, callback) {
  const arr = [];
  forEach(array, (element, index, array) => {                                                 forEach(array, callback)
    arr[index] = callback(element);
  });
  return arr;
}
*/

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
  return array.concat.apply([],array);
}
// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
  const arr = [];
  const arrFlatten = (array) => {
    let counter = 0;
    while (counter < array.length) {
      const val = array[counter];
      if (Array.isArray(val)) {
        arrFlatten(val);
      }
      else {
        arr.push(val);
      }
      counter++;
    }
  };
  arrFlatten(array);
  return arr;
}
