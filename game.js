// GAME FUNCTIONALITY
/*
LEGACY DATEPROFILE CLASSES AND VARIABLES
Customizable dateprofile skeletton
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
Date profiles
const card1 = new Dateprofile('Peter', 23, 'bin ein alter Maier', 'Hallo, darf ich dir einen Kuchen kaufen', [`Peter answer 1`, `Peter answer 2`], [`Peter reaction 1`, `Peter reaction 2`]);
const card2 = new Dateprofile('Alice', 99, 'LF wine and dine', 'Hallöchen mein lieber', [`Alice answer 1`,`Alice answer 2`], [`Alice reaction 1`, `Alice reaction 2`]);
const card3 = new Dateprofile('Blümchen', 44, 'Ich bin eine Blume', 'Hi, bist du eine Biene?', [`Blümchen answer 1`,`Blümchen answer 2`], [`Blümchen reaction 1`, `Blümchen reaction 2`]);
LEGACY CONTENT ENDS
*/
// GLOBAL VARIABLES
// Stage && DateProfiles
let stage;
const cardArr = [
    { // Profile Information Peter
      name: 'Peter',
      age: 23,
      bio: 'bin ein alter Maier',
      // Profile converstions Peter
      conversations: [ // Conversation array filled with objects
        { // Peter Conversation 1
          dateAnswer: 'This is a greeting meesage 1 from Peter',
          userAnswers: [
            {
            userAnswer: 'User Answer 1.1 Peter',
            dateReaction: 'Date Reaction 1.1 Peter'
            },
            {
            userAnswer: 'User Answer 1.2 Peter',
            dateReaction: 'Date Reaction 1.2 Peter'
            },
            {
            userAnswer: 'User Answer 1.3 Peter',
            dateReaction: 'Date Reaction 1.3 Peter'
            }
          ] // End of userAnswers 0
        },
        { // Peter Conversation 2.1
          dateAnswer: 'This is Peter message 2.1',
          userAnswers: [
            {
            userAnswer: 'User Answer 2.1.1 Peter',
            dateReaction: 'Date Reaction 2.1.1 Peter'
            },
            {
            userAnswer: 'User Answer 2.1.2 Peter',
            dateReaction: "Date Reaction 2.1.2 Peter"
            },
            {
            userAnswer: 'User Answer 2.1.3 Peter',
            dateReaction: 'Date Reaction 2.1.3 Peter'
            }
          ] // End of userAnswers 2.1
        },
         { // Peter Conversation 2.2
              dateAnswer: 'This is Peter message 2.2',
              userAnswers: [
                {
                userAnswer: 'User Answer 2.2.1 Peter',
                dateReaction: 'Date Reaction 2.2.1 Peter'
                },
                {
                userAnswer: 'User Answer 2.2.2 Peter',
                dateReaction: "Date Reaction 2.2.2 Peter"
                },
                {
                userAnswer: 'User Answer 2.2.3 Peter',
                dateReaction: 'Date Reaction 2.2.3'
                }
          ] // End of userAnswers 2.2
        },
        { // Peter Conversation 2.3
          dateAnswer: 'This is Peter message 2.3',
          userAnswers: [
            {
            userAnswer: 'User Answer 2.3.1 Peter',
            dateReaction: 'Date Reaction 2.3.1 Peter'
            },
            {
            userAnswer: 'User Answer 2.3.2 Peter',
            dateReaction: "Date Reaction 2.3.2 Peter"
            },
            {
            userAnswer: 'User Answer 2.3.3 Peter',
            dateReaction: 'Date Reaction 2.3.3'
            }
      ] // End of userAnswers 2.3
    },
          { // Peter Conversation 3.1
            dateAnswer: 'This is Peter message 3.1',
            userAnswers: [
              {
              userAnswer: 'User Answer 3.1.1 Peter',
              dateReaction: 'Date Reaction 3.1.1 Peter'
              },
              {
              userAnswer: 'User Answer 3.1.2 Peter',
              dateReaction: "Date Reaction 3.1.2 Peter"
              },
              {
              userAnswer: 'User Answer 3.1.3 Peter',
              dateReaction: 'Date Reaction 3.1.3 Peter'
              }
        ] // End of userAnswers 3.1
        },
        { // Peter Conversation 3.2
          dateAnswer: 'This is Peter message 3.2',
          userAnswers: [
            {
            userAnswer: 'User Answer 3.2.1 Peter',
            dateReaction: 'Date Reaction 3.2.1 Peter'
            },
            {
            userAnswer: 'User Answer 3.2.2 Peter',
            dateReaction: "Date Reaction 3.2.2 Peter"
            },
            {
            userAnswer: 'User Answer 3.2.3 Peter',
            dateReaction: 'Date Reaction 3.2.3 Peter'
            }
      ] // End of userAnswers 3.2
      },
      { // Peter Conversation 3.3
        dateAnswer: 'This is Peter message 3.3',
        userAnswers: [
          {
          userAnswer: 'User Answer 3.3.1 Peter',
          dateReaction: 'Date Reaction 3.3.1 Peter'
          },
          {
          userAnswer: 'User Answer 3.3.2 Peter',
          dateReaction: "Date Reaction 3.3.2 Peter"
          },
          {
          userAnswer: 'User Answer 3.3.3 Peter',
          dateReaction: 'Date Reaction 3.3.3 Peter'
          }
    ] // End of userAnswers 3.3
    },
    { // Peter Conversation 3.4
      dateAnswer: 'This is Peter message 3.4 Peter',
      userAnswers: [
        {
        userAnswer: 'User Answer 3.4.1 Peter',
        dateReaction: 'Date Reaction 3.4.1 Peter'
        },
        {
        userAnswer: 'User Answer 3.4.2 Peter',
        dateReaction: "Date Reaction 3.4.2 Peter"
        },
        {
        userAnswer: 'User Answer 3.4.3 Peter',
        dateReaction: 'Date Reaction 3.3.3 Peter'
        }
  ] // End of userAnswers 3.4
  },
  { // Peter Conversation 3.5
    dateAnswer: 'This is Peter message 3.5',
    userAnswers: [
      {
      userAnswer: 'User Answer 3.5.1 Peter',
      dateReaction: 'Date Reaction 3.5.1 Peter'
      },
      {
      userAnswer: 'User Answer 3.5.2 Peter',
      dateReaction: "Date Reaction 3.5.2 Peter"
      },
      {
      userAnswer: 'User Answer 3.5.3 Peter',
      dateReaction: 'Date Reaction 3.5.3 Peter'
      }
] // End of userAnswers 3.5
},
{ // Peter Conversation 3.6
  dateAnswer: 'This is Peter message 3.6',
  userAnswers: [
    {
    userAnswer: 'User Answer 3.6.1 Peter',
    dateReaction: 'Date Reaction 3.6.1 Peter'
    },
    {
    userAnswer: 'User Answer 3.6.2 Peter',
    dateReaction: "Date Reaction 3.6.2 Peter"
    },
    {
    userAnswer: 'User Answer 3.6.3 Peter',
    dateReaction: 'Date Reaction 3.6.3 Peter'
    }
] // End of userAnswers 3.6
},
{ // Peter Conversation 3.7
  dateAnswer: 'This is Peter message 3.7',
  userAnswers: [
    {
    userAnswer: 'User Answer 3.7.1 Peter',
    dateReaction: 'Date Reaction 3.7.1 Peter'
    },
    {
    userAnswer: 'User Answer 3.7.2 Peter',
    dateReaction: "Date Reaction 3.7.2 Peter"
    },
    {
    userAnswer: 'User Answer 3.7.3 Peter',
    dateReaction: 'Date Reaction 3.7.3 Peter'
    }
] // End of userAnswers 3.7
},
{ // Peter Conversation 3.8
  dateAnswer: 'This is Peter message 3.8',
  userAnswers: [
    {
    userAnswer: 'User Answer 3.8.1 Peter',
    dateReaction: 'Date Reaction 3.8.1 Peter'
    },
    {
    userAnswer: 'User Answer 3.8.2 Peter',
    dateReaction: "Date Reaction 3.7.2 Peter"
    },
    {
    userAnswer: 'User Answer 3.8.3 Peter',
    dateReaction: 'Date Reaction 3.8.3 Peter'
    }
] // End of userAnswers 3.8
},
{ // Peter Conversation 3.9
  dateAnswer: 'This is Peter message 3.9',
  userAnswers: [
    {
    userAnswer: 'User Answer 3.9.1 Peter',
    dateReaction: 'Date Reaction 3.9.1 Peter'
    },
    {
    userAnswer: 'User Answer 3.9.2 Peter',
    dateReaction: "Date Reaction 3.9.2 Peter"
    },
    {
    userAnswer: 'User Answer 3.9.3 Peter',
    dateReaction: 'Date Reaction 3.9.3 Peter'
    }
      ] // End of userAnswers 3.9
    }]}, // End of Profile Peter
    // Profile Information Alice
    { name: 'Alice',
      age: 44,
      bio: 'I want to wine and dine like a swine',
      conversations: [{ // Alice Conversation 1
        dateAnswer: 'This is a greeting meesage 1 from Alice',
        userAnswers: [
          {
          userAnswer: 'User Answer 1.1 Alice',
          dateReaction: 'Date Reaction 1.1 Alice'
          },
          {
          userAnswer: 'User Answer 1.2 Alice',
          dateReaction: 'Date Reaction 1.2 Alice'
          },
          {
          userAnswer: 'User Answer 1.3 Alice',
          dateReaction: 'Date Reaction 1.3 Alice'
          }
        ] // End of userAnswers 1
      },
      { // Alice Conversation 2.1
        dateAnswer: 'This is Alice message 2.1',
        userAnswers: [
          {
          userAnswer: 'User Answer 2.1.1 Alice',
          dateReaction: 'Date Reaction 2.1.1 Alice'
          },
          {
          userAnswer: 'User Answer 2.1.2 Alice',
          dateReaction: "Date Reaction 2.1.2 Alice"
          },
          {
          userAnswer: 'User Answer 2.1.3 Alice',
          dateReaction: 'Date Reaction 2.1.3 Alice'
          }
        ] // End of userAnswers 2.1
      },
       { // Alice Conversation 2.2
            dateAnswer: 'This is Alice message 2.2',
            userAnswers: [
              {
              userAnswer: 'User Answer 2.2.1 Alice',
              dateReaction: 'Date Reaction 2.2.1 Alice'
              },
              {
              userAnswer: 'User Answer 2.2.2 Alice',
              dateReaction: "Date Reaction 2.2.2 Alice"
              },
              {
              userAnswer: 'User Answer 2.2.3 Alice',
              dateReaction: 'Date Reaction 2.2.3'
              }
        ] // End of userAnswers 2.2
      },
      { // Alice Conversation 2.3
        dateAnswer: 'This is Alice message 2.3',
        userAnswers: [
          {
          userAnswer: 'User Answer 2.3.1 Alice',
          dateReaction: 'Date Reaction 2.3.1 Alice'
          },
          {
          userAnswer: 'User Answer 2.3.2 Alice',
          dateReaction: "Date Reaction 2.3.2 Alice"
          },
          {
          userAnswer: 'User Answer 2.3.3 Alice',
          dateReaction: 'Date Reaction 2.3.3'
          }
    ] // End of userAnswers 2.3
  },
        { // Alice Conversation 3.1
          dateAnswer: 'This is Alice message 3.1',
          userAnswers: [
            {
            userAnswer: 'User Answer 3.1.1 Alice',
            dateReaction: 'Date Reaction 3.1.1 Alice'
            },
            {
            userAnswer: 'User Answer 3.1.2 Alice',
            dateReaction: "Date Reaction 3.1.2 Alice"
            },
            {
            userAnswer: 'User Answer 3.1.3 Alice',
            dateReaction: 'Date Reaction 3.1.3 Alice'
            }
      ] // End of userAnswers 3.1
      },
      { // Alice Conversation 3.2
        dateAnswer: 'This is Alice message 3.2',
        userAnswers: [
          {
          userAnswer: 'User Answer 3.2.1 Alice',
          dateReaction: 'Date Reaction 3.2.1 Alice'
          },
          {
          userAnswer: 'User Answer 3.2.2 Alice',
          dateReaction: "Date Reaction 3.2.2 Alice"
          },
          {
          userAnswer: 'User Answer 3.2.3 Alice',
          dateReaction: 'Date Reaction 3.2.3 Alice'
          }
    ] // End of userAnswers 3.2
    },
    { // Alice Conversation 3.3
      dateAnswer: 'This is Alice message 3.3',
      userAnswers: [
        {
        userAnswer: 'User Answer 3.3.1 Alice',
        dateReaction: 'Date Reaction 3.3.1 Alice'
        },
        {
        userAnswer: 'User Answer 3.3.2 Alice',
        dateReaction: "Date Reaction 3.3.2 Alice"
        },
        {
        userAnswer: 'User Answer 3.3.3 Alice',
        dateReaction: 'Date Reaction 3.3.3 Alice'
        }
  ] // End of userAnswers 3.3
  },
  { // Alice Conversation 3.4
    dateAnswer: 'This is Alice message 3.4 Alice',
    userAnswers: [
      {
      userAnswer: 'User Answer 3.4.1 Alice',
      dateReaction: 'Date Reaction 3.4.1 Alice'
      },
      {
      userAnswer: 'User Answer 3.4.2 Alice',
      dateReaction: "Date Reaction 3.4.2 Alice"
      },
      {
      userAnswer: 'User Answer 3.4.3 Alice',
      dateReaction: 'Date Reaction 3.3.3 Alice'
      }
] // End of userAnswers 3.4
},
{ // Alice Conversation 3.5
  dateAnswer: 'This is Alice message 3.5',
  userAnswers: [
    {
    userAnswer: 'User Answer 3.5.1 Alice',
    dateReaction: 'Date Reaction 3.5.1 Alice'
    },
    {
    userAnswer: 'User Answer 3.5.2 Alice',
    dateReaction: "Date Reaction 3.5.2 Alice"
    },
    {
    userAnswer: 'User Answer 3.5.3 Alice',
    dateReaction: 'Date Reaction 3.5.3 Alice'
    }
] // End of userAnswers 3.5
},
{ // Alice Conversation 3.6
dateAnswer: 'This is Alice message 3.6',
userAnswers: [
  {
  userAnswer: 'User Answer 3.6.1 Alice',
  dateReaction: 'Date Reaction 3.6.1 Alice'
  },
  {
  userAnswer: 'User Answer 3.6.2 Alice',
  dateReaction: "Date Reaction 3.6.2 Alice"
  },
  {
  userAnswer: 'User Answer 3.6.3 Alice',
  dateReaction: 'Date Reaction 3.6.3 Alice'
  }
] // End of userAnswers 3.6
},
{ // Alice Conversation 3.7
dateAnswer: 'This is Alice message 3.7',
userAnswers: [
  {
  userAnswer: 'User Answer 3.7.1 Alice',
  dateReaction: 'Date Reaction 3.7.1 Alice'
  },
  {
  userAnswer: 'User Answer 3.7.2 Alice',
  dateReaction: "Date Reaction 3.7.2 Alice"
  },
  {
  userAnswer: 'User Answer 3.7.3 Alice',
  dateReaction: 'Date Reaction 3.7.3 Alice'
  }
] // End of userAnswers 3.7
},
{ // Alice Conversation 3.8
dateAnswer: 'This is Alice message 3.8',
userAnswers: [
  {
  userAnswer: 'User Answer 3.8.1 Alice',
  dateReaction: 'Date Reaction 3.8.1 Alice'
  },
  {
  userAnswer: 'User Answer 3.8.2 Alice',
  dateReaction: "Date Reaction 3.7.2 Alice"
  },
  {
  userAnswer: 'User Answer 3.8.3 Alice',
  dateReaction: 'Date Reaction 3.8.3 Alice'
  }
] // End of userAnswers 3.8
},
{ // Alice Conversation 3.9
dateAnswer: 'This is Alice message 3.9',
userAnswers: [
  {
  userAnswer: 'User Answer 3.9.1 Alice',
  dateReaction: 'Date Reaction 3.9.1 Alice'
  },
  {
  userAnswer: 'User Answer 3.9.2 Alice',
  dateReaction: "Date Reaction 3.9.2 Alice"
  },
  {
  userAnswer: 'User Answer 3.9.3 Alice',
  dateReaction: 'Date Reaction 3.9.3 Alice'
  }
    ] // End of userAnswers 3.9
    }
  ], 
  }
]
// GLOBAL VARIABLES
// Current Card
let currentCardIndex = 0;
let currentCard = cardArr[0];
// Picked Answer
let pickedAnswer = "";
// Display currentCard function --> display current Card in matching window
displayCard()
function displayCard(){
    document.querySelector("body > section.cards > p").innerHTML = `${currentCard.name} ${currentCard.age} <br> Bio: ${currentCard.bio} </br>`;
}

