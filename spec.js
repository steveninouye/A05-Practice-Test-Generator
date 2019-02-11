describe('my_bsearch', () => {
  it('finds the first element in the array', () => {
    expect([1, 2, 3].myBsearch(1)).toEqual(0);
  });

  it('finds an element for an array with an even number of elements', () => {
    expect([2, 3, 4, 5].myBsearch(3)).toEqual(1);
  });

  it('finds an element for an array with an odd number of elements', () => {
    expect([2, 4, 6, 8, 10].myBsearch(6)).toEqual(2);
  });

  it('finds an element in the second half of the array (even)', () => {
    expect([1, 3, 4, 5, 9].myBsearch(5)).toEqual(3);
  });

  it('finds an element in the second half of the array (odd)', () => {
    expect([1, 2, 3, 4, 5, 6].myBsearch(6)).toEqual(5);
  });

  it('Returns nil if the element is not in the array (smaller)', () => {
    expect([1, 2, 3, 4, 5, 6].myBsearch(0)).toEqual(null);
  });

  it('Returns null if the element is not in the array (bigger)', () => {
    expect([1, 2, 3, 4, 5, 7].myBsearch(6)).toEqual(null);
  });
});

describe('#median', () => {
  beforeEach(() => {
    evenArray = [3, 2, 6, 7];
    oddArray = [3, 2, 6, 7, 1];
  });

  it('returns null for the empty array', () => {
    expect([].median()).toBe(null);
  });

  it('returns the element for an array of length 1', () => {
    expect([1].median()).toEqual(1);
  });

  it('returns the median of an odd-length array', () => {
    expect(oddArray.median()).toEqual(3);
  });

  it('returns the median of an even-length array', () => {
    expect(evenArray.median()).toEqual(4.5);
  });
});

describe('myJoin', () => {
  beforeEach(() => {
    a = ['a', 'b', 'c', 'd'];
  });

  it('joins an array if no argument is passed', () => {
    expect(a.myJoin()).toEqual('abcd');
  });

  it('joins an array if an argument is passed', () => {
    expect(a.myJoin('$')).toEqual('a$b$c$d');
  });
});

describe('#primes', () => {
  it('returns first five primes in order', () => {
    expect(primes(5)).toEqual([2, 3, 5, 7, 11]);
  });

  it('returns an empty array when asked for zero primes', () => {
    expect(primes(0)).toEqual([]);
  });
});

