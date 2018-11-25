Array.prototype.median = function () {
  if (!this.length) return null;
  const sorted = this.sort();
  const mid = Math.floor(this.length / 2);

  if (this.length % 2 != 0) {
    return sorted[mid];
  } else {
    return (sorted[mid] + sorted[mid - 1]) / 2;
  }
}

function myFind (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}

Array.prototype.myJoin = function (separator = '') {
  let newString = ''

  this.forEach( (el, idx) => {
    newString += `${el}`;
    if (idx < this.length - 1) newString += separator;
  })

  return newString;
}

Array.prototype.myReverse = function () {
  const dup = this.slice(0)
  for (let i = 1; i < this.length + 1; i++) {
    this[i - 1] = dup[this.length - i];
  }

  return this;
}

Array.prototype.dups = function() {
  const count = {};
  const dups = {};

  this.forEach( (el, idx) => {
    count[el] = count[el] || [];
    count[el].push(idx);
  });

  const keys = Object.keys(count).filter( el => count[el].length > 1)
  keys.forEach( (key) => {
    dups[key] = count[key];
  });

  return dups;
}

Array.prototype.myBsearch = function(target, func) {
  if (this.length === 0) return null;
  const mid = Math.floor(this.length / 2);

  if (this[mid] === target) {
    return mid;
  } else if (this[mid] > target) {
    return this.slice(0, mid).myBsearch(target);
  } else {
    const result = this.slice(mid + 1, this.length).myBsearch(target);
    return result === null ? result : mid + 1 + result
  }
}

Array.prototype.twoSum = function () {
  const pairs = [];
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) pairs.push([i, j]);
    }
  }

  return pairs;
}

Array.prototype.rotate = function (times = 1) {
  let rotations;
  const rotated = this.slice(0);

  if (times < 0) rotations = this.length % (Math.abs(times) / this.length);
  else rotations = times % this.length;

  for (let i = 0; i < rotations; i++) {
    rotated.push(rotated.shift())
  }

  return rotated;
}

const transpose = function (arr) {
  let transposedArr = [];
  let currRow;

  for (var col = 0; col < arr[0].length; col++) {
    transposedRow = [];
    for (var row = 0; row < arr.length; row++) {
      transposedRow.push(arr[row][col]);
    }
    transposedArr.push(transposedRow);
  }
  return transposedArr;
};

Array.prototype.flatten = function () {
  let flattened = [];

  this.forEach( (el) => {
    if (el instanceof Array) {
      flattened = flattened.concat(el.flatten());
    } else {
      flattened.push(el);
    }
  });

  return flattened;
}

function factors(num) {
  let factors = Array.from(Array(num)).map( (el, idx) => idx + 1)
  return factors.filter( el => num % el === 0);
}

function primes(count) {
  const primes = [];
  let i = 2;

  const isPrime = (num) => {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  while (primes.length < count) {
    if (isPrime(i)) primes.push(i);
    i += 1;
  }

  return primes;
}

String.prototype.mySlice = function(start, end) {
  let slice = "";

  if (typeof end === 'undefined') {
    end = this.length;
  }

  for (let i = start; i < end && i < this.length; i++) {
    slice += this[i];
  }
  return slice;
};

function permutations(array) {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }

   return result;
 }
 return permute(array);
}

function recSum(nums) {
  if (!nums.length) return 0;
  return nums[0] + recSum(nums.splice(1));
}

function deepDup(arr) {
  return arr.map( (el) => el.constructor.name === 'Array' ? deepDup(el) : el);
}

function firstEvenNumbersSum(n) {
  if (n === 1) return 2;
  return 2 * n + firstEvenNumbersSum(n - 1);
}

function exponent(b, n) {
  if (n === 0) return 1;

  if (n > 0) {
    return b * exponent(b, n - 1);
  } else {
    return 1/b * exponent(b, n + 1);
  }
}

function subsets(arr) {
  if (!arr.length) return [[]];
  const last = arr[arr.length - 1];
  const subs = subsets(arr.slice(0, arr.length - 1));
  return subs.concat(subs.map( (el) => {
    let newArr = el.slice(0)
    newArr.push(last);
    return newArr;
  }));
}

