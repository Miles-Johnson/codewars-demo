// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
// Fundamentals

//my solution
function descendingOrder(n){
    let newArr = String(n).split('').sort((a,b)=> b-a).join('')
    return Number(newArr)
  }

  //other solutions

  function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }