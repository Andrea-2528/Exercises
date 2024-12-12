// Write a constructor to make "Book" objects

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + ", " + author + ", " + pages + ", " + read;
    }
}

const theHobbit = new Book("The Hobbit","J.R.R.Tolkien","295 pages","read");

console.log(theHobbit.info());

// Player's code

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
  };
  
  Object.getPrototypeOf(Player.prototype);                      // returns Object.prototype

  // Now make `Player` objects inherit from `Person`
  Object.setPrototypeOf(Player.prototype, Person.prototype);
  Object.getPrototypeOf(Player.prototype);                      // returns Person.prototype
  
  // Objects should be created AFTER assigning prototypes (setPrototypeOf) for performance reasons

  const playerOne = new Player('mark', 'X');
  const playerTwo = new Player('also mark', 'O');
  
  playerOne.sayName(); // Hello, I'm mark!
  playerTwo.sayName(); // Hello, I'm also mark!
  
  playerOne.getMarker(); // My marker is 'X'
  playerTwo.getMarker(); // My marker is 'O'
  



