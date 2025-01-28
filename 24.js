function infiniteIterator(steps) {
    let current = 1;
    return { next() { return steps-- > 0 ? { value: current++, done: false } : { done: true }; } };
  }
  
  const iter = infiniteIterator(5);
  for (let result = iter.next(); !result.done; result = iter.next()) {
    console.log(result.value); 
  }
  