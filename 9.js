function mergeobj(...arrays) {
    return {...arrays[0], ...arrays[1], ...arrays[2]};
  }
const userDetails = {name: 'CVR', age: 25}
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'}
const userPreferences = {theme: 'Engineering Edu', language: 'telugu'}

const mergeData=mergeobj(userDetails,userAddress,userPreferences);
console.log(mergeData);