let test = "I am miserable and depressed!!";
let sum = 0;
let submit = document.querySelector('#submit');
let clear = document.querySelector('#clear');


//add event listener to begin sentiment analysis
submit.addEventListener('click', start);

//event listener that accesses what is typed in box
clear.addEventListener('click', function(){
  document.getElementById('text').value = "";
});


function start () {
let input = document.getElementById('text').value;

//makes all the text lowercase and splits words with spaces
function tokenize(text) {
  return input
    .toLowerCase()
    .split(" ");
}

//removes any characters in a word that we don't need in order to make comparing easier
function deleteUselessChars(word){
  return word.replace(/[^\w]/g,"");
}
//pulls value from AFINN and updates sum of feeling
function rateWord(word) {
   for (const wvalue in AFINN) {

   if (word == wvalue) {
      sum = sum + parseInt(AFINN[wvalue]);
   }
  }
    return sum;
}
//analyzes a string of text
function analyze(text) {
    return tokenize(text)
        .map(deleteUselessChars)
        .map(rateWord);

}
//provides alert
if (sum < 0){
   alert("Your score is " + sum + "\n Wow. what a bummer you are.");
}
if(sum > 0){
  alert("Your score is " + sum + "\n It seems you are quite positive. Chill.");
}
if (sum == 0){
  alert("Your score is " + sum + "\nYou should try and add some more emotion to your text. Robots can do better then this");
}

}
