// # Write a monkey patch of binary search:
// # E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4

Array.prototype.myBsearch = function(target) {};

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements

Array.prototype.median = function() {};

Array.prototype.myJoin = function(separator = '') {
  let result = '';
  for (let i = 0; i < this.length; i++) {
    result += this[i];
    if (i !== this.length - 1) {
      result += separator;
    }
  }
  return result;
};

// primes(num) returns an array of the first "num" primes.
// You may wish to use an is_prime helper method.

function primes(num) {}

Array.prototype.flatten = function() {};

function transpose(arr) {}

// Write a method, `Array#two_sum`, that finds all pairs of positions where the
// elements at those positions sum to zero.

// NB: ordering matters. I want each of the pairs to be sorted smaller index
// before bigger index. I want the array of pairs to be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

Array.prototype.twoSum = function() {};

// Write an Array#dups method that will return a hash containing the indices of all
// duplicate elements. The keys are the duplicate elements; the values are
// arrays of their indices in ascending order, e.g.
// [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

Array.prototype.dups = function() {};

// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function() {};

Array.prototype.rotate = function(num) {};

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

const myFind = function(array, callback) {};

// Write a method that returns the factors of a number in ascending order.

function factors(num) {}

Array.prototype.myReverse = function() {};
