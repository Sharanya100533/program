const reverseIterable = arr => ({
    [Symbol.iterator]() {
      let index = arr.length - 1;
      return {
        next() {
          return index >= 0 ? { value: arr[index--], done: false } : { done: true };
        }
      };
    }
  });
  
  const arr = [1, 2, 3, 4];
  for (const value of reverseIterable(arr)) {
    console.log(value); 
  }
  
