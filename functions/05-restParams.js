// Instead of using 'arguments', is better to use "rest parameters"
// Rest parameters transform all params into a real array
// 'arguments' is not a real array
function superSum(...nums){
  var result = 0
  for(i in nums){
    if(typeof(nums[i]) == 'number' && !isNaN(nums[i])){
      result += nums[i]
    } 
  }
  return result
}

console.log(superSum(true, 12, undefined, 15, NaN)) // 27