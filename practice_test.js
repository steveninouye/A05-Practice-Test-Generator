// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements

Array.prototype.median = function() {
   let dup = this.sort();
   let middle = Math.floor(dup.length / 2);
   if (this.length === 0) {
      return null;
   } else if (this.length % 2 === 0) {
      return (dup[middle] + dup[middle - 1]) / 2;
   } else {
      return dup[middle];
   }
};

Array.prototype.myJoin = function(separator = '') {
   let result = '';
   this.forEach((e, i) => {
      result += e;
      if (i !== this.length - 1) {
         result += separator;
      }
   });
   return result;
};

Array.prototype.myReverse = function() {
   let result = [];
   this.forEach((e) => {
      result.unshift(e);
   });
   return result;
};

// Write an Array#dups method that will return a hash containing the indices of all
// duplicate elements. The keys are the duplicate elements; the values are
// arrays of their indices in ascending order, e.g.
// [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

Array.prototype.dups = function() {
   let hash = {};
   this.forEach((e, i) => {
      if (!hash[e]) {
         hash[e] = [];
      }
      hash[e].push(i);
   });
   Object.keys(hash).forEach((key) => {
      if (hash[key].length < 2) {
         delete hash[key];
      }
   });
   return hash;
};

// # Write a monkey patch of binary search:
// # E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4

Array.prototype.myBsearch = function(target) {
   if (this.length < 2 && !this.includes(target)) return null;
   let middle = Math.floor(this.length / 2);
   let midEl = this[middle];
   if (midEl === target) {
      return middle;
   } else if (target < midEl) {
      return this.slice(0, middle).myBsearch(target);
   } else {
      let prev = this.slice(middle + 1).myBsearch(target);
      if (prev === null) {
         return null;
      } else {
         return middle + 1 + prev;
      }
   }
};

// Write a method, `Array#two_sum`, that finds all pairs of positions where the
// elements at those positions sum to zero.

// NB: ordering matters. I want each of the pairs to be sorted smaller index
// before bigger index. I want the array of pairs to be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

Array.prototype.twoSum = function() {
   let result = [];
   for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
         if (this[i] + this[j] === 0) {
            result.push([i, j]);
         }
      }
   }
   return result;
};

Array.prototype.rotate = function(num = 1) {
   num = num % this.length;
   if (num >= 0) {
      return this.slice(num).concat(this.slice(0, num));
   } else {
      return this.slice(num).concat(this.slice(0, num));
   }
};

function transpose(arr) {
   let result = [];
   arr.forEach((arr, idx1) => {
      arr.forEach((el, idx2) => {
         if (idx1 === 0) {
            result.push([]);
         }
         result[idx2].push(el);
      });
   });
   return result;
}

Array.prototype.flatten = function() {
   let result = [];
   this.forEach((el) => {
      if (el instanceof Array) {
         result = result.concat(el.flatten());
      } else {
         result.push(el);
      }
   });
   return result;
};

// Write a recursive method that returns all of the permutations of an array

function permutations(array) {
   if (array.length < 2) return [array];
   let e = array.pop();
   let prev = permutations(array);
   let result = [];
   prev.forEach((el) => {
      for (let i = 0; i <= el.length; i++) {
         let dup = el.slice();
         dup.splice(i, 0, e);
         result.push(dup);
      }
   });
   return result.sort();
}

// Using recursion and the is_a? method,
// write an Array#deep_dup method that will perform a "deep" duplication of the interior arrays.

function deepDup(arr) {
   let result = [];
   arr.forEach((el) => {
      if (el instanceof Array) {
         result.push(deepDup(el));
      } else {
         result.push(el);
      }
   });
   return result;
}

// return b^n recursively. Your solution should accept negative values
// for n

// returns all subsets of an array

function subsets(array) {
   if (array.length === 0) return [[]];
   let e = array.pop();
   let prev = subsets(array);
   let dup = prev.slice();
   let result = [];
   dup.forEach((el) => {
      let d = el.slice();
      d.push(e);
      result.push(d);
   });
   return prev.concat(result);
}

// Implement a method that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0

function fibsSum(n) {
   if (n === 1) return 1;
   if (n === 0) return 0;
   return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}

