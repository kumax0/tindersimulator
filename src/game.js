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
// Date profile number 1

const date1 = new Dateprofile('peter', 23)

//  //Test logs of Date profile number 1

// console.log(date1.bio())
// console.log(date1.name)
// console.log(date1.age)

// date1.bio = 'hi this is my new bio'

// console.log(date1.bio)
// console.log(date1.greeting())

