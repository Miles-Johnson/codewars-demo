// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//My Solution

function countSheep(n){
   let str = ""
    for( let i = 1; i <= n; i++){
      str += `${i} sheep...`}
    return str;
  }


  //variable to hold the string is declared and assigned
  //for loop is run however many times the input says to
   //every time the loop runs, it concatinates the following string into the variable 
   //variable is returned