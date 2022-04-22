function superSum(){
  var result = 0
  var numberOfParams = arguments.length
  for(var i = 0; i < numberOfParams; i++){
    // This is how to make sure a thing is a normal "number" in JS
    if(typeof(arguments[i]) == 'number' && !isNaN(arguments[i])){
      result += arguments[i]
    }
  }
  return result
}

console.log(superSum(1,2,3,4,5,6,7,8,9))

// Challenge: Modify superSum to make it work in this scenario

console.log(superSum(true, 12, undefined, 15, NaN)) // 27