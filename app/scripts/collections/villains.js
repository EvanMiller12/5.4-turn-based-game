var Villain = require('../models/villain').Villain;

var homer = new Villain({
  name: 'homer',
  image: 'images/villains/homer-doh.png',
  maxHealth: 118,
  currentHealth: 118,
  animation: 'shake-slow',
  elbowDamage: 19,
  sneezeDamage: 30,
  burpDamage: 25,
  powerUp: 15
});

var krusty = new Villain({
  name: 'krusty',
  image: 'images/villains/krusty.png',
  maxHealth: 102,
  currentHealth: 102,
  animation: 'shake-hard',
  elbowDamage: 21,
  sneezeDamage: 32,
  burpDamage: 19,
  powerUp: 23
});

var nelson = new Villain({
  name: 'nelson',
  image: 'images/villains/nelson.png',
  maxHealth: 120,
  currentHealth: 120,
  animation: 'shake-hard',
  elbowDamage: 30,
  sneezeDamage: 24,
  burpDamage: 17,
  powerUp: 15
});

module.exports = {
  homer,
  krusty,
  nelson
};