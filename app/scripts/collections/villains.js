var Villain = require('../models/villain').Villain;

var homer = new Villain({
  name: 'homer',
  image: 'images/villains/homer-doh.png',
  maxHealth: 118,
  currentHealth: 118,
  elbowDamage: 19,
  burpDamage: 25,
  sneezeDamage: 30,
  powerUp: 15
});

var krusty = new Villain({
  name: 'krusty',
  image: 'images/villains/krusty.png',
  maxHealth: 102,
  currentHealth: 102,
  elbowDamage: 20,
  burpDamage: 28,
  sneezeDamage: 35,
  powerUp: 23
});

var nelson = new Villain({
  name: 'nelson',
  image: 'images/villains/nelson.png',
  maxHealth: 120,
  currentHealth: 120,
  elbowDamage: 17,
  burpDamage: 24,
  sneezeDamage: 32,
  powerUp: 13
});

var mrBurns = new Villain({
  name: 'Mr. Burns',
  image: 'images/villains/Mr._Burns.png',
  maxHealth: 90,
  currentHealth: 90,
  elbowDamage: 22,
  burpDamage: 34,
  sneezeDamage: 40,
  powerUp: 25
})

module.exports = {
  homer,
  krusty,
  nelson
};