// Write a method, `digital_root(num)`. It should Sum the digits of a positive
// integer. If it is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
//
// You may wish to use a helper function, `digital_root_step(num)` which performs
// one step of the process.

function digitalRoot(num) {
   let sum = 10;
   while (sum > 9) {
      sum = 0;
      while (num > 0) {
         sum += num % 10;
         num = Math.floor(num / 10);
      }
      num = sum;
   }
   return sum;
}

// Write a recursive method that takes in a base 10 number n and
// converts it to a base b number. Return the new number as a string
//
// E.g. base_converter(5, 2) == "101"
// base_converter(31, 16) == "1f"

function baseConverter(num, b) {}

// Write a recursive function that returns the prime factorization of
// a given number. Assume num > 1
//
// prime_factorization(12) => [2,2,3]

function primeFactorization(num) {}

// Write a recursive method that takes in a string to search and a key string.
// Return true if the string contains all of the characters in the key
// in the same order that they appear in the key.
//
// string_include_key?("cadbpc", "abc") => true
// string_include_key("cba", "abc") => false

function stringIncludeKey(string, key) {}

// Write a recursive method that returns the first "num" factorial numbers.
// Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
// is 1!, the 3rd factorial is 2!, etc.

function factorialsRec(num) {}
function factorial(num) {}

Array.prototype.bubbleSort = function(func) {};

// Write an Array#merge_sort method; it should not modify the original array.

Array.prototype.mergeSort = function(func) {};

Array.prototype.merge = function(arr, func) {};

// Write a monkey patch of quick sort that accepts a callback

Array.prototype.quickSort = function(func) {};

// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// Example:
// jumble_sort("hello") => "ehllo"
// jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

function jumbleSort(str, alphabet) {}

// Write a method that capitalizes each word in a string like a book title
// Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'

function titleize(title) {}

// Back in the good old days, you used to be able to write a darn near
// uncrackable code by simply taking each letter of a message and incrementing it
// by a fixed number, so "abc" by 2 would look like "cde", wrapping around back
// to "a" when you pass "z".  Write a function, `caesar_cipher(str, shift)` which
// will take a message and an increment amount and outputs the encoded message.
// Assume lowercase and no punctuation. Preserve spaces.
//
// To get an array of letters "a" to "z", you may use `("a".."z").to_a`. To find
// the position of a letter in the array, you may use `Array#find_index`.

function caesarCipher(str, shift) {}

// Write a String#symmetric_substrings method that returns an array of substrings
// that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
// Only include substrings of length > 1.

String.prototype.symmetricSubstrings = function() {};

function isPalindrome(str) {}
// Returns an array of all the subwords of the string that appear in the
// dictionary argument. The method does NOT return any duplicates.

String.prototype.realWordsInString = function(dictionary) {};

// Write a method that translates a sentence into pig latin. You may want a helper method.
// 'apple' => 'appleay'
// 'pearl' => 'earlpay'
// 'quick' => 'ickquay'

function pigLatinify(sentence) {}

// Monkey patch the Array class and add a my_inject method. If my_inject receives
// no argument, then use the first element of the array as the default accumulator.

Array.prototype.myReduce = function(func, acc) {
   let dup = this.slice();
   acc = acc || dup.shift();
   dup.forEach((el) => {
      acc = func(acc, el);
   });
   return acc;
};

Function.prototype.myCurry = function(numArgs) {
   let args = [];
   let fn = this;
   return function infn(arg) {
      args.push(arg);
      if (args.length === numArgs) {
         return fn(...args);
      } else {
         return infn;
      }
   };
};

// write Function.prototype.inherits.

Function.prototype.inherits = function(parent) {
   function Surrogate() {}
   Surrogate.prototype = parent.prototype;
   this.prototype = new Surrogate();
   this.prototype.constructor = this;
};

// write Function.prototype.myBind.
Function.prototype.myBind = function(context, ...bindArgs) {
   let fn = this;
   return function(...innerArgs) {
      return fn.call(context, ...bindArgs, ...innerArgs);
   };
};

Function.prototype.myCall = function(context, ...args) {
   return this.apply(context, args);
};
