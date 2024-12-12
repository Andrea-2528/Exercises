// Initialize constructor functions
function Hero(name, level) {
    this.name = name;
    this.level = level;
  }
  
  function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
  
    this.weapon = weapon;
  }
  
  function Healer(name, level, spell) {
    Hero.call(this, name, level);
  
    this.spell = spell;
  }
  
  // Link prototypes and add prototype methods
  Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
  Object.setPrototypeOf(Healer.prototype, Hero.prototype);
  
  Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
  }
  
  Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
  }
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
  }
  
  // Initialize individual character instances
  const hero1 = new Warrior('Bjorn', 1, 'axe');
  const hero2 = new Healer('Kanin', 1, 'cure');

  // With this code we’ve created our Hero constructor with the base properties, 
  // created two character constructors called Warrior and Healer from the original constructor, 
  // added methods to the prototypes and created individual character instances.
  
  console.log(hero1.name + " " + hero1.level + " " + hero1.weapon);
  console.log(hero1.attack());
  console.log(hero2.name + " " + hero2.level + " " + hero2.weapon);
  console.log(hero2.heal());