function fibsSum(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}

function digitalRoot(num) {
  while (num > 10) {
    num = digitalRootStep(num);
  }

  return num;
}

function digitalRootStep(num) {
  let root = 0;

  while (num > 0) {
    root += num % 10;
    num = Math.floor(num/10);
  }

  return root;
}

function baseConverter(num, b) {
  if (num === 0) return "";

  const digits = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f'
  ];

  return baseConverter(Math.floor(num/b), b) + digits[num % b];
};

function primeFactorization(num) {
  if (num === 1) return [];
  const upperRange = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= upperRange; i++) {
    if (num % i == 0) {
      let factors = [i].concat(primeFactorization(Math.floor(num / i)));
      return factors;
    }
  }

  return [num];
}

function stringIncludeKey(string, key) {
  if (!key.length) return true;

  let nextKeyChar = key[0];
  let keyIndex = string.indexOf(nextKeyChar);

  if (keyIndex < 0) return false;
  return stringIncludeKey(string.slice(keyIndex + 1), key.slice(1))
}

function factorialsRec(num) {
  if (num === 1) return [1];

  const facs = factorialsRec(num - 1);
  facs.push(facs[facs.length - 1] * (num - 1));
  return facs;
}

Array.prototype.bubbleSort = function(func) {
  let sorted = false;

  if (!func) {
    func = (x, y) => {
      if (x <= y) return -1;
      return 1;
    }
  }

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length; i++) {
      if (i + 1 === this.length) continue;

      if (func(this[i], this[i + 1]) === 1) {
        sorted = false;
        let current = this[i], next = this[i + 1];
        this[i] = next, this[i + 1] = current;
      }
    }
  }

  return this;
}

Array.prototype.mergeSort = function (func) {
  if (this.length <= 1) return this;

  if (!func) func = (left,  right) => {
    return left < right ? -1 : left > right ? 1 : 0;
  }

  const midpoint = Math.floor(this.length / 2);
  const sortedLeft = this.slice(0, midpoint).mergeSort(func);
  const sortedRight = this.slice(midpoint).mergeSort(func);

  return sortedLeft.merge(sortedRight, func);
}

Array.prototype.merge = function (arr, func) {
  let merged = [];

  while (this.length && arr.length) {
    switch(func(this[0], arr[0])) {
      case -1:
        merged.push(this.shift());
        break
      case 0:
        merged.push(this.shift());
        break
      case 1:
        merged.push(arr.shift());
        break
    }
  }

  merged = merged.concat(this);
  merged = merged.concat(arr);

  return merged;
}

Array.prototype.quickSort = function (func) {
  if (this.length < 2) return this;

  if (!func) {
    func = (x, y) => {
      if (x < y) return - 1;
      return 1;
    }
  }

  const pivot = this[0];
  let left = this.slice(1).filter( (el) => func(el, pivot) === -1);
  let right = this.slice(1).filter( (el) => func(el, pivot) != -1);
  left = left.quicksort(func);
  right = right.quicksort(func);

  return left.concat([pivot]).concat(right);
}

function jumbleSort(str, alphabet = null) {
  alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
  str = str.split('');

  let sorted = false;
  while (!sorted) {
    sorted = true
    for (let i = 0; i < str.length; i++) {
      if (i === str.length - 1) break
      let current = str[i], next = str[i + 1];
      if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
        str[i] = next, str[i + 1] = current;
        sorted = false;
      }
    }
  }

  return str.join('');
}

function titleize(title) {
  const littleWords = ['and', 'the', 'over'];

  const words = title.split(' ');
  const titleizedWords = words.map( (word, idx) => {
    if (idx != 0 && littleWords.indexOf(word) >= 0) {
      return word.toLowerCase();
    } else {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    }
  })

  return titleizedWords.join(' ');
}

function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let encoded = ""

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      encoded += ' ';
      continue
    }

    const offset = (alphabet.indexOf(str[i]) + shift) % 26
    encoded += alphabet[offset]
  }

  return encoded
}

