var bart = new models.Hero({
  name: "bart",
  image: "images/BARTslingshot-psd.png",
  health: 120,
  currentHealth: 120,
  animation: "shake-opacity",
  punchDamage: 28,
  kickDamage: 30,
  donutDamage: 43,
  powerUp: 10
});

var lisa = new models.Hero({
  name: "lisa",
  image: "images/lisa.png",
  health: 105,
  currentHealth: 105,
  animation: 'shake-vertical',
  punchDamage: 32,
  kickDamage: 27,
  donutDamage: 41,
  powerUp: 13
});

var ned = new models.Hero({
  name: "ned",
  image: "images/Ned_Flanders.png",
  health: 100,
  currentHealth: 100,
  animation: 'shake-vertical',
  punchDamage: 19,
  kickDamage: 25,
  donutDamage: 55,
  powerUp: 15
});

module.exports = {
  bart,
  lisa,
  ned
};