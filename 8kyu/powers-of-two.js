







//My Solution


function powersOfTwo(n){
   let result = []
   for(let i = 0; i<= n; i++){
    result.push(Math.pow(2,i))
   }
   return result
  }

console.log(result)
//create a variable to hold the array
//run a loop for however many times the input parameter is for
//on each iteration of the loop, place the result of 2^i into the array
//return the result