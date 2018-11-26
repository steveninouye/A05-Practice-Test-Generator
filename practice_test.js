// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements

Array.prototype.median = function() {
   if (this.length === 0) {
      return null;
   }
   let sorted = this.sort();
   let mid = sorted.length / 2;
   if (sorted.length % 2 === 0) {
      return (sorted[mid] + sorted[mid - 1]) / 2;
   } else {
      return sorted[Math.floor(mid)];
   }
};

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

const myFind = function(array, callback) {
   return array.filter((el) => callback(el))[0];
};

Array.prototype.myJoin = function(separator) {
   // return this.join(separator ? separator : '');
   separator = separator || '';
   return this.reduce((acc, el, idx) => {
      if (idx === this.length - 1) {
         return acc + el;
      } else {
         return acc + el + separator;
      }
   }, '');
};

Array.prototype.myReverse = function() {
   return this.reduce((acc, el) => {
      acc.unshift(el);
      return acc;
   }, []);
};

// Write an Array#dups method that will return a hash containing the indices of all
// duplicate elements. The keys are the duplicate elements; the values are
// arrays of their indices in ascending order, e.g.
// [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

Array.prototype.dups = function() {
   let result = {};
   this.forEach((key, idx) => {
      if (!result[key]) {
         result[key] = [];
      }
      result[key].push(idx);
   });
   this.forEach((key) => {
      if (result[key].length < 2) {
         delete result[key];
      }
   });
   return result;
};

// # Write a monkey patch of binary search:
// # E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4

Array.prototype.myBsearch = function(target) {
   if (this.length === 0 || (this.length === 1 && this[0] != target)) {
      return null;
   }
   let midpt = Math.floor(this.length / 2);
   let el = this[midpt];
   if (el === target) {
      return midpt;
   } else if (el < target) {
      let prev = this.slice(midpt + 1).myBsearch(target);
      if (prev === null) {
         return null;
      } else {
         return midpt + 1 + prev;
      }
   } else {
      return this.slice(0, midpt).myBsearch(target);
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
   const result = [];
   for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
         if (this[i] + this[j] === 0) {
            result.push([i, j]);
         }
      }
   }
   return result;
};

Array.prototype.rotate = function(num = 1) {
   console.log(this);
   let mod = num % this.length;
   if (mod >= 0) {
      return this.slice(mod).concat(this.slice(0, mod));
   } else {
      return this.slice(mod).concat(this.slice(0, this.length + mod));
   }
};

function transpose(arr) {
   let result = [];
   arr.forEach((array, idx1) => {
      array.forEach((el, idx2) => {
         if (idx1 === 0) result.push([]);
         result[idx2].push(el);
      });
   });
   return result;
}

Array.prototype.flatten = function() {
   return this.reduce(
      (ac, el) =>
         el instanceof Array ? ac.concat(el.flatten()) : ac.concat([el]),
      []
   );
};

// Write a method that returns the factors of a number in ascending order.

function factors(num) {
   let result = [];
   for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
         result.push(i);
      }
   }
   return result;
}

// primes(num) returns an array of the first "num" primes.
// You may wish to use an is_prime helper method.

function primes(num) {
   let result = [];
   for (let i = 2; result.length < num; i++) {
      if (isPrime(i)) {
         result.push(i);
      }
   }
   return result;
}

function isPrime(num) {
   for (let i = 2; i <= Math.ceil(num / 2); i++) {
      if (num % i === 0) return false;
   }
   return true;
}

// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function(start, end) {
   if (start > end) return '';
   end = end || this.length;
   let result = '';
   for (let i = start; i < end; i++) {
      if (this[i]) result += this[i];
   }
   return result;
};

// Write a recursive method that returns all of the permutations of an array

function permutations(array) {
   if (array.length <= 1) return [array];
   let el = array.pop();
   let prev = permutations(array);
   let result = [];
   prev.forEach((e) => {
      for (let i = 0; i <= prev.length; i++) {
         let temp = e.slice();
         temp.splice(i, 0, el);
         result.push(temp);
      }
   });
   return result.sort();
}

// Write a recursive method that returns the sum of all elements in an array

function recSum(nums) {
   if (nums.length === 0) return 0;
   let el = nums.pop();
   return el + recSum(nums);
}

// Using recursion and the is_a? method,
// write an Array#deep_dup method that will perform a "deep" duplication of the interior arrays.

function deepDup(arr) {
   return arr.map((el) => (el instanceof Array ? deepDup(el) : el));
}

// return the sum of the first n even numbers recursively. Assume n > 0

function firstEvenNumbersSum(n) {
   if (n === 0) return 0;
   return 2 * n + firstEvenNumbersSum(n - 1);
}

// return b^n recursively. Your solution should accept negative values
// for n

function exponent(b, n) {
   if (n === 0) return 1;
   if (n > 0) {
      return b * exponent(b, n - 1);
   } else {
      return (1 / b) * exponent(b, n + 1);
   }
}

// returns all subsets of an array

function subsets(array) {
   if (array.length === 0) return [[]];
   let el = array.pop();
   let prev = subsets(array);
   let dup = prev.slice();
   dup = dup.map((e) => e.slice().concat([el]));
   return prev.concat(dup);
}

// Implement a method that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0

