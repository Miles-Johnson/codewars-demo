
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.



// Psuedo Code
    //create a variable to hold the seperated elements of the string

    //run the for loop for however long the string was, and use an if else statment to compare and replace the desired index locations of the string 

    //return all the seperate elements together with join method

























function correct(s){
    s = s.split('')
    for(let i = 0; i < s.length; i++){
        if(s[i] === "5"){
            s[i] = "S"
        }else if(s[i] === "0"){
            s[i] = "O"
        }else if(s[i] === "1"){
            s[i] = "I"
        }
    }
    return s.join('')
}