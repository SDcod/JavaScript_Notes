//create a corresponding map wrt closing bracket.
//maintain a stack.
//loop throught the string and for each opening bracket push the current char to stack.
//if a closing bracket is identified then check the top of stack has corresponding opening bracket matches in the map, if yes pop opening bracket.
//at the end if stack is empty return true else false

function sol(str) {
  let res = [];
  let paraMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let char of str) {
    if (Object.values(paraMap).includes(char)) {
      res.push(char);
    } else if (paraMap[char] !== undefined) {
      if (res.pop() !== paraMap[char]) return false;
    }
  }

  return res.length === 0;
}

console.log(sol("{[()]}{()}")); // true
console.log(sol("{[()]}{(}")); // false
console.log(sol("{[(])}")); // false
