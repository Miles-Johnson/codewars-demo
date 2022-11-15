
function powerOfTwo(n){
    let newArr = []
    for(let i = 0;  i <= n; i++){
        newArr.push(2**i)
    }
    return newArr
}

powerOfTwo(4)

//takes in a non-negative integer
//returns a new array of all the powers of two from 0 to n

function smash(words){
   return words.join(' ')
}

smash(['Hello', 'World'])