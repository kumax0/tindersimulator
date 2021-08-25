// GAME FUNCTIONALITY

// Customizable dateprofile skeletton
class Dateprofile {

    constructor(name, age, bio, greeting, answers, reactions) {
        this.name = name;
        this.age = age;
        this.bio = bio;
        this.greeting = greeting;
        this.answers = answers;
        this.reactions = reactions;
    }

    getBio() {
        return this.bio;
    }

    getGreeting() {
        return this.greeting;
    }
}

// Date profiles
const card1 = new Dateprofile('Peter', 23, 'bin ein alter Maier', 'Hallo, darf ich dir einen Kuchen kaufen', [`Peter answer 1`, `Peter answer 2`], [`Peter reaction 1`, `Peter reaction 2`]);
const card2 = new Dateprofile('Alice', 99, 'LF wine and dine', 'Hallöchen mein lieber', [`Alice answer 1`,`Alice answer 2`], [`Alice reaction 1`, `Alice reaction 2`]);
const card3 = new Dateprofile('Blümchen', 44, 'Ich bin eine Blume', 'Hi, bist du eine Biene?', [`Blümchen answer 1`,`Blümchen answer 2`], [`Blümchen reaction 1`, `Blümchen reaction 2`]);
const cardArr = [card1, card2, card3];
// Current Card
let currentCardIndex = 0;
let currentCard = cardArr[0];
// Display currentCard function --> display current Card in matching window
displayCard()
function displayCard(){
    document.querySelector("body > section.cards > p").innerHTML = `${currentCard.name} ${currentCard.age} <br> Bio: ${currentCard.bio} </br>`;
}

// MATCH SYSTEM: Card swipe mechanics --> iterate through array on notLike button
function notLike() {
    // Create Iterator that increments on button click or resets to first index of cardArr
    if (currentCardIndex === cardArr.length - 1){
        currentCardIndex = 0;
    } else {
    currentCardIndex++;
    } 
    console.log(`Current card index is: ${currentCardIndex}`);
    currentCard = cardArr[currentCardIndex] ;
    // Reset to first card when finishing cycling through the array
    displayCard();
    }

// Display greeting when being matched
function messages() {
    document.querySelector('.messages').innerText = currentCard.greeting;
 }

// MATCH SYSTEM: Open chat window on like button
function chatWindow() {
    // Opens chatWindow HTML
    console.log(`You picked card ${currentCardIndex}. The name is ${currentCard.name}. The age is ${currentCard.age}. The bio is: "${currentCard.bio}" and the greeting is: "${currentCard.greeting}"`);
    // When like is clicked, turn chatwindow display on.
    document.getElementById("chat-window").style.display = "block";
    // When chatwindow is on, turn off matching system
    document.querySelector("body > section.cards > p").style.display = "none";
    // When chatWindow is on, turn off like and not like buttons
    document.querySelector(".btn-like").style.visibility = "hidden";
    document.querySelector(".btn-not-like").style.visibility = "hidden";
    // Display current cards information in HTML
    document.querySelector('#chat-window > div > p.name').innerHTML = currentCard.name;
    document.querySelector('#chat-window > div > p.age').innerHTML = currentCard.age;
    document.querySelector('#chat-window > div > p.bio').innerHTML = `Bio: ${currentCard.bio}`;
    messages();

}
// Answer buttons
function answer() {
    // On button click create new answer paragraph into HTML
    document.querySelector('.messages')
    //cardArr[currentCardIndex].answers[0])
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

    const answerBtn1 = document.getElementById('answer-1');
    answerBtn1.addEventListener('click', answer);
  });