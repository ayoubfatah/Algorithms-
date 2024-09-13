//Remove Duplicates

function removeDuplicates(arr) {
  let cleanArr = [1]
  console.log( arr.length)
  for (let i = 0; i < arr.length; i++) {
    if(!cleanArr.includes(arr[i])){
        cleanArr.push(arr[i])  
    }

  }
  console.log(cleanArr)
  return cleanArr
}

removeDuplicates([1,3,1,2,2,2,3,4,5,5])



//using SET 
function removeDuplicatesUsingSett(arr) {
    
    const set = new Set(arr)
    const newArr = [...set]
    console.log(newArr , "using set")
    // we can also transform the set directly to an array : Array.from(new Set(arr))
  }
  
  removeDuplicatesUsingSett([1,3,1,2,2,2,3,4,5,5])
   

  
  