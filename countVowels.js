
// Count vowels 
  
//1
const vowels = ["a","e",'u',"i","o"]
function countVowels(str) {
    let count = 0
    str.split("").forEach(character => {
        if(vowels.includes(character)) count ++
    });
    console.log(count)
}
countVowels("character")
//2
function countVowelsForOfLoop(str){
    let count = 0
    for (const character of str) {
        if(vowels.includes(character)) count ++
    }
    console.log(count)
}
countVowelsForOfLoop("character")
