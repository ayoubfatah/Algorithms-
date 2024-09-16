
function generateLockCombinations(n, m) {
    // n: number of dials (digits)
    // m: number of possible values on each dial ( 0-9 for a 10-digit system)
    
    const combinations = [];
    
    function generateCombination(currentCombination) {
      if (currentCombination.length === n) {
        combinations.push(currentCombination.join(''));
        return;
      }
      for (let i = 0; i < m; i++) {
         generateCombination([...currentCombination, i]);
      }
    }
  
    generateCombination([]);
  
    return combinations;
  }
  const lockCombinations = generateLockCombinations(4, 5); 
  console.log(lockCombinations);
  console.log(`Total combinations: ${lockCombinations.length}`);
  