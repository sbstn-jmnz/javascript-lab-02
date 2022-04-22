/* 
  Functions are declared with the 'function' keyword.
  Followed by the parameters and a block of code
*/
function sum(a,b) {
  var result = a + b
  return result
}

// Normal call
console.log(sum(3,4))
// More parameters are ignored
console.log(sum(3,4,4,5,3))
// Missing parameters are undefined
console.log(sum(3))
