const favMovie ="Avatar";
let guess = prompt("guess my favorite movie");
while((guess!= favMovie) && (guess!= "quit")){
    guess = prompt("wrong answer, try again");
}
if(guess == favMovie){
    console.log("Congrats");
}
else{
    console.log("You quit");
}