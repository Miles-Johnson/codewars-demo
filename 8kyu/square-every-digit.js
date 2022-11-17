
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer
// Mathematics
// Fundamentals


//My Solution

function squareDigits(num){
    num = String(num).split("")
    return Number(num.map((element)=> element**2).join(''))
  }

  //Other Solutions

  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }


  
  function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }