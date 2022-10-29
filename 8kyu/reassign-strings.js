function correct(s){
    //reassign the string and run split method
    s = s.split('')
    //run the for loop for however long the string was, and use an if else statment to compare and replace the desired index locations
    for(let i = 0; i < s.length; i++){
        if(s[i] === "5"){
            s[i] = "S"
        }else if(s[i] === "0"){
            s[i] = "O"
        }else if(s[i] === "1"){
            s[i] = "I"
        }
    }
    //return all the seperate elements together with join method
    return s.join('')
}