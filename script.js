console.log ("Escape room script loaded!")
const firstClue= document.querySelector(".clue");
const secretMessage= document.querySelector("#secret-message");
firstClue.addEventListener("click", function( ) {
   secretMessage.style.display="block";
});
