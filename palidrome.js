//Palindrome
//a palindrome is a word phrase number or other sequence of a chracters which reads the same backward or forward , an example of a palindrome is "madam"



//Palindrome words only
function isPalindrome(str){
    const reversed = str.split('').reverse().join("")
 const strIsPalindrome  =  reversed === str ? true : false 
 console.log(str , strIsPalindrome)

}
isPalindrome("madam")
isPalindrome("phrase")

//Palindrome  without using reverse()

function isPalidrome2(str){
    const formattedStr = removeNoneAlphaNumeric(str.toLowerCase())
    const reversedStr = reverseString(formattedStr) 

    console.log(reversedStr === formattedStr , str)
    return formattedStr
} 

function removeNoneAlphaNumeric(str){
    let formattedStr = ""
    for (let i = 0 ; i < str.length ; i++){
        const char  = str[i] ;
        if(isAlphaNumeric(char)){
            formattedStr +=char
        }
    } 
   
    return  formattedStr 
}

function isAlphaNumeric(character){
    // here code is 0 cause its a single character
    const code = character.charCodeAt(0) ;
    const isAlphaNumeric =  (code >=48 && code <=  57 ) ||  (code >= 97 && code <=122) ? true : false 
    return( 
        (code >=48 && code <=  57 )  ||//Numbers 0 - 9
         (code >= 97 && code <=122) //Numbers a - z lowercase
    )
}

function reverseString(str){
    let reversed = ""
    for(let i =str.length -1 ; i >= 0 ; i--) {
        reversed += str[i]
    }
     return reversed
    }
isPalidrome2("racecar")
isPalidrome2("madam")