// MATCH SYSTEM: Card swipe mechanics --> iterate through array on notLike button
function notLike() {
    // Create Iterator that increments on button click or resets to first index of cardArr
    if (currentCardIndex === cardArr.length - 1) {
        currentCardIndex = 0;
    } else {
    currentCardIndex++;
    } 
    console.log(`Current card index is: ${currentCardIndex}`);
    currentCard = cardArr[currentCardIndex] ;
    displayCard();
    }

// Messages function for reactive messages
function messages() { // Gets called in chatWindow function (when pressed 'like')
    // Fill first greeting message into HTML, when matched
    document.querySelector('.messages').innerText = currentCard.conversations[0].dateAnswer;
    // Set answer buttons innerText to answers of stage 0
   // if (stage === 0) {
      document.querySelector('#answer-1').innerText = currentCard.conversations[stage].userAnswers[0].userAnswer
      document.querySelector('#answer-2').innerText = currentCard.conversations[stage].userAnswers[1].userAnswer
      document.querySelector('#answer-3').innerText = currentCard.conversations[stage].userAnswers[2].userAnswer
   // }
    // Set variable matchedReaction to reaction when certain answer is picked
    let matchedReaction = currentCard.conversations[stage].userAnswers.find(function (element) {
      return element.userAnswer === pickedAnswer}).dateReaction
    // Increment stage
    stage++
    console.log(stage)

    document.querySelector('#answer-1').innerText = currentCard.conversations[stage].userAnswers[0].userAnswer
    document.querySelector('#answer-2').innerText = currentCard.conversations[stage].userAnswers[1].userAnswer
    document.querySelector('#answer-3').innerText = currentCard.conversations[stage].userAnswers[2].userAnswer
    // return matchedReaction to be called in answer
    return matchedReaction
    // give the buttons class and get all those buttons into an array
    // buttons.forEach( (button, i) => button.innerText = conversations[0].unserAnswers1[i] )
}

