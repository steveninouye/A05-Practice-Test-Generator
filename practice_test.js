// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements

Array.prototype.median = function() {};

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

const myFind = function(array, callback) {};

Array.prototype.myJoin = function(separator) {};

Array.prototype.myReverse = function() {};

// Write an Array#dups method that will return a hash containing the indices of all
// duplicate elements. The keys are the duplicate elements; the values are
// arrays of their indices in ascending order, e.g.
// [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

Array.prototype.dups = function() {};

// # Write a monkey patch of binary search:
// # E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4

Array.prototype.myBsearch = function(target) {};

// Write a method, `Array#two_sum`, that finds all pairs of positions where the
// elements at those positions sum to zero.

// NB: ordering matters. I want each of the pairs to be sorted smaller index
// before bigger index. I want the array of pairs to be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

Array.prototype.twoSum = function() {};

Array.prototype.rotate = function(num) {};

function transpose(arr) {}

Array.prototype.flatten = function() {};

// Write a method that returns the factors of a number in ascending order.

function factors(num) {}

// primes(num) returns an array of the first "num" primes.
// You may wish to use an is_prime helper method.

function primes(num) {}

// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function() {};

// Write a recursive method that returns all of the permutations of an array

function permutations(array) {}

// Write a recursive method that returns the sum of all elements in an array

function recSum(nums) {}

// Using recursion and the is_a? method,
// write an Array#deep_dup method that will perform a "deep" duplication of the interior arrays.

function deepDup(arr) {}

// return the sum of the first n even numbers recursively. Assume n > 0

function firstEvenNumbersSum(n) {}

// return b^n recursively. Your solution should accept negative values
// for n

function exponent(b, n) {}

// returns all subsets of an array

function subsets(array) {}

// Implement a method that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0

function fibsSum(n) {}

// Write a method, `digital_root(num)`. It should Sum the digits of a positive
// integer. If it is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
//
// You may wish to use a helper function, `digital_root_step(num)` which performs
// one step of the process.

function digitalRoot(num) {}

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

function jumbleSort(str, alphabet = null) {}

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