describe('flatten', () => {
  it('Flattens arrays correctly', () => {
    const array = [1, 2, 3, [4, [5, 6]], [[[7]], 8]];
    expect(array.flatten()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe('#transpose', () => {
  //before each necessary
  const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const small_arr = [[1, 2], [3, 4]];
  const rect_arr = [[1, 2, 3], [4, 5, 6]];
  const tall_rect_arr = [[1, 2], [3, 4], [5, 6]];

  it('should transpose a matrix', () => {
    expect(transpose(arr)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });

  it('should transpose a matrix of a different size', () => {
    expect(transpose(small_arr)).toEqual([[1, 3], [2, 4]]);
  });

  it('should transpose a rectangular matrix', () => {
    expect(transpose(rect_arr)).toEqual([[1, 4], [2, 5], [3, 6]]);
  });

  it('should transpose a different rectangular matrix', () => {
    expect(transpose(tall_rect_arr)).toEqual([[1, 3, 5], [2, 4, 6]]);
  });

  it('should not modify the original', () => {
    transpose(small_arr);
    expect(small_arr).toEqual([[1, 2], [3, 4]]);
  });
});

describe('#twoSum', () => {
  it('returns positions of pairs of numbers that add to zero', () => {
    expect([5, 1, -7, -5].twoSum()).toEqual([[0, 3]]);
  });

  it('finds multiple pairs', () => {
    expect([5, -1, -5, 1].twoSum()).toEqual([[0, 2], [1, 3]]);
  });

  it('finds pairs with same element', () => {
    expect([5, -5, -5].twoSum()).toEqual([[0, 1], [0, 2]]);
  });

  it('returns [] when no pair is found', () => {
    expect([5, 5, 3, 1].twoSum()).toEqual([]);
  });

  it("won't find spurious zero pairs", () => {
    expect([0, 1, 2, 3].twoSum()).toEqual([]);
  });

  it('will find real zero pairs', () => {
    expect([0, 1, 2, 0].twoSum()).toEqual([[0, 3]]);
  });
});

describe('#dups', () => {
  it('solves a simple example', () => {
    expect([1, 3, 0, 1].dups()).toEqual({ 1: [0, 3] });
  });

  it('finds two dups', () => {
    expect([1, 3, 0, 3, 1].dups()).toEqual({ 1: [0, 4], 3: [1, 3] });
  });

  it('finds multi-dups', () => {
    expect([1, 3, 4, 3, 0, 3].dups()).toEqual({ 3: [1, 3, 5] });
  });

  it('returns {} when no dups found', () => {
    expect([1, 3, 4, 5].dups()).toEqual({});
  });
});

describe('String.prototype.mySlice', () => {
  it('slices the string from the start index to the end index', () => {
    expect('abcd'.mySlice(0, 2)).toEqual('ab');
  });

  it('slices to the end of the string when no second argument is passed', () => {
    expect('foobar'.mySlice(3)).toEqual('bar');
  });

  it('returns an empty string when the first argument is higher', () => {
    expect('empty!'.mySlice(1, 0)).toEqual('');
  });

  it("slices to the end of the string when the end index is greater than the string's length", () => {
    expect('super long string'.mySlice(0, 200)).toEqual('super long string');
  });

  it("doesn't call `substr`, `slice`, or `substring`", () => {
    const str = new String("don't you do it!");
    spyOn(str, 'substr');
    spyOn(str, 'slice');
    spyOn(str, 'substring');

    str.mySlice(0);

    expect(str.substr).not.toHaveBeenCalled();
    expect(str.slice).not.toHaveBeenCalled();
    expect(str.substring).not.toHaveBeenCalled();
  });
});

describe('rotate', () => {
  beforeEach(() => {
    a = ['a', 'b', 'c', 'd'];
  });

  it('Rotates the elements 1 position if no argument is passed in', () => {
    expect(a.rotate()).toEqual(['b', 'c', 'd', 'a']);
  });

  it('Rotates the elements correctly if an argument is passed in', () => {
    expect(a.rotate(2)).toEqual(['c', 'd', 'a', 'b']);
  });

  it('Rotates the elements correctly if a negative argument is passed in', () => {
    expect(a.rotate(-3)).toEqual(['b', 'c', 'd', 'a']);
  });

  it('Rotates the elements correctly for a large argument', () => {
    expect(a.rotate(15)).toEqual(['d', 'a', 'b', 'c']);
  });
});

describe('myFind', () => {
  let arr, spy;
  beforeEach(() => {
    arr = [1, 2, 3];
    spy = {
      callback: (el) => false
    };
  });

  const equalsThree = (el) => el === 3;
  const equalsFour = (el) => el === 4;

  it('calls the callback passed to it', () => {
    spyOn(spy, 'callback');

    myFind(arr, spy.callback);

    expect(spy.callback).toHaveBeenCalled();
  });
});

describe('#factors', () => {
  it('returns the factors of 10 in order', () => {
    expect(factors(10)).toEqual([1, 2, 5, 10]);
  });

  it('returns just two factors for primes', () => {
    expect(factors(13)).toEqual([1, 13]);
  });
});

describe('myReverse', () => {
  beforeEach(() => {
    a = ['a', 'b', 'c', 'd'];
  });

  it('Reverses an array', () => {
    expect(a.myReverse()).toEqual(a.reverse());
  });
});