String.prototype.symmetricSubstrings = function () {
  const symmetric = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = 2; j <= this.length - i; j++) {
      const subst = this.slice(i, i + j);
      const reversed = subst.split('').reverse().join('')

      if (subst === reversed) symmetric.push(subst);
    }
  }

  return symmetric;
}

String.prototype.realWordsInString = function (dictionary) {
  realWords = [];
  for (let i = 0; i < this.length; i++) {
    let first = i
    for (let j = 0; j < this.length; j++) {
      let last = j
      let word = this.slice(first, last);

      if (dictionary.indexOf(word) > -1) {
        if (realWords.indexOf(word) < 0) realWords.push(word);
      }
    }
  }

  return realWords;
}

// Brian solution
String.prototype._realWordsInString = function(dictionary) {
  realWords = [];

  dictionary.forEach( (el) => {
    if (string.includes(el)) result.push(el);
  });
  return result.sort();
}

function pigLatinify(sentence) {
  const words = sentence.split(' ')
  const translateWord = (word) => {
    vowels = 'aeiou'.split('');
    if (vowels.indexOf(word[0]) != -1) {
      return `${word}ay`;
    } else {
      let phonemeEnd = 0;
      while(!(vowels.indexOf(word[phonemeEnd]) != -1)) {
        phonemeEnd += 1;
      }

      if (word[phonemeEnd - 1] === 'q') phonemeEnd += 1;
      return `${word.slice(phonemeEnd)}${word.slice(0, phonemeEnd)}ay`;
    }
  }

  return words.map( word => translateWord(word) ).join(' ');
}

function doubler(array) {
  return array.map( el => el * 2 );
}

Array.prototype.myReduce = function (callback, acc) {
  const array = this.slice(0);
  if (!acc) acc = array.shift();

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i])
  }

  return acc
}

Array.prototype.myEvery = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i])) return false;
  }

  return true
}

Array.prototype.myFilter = function (func) {
  const selection = [];
  this.forEach( (el) => {
    if (func(el)) selection.push(el);
  });

  return selection;
}

Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }

  return this;
}

Array.prototype.reject = function (func) {
  const selection = [];

  for (let i = 0; i < this.length; i++) {
    if (!func(this[i])) selection.push(this[i]);
  }

  return selection;
}

Array.prototype.mySome = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) return true;
  }

  return false;
}

Function.prototype.myCurry = function (numArgs) {
  let argBalls = [];
  let fcn = this;
  return function _myCurry (el) {
    argBalls.push(el);
    if (argBalls.length < numArgs) {
      return _myCurry;
    } else {
      return fcn(...argBalls);
    }
  };
};

describe("inherits", () => {
  let Animal, Dog, dog;

  beforeEach(() => {
    Animal = function() {
      this.name = "Yogi";
    };

    Animal.prototype.makeNoise = function() { return "Hi!"; };

    Dog = function() {
      this.age = 7;
    };

    Dog.inherits(Animal);

    Dog.prototype.bark = function() { return "Woof!"; };

    dog = new Dog();
  });

  it("should properly set up the prototype chain between a child and parent", () => {
    expect(dog.bark()).toBe("Woof!");
    expect(dog.makeNoise()).toBe("Hi!");
  });

  it("should not call the parent's constructor function", () => {
    expect(dog.name).toBeUndefined();
  });

  it("should maintain separation of parent and child prototypes", () => {
    Dog.prototype.someProperty = 42;
    const animal = new Animal();
    expect(animal.someProperty).toBeUndefined();
    expect(animal.makeNoise()).toBe("Hi!");
  });

  it("should properly work for longer inheritance chains", () => {
    const Poodle = function () { this.name = "Bill"; };

    Poodle.inherits(Dog);

    Poodle.prototype.shave = function() { return "Brrr."; };

    const poodle = new Poodle();
    expect(poodle.name).toBe("Bill");
    expect(poodle.shave()).toBe("Brrr.");
    expect(poodle.makeNoise()).toBe("Hi!");
    expect(poodle.bark()).toBe("Woof!");
  });
});

Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myCall = function (ctx, ...args) {
  return this.bind(ctx, ...args)();
};

