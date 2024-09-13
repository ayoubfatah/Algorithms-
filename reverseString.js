//Title Case
console.log("-----------title Case-------------")

function titleCase(str){
  const resut =  str.split(" ").map(l => l.replace(l[0], l[0].toUpperCase())).join(" ")
  console.log(resut)

}
titleCase("In English, a compounnd is a thing that has, is made up of, two or more parts.")


// Reverse String
console.log("--------- Reverse String----------")

function reverseString2(str){
    const result = str.split('').reverse().join("")
    console.log(result)
}
reverseString2("word")

//without using reverse()
function reverseString1(str){
    let reversed = ""
    for(let i =str.length -1 ; i >= 0 ; i--) {
        reversed += str[i]
    }
     return reversed
    }
const word = reverseString1("alucard")
console.log(word)
