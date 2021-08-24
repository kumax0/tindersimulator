// GAME FUNCTIONALITY

// Customizable dateprofile skeletton
class Dateprofile {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    bio() {
        let bio = "put description here";
        return bio;
    }

    greeting() {
        let greeting = "put greeting here";
        return greeting;
    }
}

// Date profiles
const card1 = new Dateprofile('Peter', 23);
const card2 = new Dateprofile('Alice', 99);
const card3 = new Dateprofile('Blümchen', 44);
const cardArr = [card1, card2, card3];
let currentCardIndex = 0
//  //Test logs of date profile number 1
// console.log(card1.bio())
// console.log(card1.name)
// console.log(card1.age)
// date1.bio = 'hi this is my new bio'
// console.log(card1.bio)
// console.log(card1.greeting())

// MATCH SYSTEM: Card swipe mechanics --> iterate through array on notLike button
function notLike() {
    // Creater Iterator that increments on button click
    let currentCard = cardArr[currentCardIndex++]
    // Console.log(currentCard) --> logs current card    
    // Display currentCard in HTML object
    document.querySelector("body > section.cards > p").innerHTML = `${currentCard.name} ${currentCard.age}`
    // Reset to first card when finishing cycling through the array
    if (currentCardIndex >= cardArr.length) {
        currentCardIndex = 0
    }
}
   // MATCH SYSTEM: Open chat window on like button
function like() {
    // When like is clicked, turn chatwindow display on.
    document.getElementById("chat-window").style.display = "block";
    // when chatwindow is on, turn off matching system
    document.querySelector("body > section.cards > p").style.display = "none"
}
// Reset
function reset() {
    location.reload()
}



// // Not like button

// Eventlistener Buttons 
// Not Like button
window.addEventListener('load', () => {
    const notLikeBtn = document.getElementById('not-like');
    notLikeBtn.addEventListener('click', notLike);

    const likeBtn = document.getElementById('like');
    likeBtn.addEventListener('click', like);

    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', reset);
  });