// MATCH SYSTEM: Open chat window on like button
function chatWindowDisplay() { // called when pressed like
    // Opens chatWindow HTML
    console.log(`You picked card ${currentCardIndex}. The name is ${currentCard.name}. The age is ${currentCard.age}. The bio is: "${currentCard.bio}" and the greeting is: "${cardArr[0].conversations[0].dateAnswer}"`);
    // When like is clicked, turn chatwindow display on.
    document.getElementById("chat-window").style.display = "block";
    // When chatwindow is on, turn off matching system
    document.querySelector("body > section.cards > p").style.display = "none";
    // When chatWindow is on, turn off like and not like buttons
    document.querySelector(".btn-like").style.visibility = "hidden";
    document.querySelector(".btn-not-like").style.visibility = "hidden";
    // Display current cards information in chatWindow
    document.querySelector('#chat-window > div > p.name').innerHTML = currentCard.name;
    document.querySelector('#chat-window > div > p.age').innerHTML = currentCard.age;
    document.querySelector('#chat-window > div > p.bio').innerHTML = `Bio: ${currentCard.bio}`;
    // sets stage to 0
    stage = 0;
    // calls messages function which also increments the stage counter
    messages();
  
    

    
}

// ANSWER MECHANICS
// Initial Conversation 1 gets displayed when matched 
// Pick answer 1.1, 1.2 or 1.3 --> show paired reaction
// Based on reaction from Conversation 1, Converstation 2.1, 2.2 or 2.3 gets displayed
// Buttons now will have new content based on answering options for Conversation 2.1, 2.2 or 2.3
// Pick answer for conversatation:
// 2.1 ( answers 2.1.1, 2.1.2, 2.1.3 )
// 2.2 ( answers 2.2.1, 2.2.2, 2.2.3 )
// 2.3 ( answers 2.3.1, 2.3.2, 2.3.3 )
// Based on reaction from Conversation 2.x, one of the conversations 3.1 - 3.9 gets displayed
// Buttons now will have new content based on answering options for Conversation 3.1 - 3.9
// Pick answer for Conversation 3.x --> Every conversation from 3.1 - 3.9 has their own 3 answers and paired reactions
// Pick answer --> show paired reaction --> (WIN OR LOSE)

