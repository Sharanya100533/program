class IterableWithReset {
    constructor(arr) { this.arr = arr; this.index = 0; }
    [Symbol.iterator]() { 
      return { arr: this.arr, index: this.index, next() { 
        return this.index < this.arr.length ? { 
          value: this.arr[this.index++], done: false } : { 
            done: true }; 
          }
         };
    }
    reset() { this.index = 0; }
  }
  
  const iterable = new IterableWithReset([1, 2, 3]);
  for (const value of iterable) console.log(value);
  iterable.reset();
  for (const value of iterable) console.log(value);
  