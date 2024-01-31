
console.log('Script Start');

const simplePromise = Promise.resolve('something...')

simplePromise.then((value) => console.log(value))

console.log('Script End');