// Answer buttons
function answer1(event) {
    // PICKED ANSWER

    // PickedAnswer is same as button text content
    pickedAnswer = event.currentTarget.innerText
   // let pickedAnswerToShow = event.currentTarget.innerText

    let dateReaction = messages()
    console.log(dateReaction)

    // Create new P Element containing picked UserAnswer
    const paraAnswer = document.createElement("P");
    paraAnswer.innerText = pickedAnswer;
    // Fill HTML with new P Element containing the picked Answer
    document.querySelector(".messages").appendChild(paraAnswer)
 
   
  // REACTION 
  // Fill HTML with new P Element containing the reaction to the pickedAnswer
    
    const paraReaction = document.createElement("P");
    paraReaction.innerText = dateReaction
    document.querySelector(".messages").appendChild(paraReaction)
}

// function answer2() {
//   
// }

// function answer3() {
//    
// }



// Reset button function
function reset() {
    location.reload()
}

// Eventlistener Buttons 
window.addEventListener('load', () => {
    const notLikeBtn = document.getElementById('not-like');
    notLikeBtn.addEventListener('click', notLike);

    const likeBtn = document.getElementById('like');
    likeBtn.addEventListener('click', chatWindowDisplay);

    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', reset);

    const answerBtn1 = document.getElementById('answer-1');
    answerBtn1.addEventListener('click', answer1);

    // const answerBtn2 = document.getElementById('answer-2');
    // answerBtn2.addEventListener('click', answer2);

    // const answerBtn3 = document.getElementById('answer-3');
    // answerBtn3.addEventListener('click', answer3);
  });