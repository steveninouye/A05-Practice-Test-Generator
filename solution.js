Array.prototype.myBsearch = function(target) {
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

Array.prototype.myJoin = function (separator = '') {
  let newString = ''

  this.forEach( (el, idx) => {
    newString += `${el}`;
    if (idx < this.length - 1) newString += separator;
  })

  return newString;
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

Array.prototype.twoSum = function () {
  const pairs = [];
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) pairs.push([i, j]);
    }
  }

  return pairs;
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

function myFind (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}

function factors(num) {
  let factors = Array.from(Array(num)).map( (el, idx) => idx + 1)
  return factors.filter( el => num % el === 0);
}

Array.prototype.myReverse = function () {
  const dup = this.slice(0)
  for (let i = 1; i < this.length + 1; i++) {
    this[i - 1] = dup[this.length - i];
  }

  return this;
}

