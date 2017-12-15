var Hero = require('../models/hero').Hero;

var bart = new Hero({
  name: "Bart",
  image: "images/heros/bart-sh.png",
  maxHealth: 120,
  currentHealth: 120,
  punchDamage: 28,
  kickDamage: 30,
  donutDamage: 43,
  powerUp: 10
});

var lisa = new Hero({
  name: "Lisa",
  image: "images/heros/lisa.png",
  maxHealth: 105,
  currentHealth: 105,
  punchDamage: 32,
  kickDamage: 27,
  donutDamage: 41,
  powerUp: 13
});

var ned = new Hero({
  name: "Ned",
  image: "images/heros/Ned_Flanders.png",
  maxHealth: 100,
  currentHealth: 100,
  punchDamage: 19,
  kickDamage: 25,
  donutDamage: 55,
  powerUp: 15
});

var maggie = new Hero({
  name: "Maggie",
  image: "images/heros/maggie.png",
  maxHealth: 115,
  currentHealth: 115,
  punchDamage: 15,
  kickDamage: 10,
  donutDamage: 100,
  powerUp: 20
})

module.exports = {
  bart,
  lisa,
  ned,
  maggie
};