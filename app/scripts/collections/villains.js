var homer = new models.Villain({
  name: 'homer',
  image: 'images/homer-doh.png',
  health: 118,
  currentHealth: 118,
  animation: 'shake-slow',
  elbowDamage: 19,
  sneezeDamage: 30,
  burpDamage: 25,
  powerUp: 8
});

var krusty = new models.Villain({
  name: 'krusty',
  image: 'images/Krusty_The_Clown.png',
  health: 102,
  currentHealth: 102,
  animation: 'shake-hard',
  elbowDamage: 21,
  sneezeDamage: 32,
  burpDamage: 19,
  powerUp: 6
});

var nelson = new models.Villain({
  name: 'nelson',
  image: 'images/Nelson_Muntz.png',
  health: 120,
  currentHealth: 120,
  animation: 'shake-hard',
  elbowDamage: 30,
  sneezeDamage: 24,
  burpDamage: 17,
  powerUp: 3
});

module.exports = {
  homer,
  krusty,
  nelson
};