module.exports = function check(str, bracketsConfig) {

  let openBracket = bracketsConfig.map((item)=> item[0]);
  let closeBracket = bracketsConfig.map((item)=> item[1]);
  let stackBrackets = [];
  let isCorrect = true;

  for (let index=0; index<=str.length; index++ ) {
    if (openBracket.includes(str[index])) { 
      if (closeBracket.includes(str[index])) {  
        if (closeBracket.indexOf(str[index]) === stackBrackets[stackBrackets.length-1]) {
          stackBrackets.pop() 
        } else {stackBrackets.push(openBracket.indexOf(str[index]))};
      } else {stackBrackets.push(openBracket.indexOf(str[index]))};
      continue;
      }
    if (closeBracket.includes(str[index])) {
      if (closeBracket.indexOf(str[index]) != stackBrackets.pop()) {isCorrect=false ; break;}
    }
  }
  return (isCorrect && stackBrackets.length == 0); 
}