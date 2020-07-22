//const AFINN = require('./AFINN.json');

let test = "I am happy!!";

//makes all the text lowercase and splits words with spaces
function tokenize(text) {
  return text
    .toLowerCase()
    .split(" ");
}
console.log(tokenize(test));

function deleteUselessChars(word){
return word.replace(/[^\w]/g,"");
}
console.log(deleteUselessChars("word!!$#%^#$"));

let result = AFINN.filter(function(rate)){
  console.log(rate);
}

// function rateWord(word) {
//   return (word in "AFINN.json") ? AFINN [word] : 0;
// }
// console.log(rateWord("great"));

// function sum(x, y) {
//   return x + y;
// }

// function analyze(text) {
//   return tokenize(text)
//         .map(deleteUselessChars)
//         .map(rateWord)
//         .reduce(sum);
// }
