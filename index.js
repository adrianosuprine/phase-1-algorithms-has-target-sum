function hasTargetSum(array, target) {
  // Write your algorithm here
  const newArray = [];
  for (num of array){
    result=target-num;
    if (newArray.includes(result)){
      return true ;}
    newArray.push(num);
  }
  return false ;
}
// console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));

/* 
  Write the Big O time complexity of your function here
  O(n) because it iterates through the loop (n)being the length of the array
  
*/

/* 
  Add your pseudocode here
  start 
    create an empty array stores it in a variable
    iterate through the array passed in 
    for each number in the array checks if (target-sum)is in the array
    if yes it returns true 
    if no it adds the number to the new array and returns false if the loop completes
  stop

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
