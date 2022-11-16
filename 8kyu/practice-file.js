function remove(string){
    
    if(string[string.length-1] === '!'){
      return  string.slice(0,-1)
    }else{
        return string
    }
}

string.length

function squareDigits(num){
  num = num.split("")
  return num.map((element)=> element**2).join('')
}