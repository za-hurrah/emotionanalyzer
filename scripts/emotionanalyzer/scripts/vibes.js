let submit = document.querySelector('#submit');
let clear = document.querySelector('#clear');

//event listener that clears text box
clear.addEventListener('click', function(){
  document.getElementById('text').value = "";
});

//add event listener to begin sentiment analysis
submit.addEventListener('click', start);

function start () {
let sum = 0;
let input = document.getElementById('text').value;

//makes all the text lowercase and splits words with spaces
function tokenize(text) {
  return input
    .toLowerCase()
    .split(" ");
}
console.log(tokenize(input));

//removes any characters in a word that we don't need in order to make comparing easier
function deleteUselessChars(word){
  return word.replace(/[^\w]/g, "");
}
console.log(deleteUselessChars(input));

//pulls value from AFINN and updates sentiment sum
function rateWord(word) {
   for (const wvalue in AFINN) {
    //console.log(`${wvalue}: ${AFINN[wvalue]}`);
   if (word == wvalue) {
      sum = sum + parseInt(AFINN[wvalue]);
   }
  }
    return sum;
}
console.log(rateWord(input));

//analyzes a string of text
function analyze(text) {
    return tokenize(text)
        .map(deleteUselessChars)
        .map(rateWord);
}
console.log(analyze(input));

//provides alert
if (sum < 0){
   alert("Your score is " + sum + "\n Wow. what a bummer you are.");
}
if (sum > 0){
  alert("Your score is " + sum + "\n It seems you are quite positive. Chill.");
}
if (sum == 0) {
  alert("Your score is " + sum + "\n You should try and add some more emotion to your text. Robots can do better then this");
}

}
