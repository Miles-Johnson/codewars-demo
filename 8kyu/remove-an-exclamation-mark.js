// Description:

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"


//My Solution

function remove(string){
    
    if(string[string.length-1] === '!'){
      return  string.slice(0,-1)
    }else{
        return string
    }
}

// Other Solutions

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }


  function remove(s){
    return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
  }
