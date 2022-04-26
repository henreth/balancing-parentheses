function balancingParentheses(string) {
  let arr = string.split('')
  let count = 0;
  arr.forEach(i=>{
    if (i==='('){
      count= count - 1
    } else if (i===')'){
      count+=1
    }
  })
  return count
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("Result: ", balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log("Result: ", balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log("Result: ", balancingParentheses(')'));

  console.log("");

  console.log("Expecting: 0");
  console.log("Result: ", balancingParentheses(')('));

  console.log("");

  console.log("Expecting: 1");
  console.log("Result: ", balancingParentheses(')()'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
