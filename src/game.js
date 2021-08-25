// GAME FUNCTIONALITY

// Customizable dateprofile skeletton
class Dateprofile {

    constructor(name, age, bio, greeting) {
        this.name = name;
        this.age = age;
        this.bio = bio;
        this.greeting = greeting;
    }

    getBio() {
        return this.bio
    }

    getGreeting() {
        return this.greeting;
    }
}

// Date profiles
const card1 = new Dateprofile('Peter', 23, 'bin ein alter Maier', 'Hallo, darf ich dir einen Kuchen kaufen');
const card2 = new Dateprofile('Alice', 99, 'LF wine and dine', 'Hallöchen mein lieber');
const card3 = new Dateprofile('Blümchen', 44, 'Ich bin eine Blume', 'Hi, bist du eine Biene?');
const cardArr = [card1, card2, card3];
// Current Card
let currentCardIndex = 0
let currentCard = cardArr[0]
// Display currentCard in HTML
displayCard()
function displayCard(currentCardIndex){
    document.querySelector("body > section.cards > p").innerHTML = `${currentCard.name} ${currentCard.age} <br> Bio: ${currentCard.bio} </br>`
}

// MATCH SYSTEM: Card swipe mechanics --> iterate through array on notLike button
function notLike() {
    // Create Iterator that increments on button click or resets to first index of cardArr
    if (currentCardIndex === cardArr.length - 1){
        currentCardIndex = 0
    } else {
    currentCardIndex++
    } 
    console.log(`Current card index is: ${currentCardIndex}`)
    currentCard = cardArr[currentCardIndex] 
    // Reset to first card when finishing cycling through the array
    displayCard()
    }
//     console.log(currentCardIndex)
//     return currentCard
   // MATCH SYSTEM: Open chat window on like button
function chatWindow() {
    // Opens chatWindow HTML
    console.log(`You picked card ${currentCardIndex}. The name is ${currentCard.name}. The age is ${currentCard.age}. The bio is: "${currentCard.bio}" and the greeting is: "${currentCard.greeting}"`)
    // When like is clicked, turn chatwindow display on.
    document.getElementById("chat-window").style.display = "block";
    // When chatwindow is on, turn off matching system
    document.querySelector("body > section.cards > p").style.display = "none"
    // When chatWindow is on, turn off like and not like buttons
    document.querySelector(".btn-like").style.visibility = "hidden"
    document.querySelector(".btn-not-like").style.visibility = "hidden"
    // Load chatwindow html elements
    
    // Display current cards information in HTML
    document.querySelector('#chat-window > div > p.name').innerHTML = currentCard.name
    document.querySelector('#chat-window > div > p.age').innerHTML = currentCard.age

    messages();

}

function messages() {
    document.querySelector('.messages').innerText = currentCard.greeting
 }
// Reset button function
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
    likeBtn.addEventListener('click', chatWindow);

    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', reset);
  });