function fibsSum(n) {
   if (n === 0) return 0;
   if (n === 1) return 1;
   let prev = fibsSum(n - 1);
   let prev2 = fibsSum(n - 2);
   return prev + prev2 + 1;
}

// Write a method, `digital_root(num)`. It should Sum the digits of a positive
// integer. If it is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
//
// You may wish to use a helper function, `digital_root_step(num)` which performs
// one step of the process.

function digitalRoot(num) {
   if (num < 10) return num;
   let result = 0;
   while (num > 0) {
      result += num % 10;
      num = Math.floor(num / 10);
   }
   return digitalRoot(result);
}

// Write a recursive method that takes in a base 10 number n and
// converts it to a base b number. Return the new number as a string
//
// E.g. base_converter(5, 2) == "101"
// base_converter(31, 16) == "1f"

function baseConverter(num, b) {
   if (num === 0) return '';
   let letters = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
   return baseConverter(Math.floor(num / b), b) + letters[num % b];
}

// Write a recursive function that returns the prime factorization of
// a given number. Assume num > 1
//
// prime_factorization(12) => [2,2,3]

function primeFactorization(num) {
   let result = [];
   for (let i = 2; num > 1; i++) {
      while (num % i === 0) {
         result.push(i);
         num /= i;
      }
   }
   return result;
}

// Write a recursive method that takes in a string to search and a key string.
// Return true if the string contains all of the characters in the key
// in the same order that they appear in the key.
//
// string_include_key?("cadbpc", "abc") => true
// string_include_key("cba", "abc") => false

function stringIncludeKey(string, key) {
   if (key.length === 0) return true;
   let ltr = key[0];
   let idx = string.indexOf(ltr);
   if (idx === -1) {
      return false;
   } else {
      return stringIncludeKey(string.slice(idx + 1), key.slice(1));
   }
}

// Write a recursive method that returns the first "num" factorial numbers.
// Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
// is 1!, the 3rd factorial is 2!, etc.

function factorialsRec(num) {
   if (num === 1) {
      return [1];
   }
   let result = 1;
   for (let i = 1; i < num; i++) {
      result *= i;
   }
   return factorialsRec(num - 1).concat([result]);
}

Array.prototype.bubbleSort = function(func) {
   func =
      func ||
      function(x, y) {
         if (x > y) return 1;
         return -1;
      };
   let dup = this.slice();
   let sorted = false;
   while (!sorted) {
      sorted = true;
      dup.forEach((el1, i) => {
         if (i !== dup.length - 1) {
            let j = i + 1;
            if (func(el1, dup[j]) === 1) {
               [dup[i], dup[j]] = [dup[j], dup[i]];
               sorted = false;
            }
         }
      });
   }
   return dup;
};

// Write an Array#merge_sort method; it should not modify the original array.

Array.prototype.mergeSort = function(func) {
   if (this.length <= 1) return this;
   func =
      func ||
      function(x, y) {
         if (x > y) return 1;
         return -1;
      };
   let midpt = Math.floor(this.length / 2);
   let left = this.slice(0, midpt).mergeSort(func);
   let right = this.slice(midpt).mergeSort(func);
   return left.merge(right, func);
};

Array.prototype.merge = function(arr, func) {
   let result = [];
   while (this.length > 0 && arr.length > 0) {
      if (func(this[0], arr[0]) === 1) {
         result.push(arr.shift());
      } else {
         result.push(this.shift());
      }
   }
   return result.concat(this).concat(arr);
};

// Write a monkey patch of quick sort that accepts a callback

Array.prototype.quickSort = function(func) {
   let dup = this.slice();
   if (dup.length <= 1) return dup;
   func =
      func ||
      function(x, y) {
         if (x > y) return 1;
         return -1;
      };
   let midpt = Math.floor(dup.length / 2);
   let element = dup.shift();
   let left = dup.filter((el) => func(element, el) === 1);
   let right = dup.filter((el) => func(element, el) !== 1);
   return left
      .quickSort(func)
      .concat([element])
      .concat(right.quickSort(func));
};

// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// Example:
// jumble_sort("hello") => "ehllo"
// jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

function jumbleSort(str, alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')) {
   if (!(str instanceof Array)) str = str.split('');
   return alphabet.reduce(
      (acc, ltr) => acc + str.filter((el) => el === ltr).join(''),
      ''
   );
}

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

// Returns an array of all the subwords of the string that appear in the
// dictionary argument. The method does NOT return any duplicates.

String.prototype.realWordsInString = function(dictionary) {};

// Write a method that translates a sentence into pig latin. You may want a helper method.
// 'apple' => 'appleay'
// 'pearl' => 'earlpay'
// 'quick' => 'ickquay'

function piglatinify(sentence) {}

// Write a method that doubles each element in an array

function doubler(array) {}

// Monkey patch the Array class and add a my_inject method. If my_inject receives
// no argument, then use the first element of the array as the default accumulator.

Array.prototype.myReduce = function(func, acc) {};

Array.prototype.myEvery = function(func) {};

Array.prototype.myFilter = function(func) {};

Array.prototype.myEach = function(func) {};

Array.prototype.reject = function(func) {};

Array.prototype.mySome = function(func) {};

Function.prototype.myCurry = function(numArgs) {};

// write Function.prototype.inherits.

Function.prototype.inherits = function() {};

// write Function.prototype.myBind.
Function.prototype.myBind = function() {};

Function.prototype.myCall = function(ctx, ...args) {};
