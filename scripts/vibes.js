let test = "I am miserable and depressed!!";
let sum = 0;
let submit = document.querySelector('#submit');
let clear = document.querySelector('#clear');


//add event listener to begin sentiment analysis
submit.addEventListener('click', start);

//event listener that accesses what is typed in box
clear.addEventListener('click', function () {
  document.getElementById('text').value = "";
});


function start() {
  let input = document.getElementById('text').value;
  console.log(input)


  //It doesn't look like you have executed the functions to get the sum associated with the words
  //entered into the text area
  //I think you need something like:
  //sum = rateWord(input);



  //makes all the text lowercase and splits words with spaces
  function tokenize(text) {  //Declare this function outside of the start function and call it within the start function
    return input   //Might be better to pass input in when you call this function and use your "text" param.  Right now "text" is not being used
      .toLowerCase()
      .split(" ");
  }

  //removes any characters in a word that we don't need in order to make comparing easier
  function deleteUselessChars(word) {  //Declare this function outside of the start function and call it within the start function
    return word.replace(/[^\w]/g, "");
  }
  //pulls value from AFINN and updates sum of feeling
  function rateWord(word) {   //Declare this function outside of the start function and call it within the start function
    for (const wvalue in AFINN) {
     
      if (word == wvalue) {

         console.log(AFINN);
        sum = sum + parseInt(AFINN[wvalue]);
      }
    }
    return sum;
  }
  //analyzes a string of text
  function analyze(text) {  //Declare this function outside of the start function and call it within the start function
    return tokenize(text)
      .map(deleteUselessChars)
      .map(rateWord);

  }




  //provides alert
  if (sum < 0) {
    alert("Your score is " + sum + "\n Wow. what a bummer you are.");
  }
  if (sum > 0) {
    alert("Your score is " + sum + "\n It seems you are quite positive. Chill.");
  }
  if (sum == 0) {
    alert("Your score is " + sum + "\nYou should try and add some more emotion to your text. Robots can do better then this");
  }

}
