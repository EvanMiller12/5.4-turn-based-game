var $ = require ('jquery');
var pain = require('../pain.js');

function Villain(options){
  options = options || {};
  this.name = options.name;
  this.image = options.image;
  this.maxHealth = options.maxHealth;
  this.currentHealth = options.currentHealth;
  this.elbowDamage = options.elbowDamage;
  this.sneezeDamage = options.sneezeDamage;
  this.burpDamage = options.burpDamage;
  this.powerUp = options.powerUp;
};

Villain.prototype.throwElbowAt = function(player) {
  
  player.currentHealth = (pain.basicHit()) ? 
      player.currentHealth -= this.elbowDamage : 
      player.currentHealth += (player.powerUp - 2);

      (player.currentHealth >= player.maxHealth) ?
          player.currentHealth = player.maxHealth :
          player.currentHealth;

      (player.currentHealth <= 0) ? 
          player.currentHealth = 0 : 
          player.currentHealth;
};

Villain.prototype.burpOn = function(player) {
  
  player.currentHealth = (pain.strongHit()) ? 
      player.currentHealth -= this.burpDamage : 
      player.currentHealth += player.powerUp;

      (player.currentHealth >= player.maxHealth) ?
          player.currentHealth = player.maxHealth :
          player.currentHealth;

      (player.currentHealth <= 0) ? 
          player.currentHealth = 0 : 
          player.currentHealth;
};

Villain.prototype.sneezeOn = function(player) {
  
  player.currentHealth = (pain.criticalHit()) ? 
      player.currentHealth -= this.sneezeDamage : 
      player.currentHealth += player.powerUp;

      (player.currentHealth >= player.maxHealth) ?
          player.currentHealth = player.maxHealth :
          player.currentHealth;

      (player.currentHealth <= 0) ? 
          player.currentHealth = 0 : 
          player.currentHealth;
};

Villain.prototype.counterAttack = function(player) {
  
  var enemyHealth = this.currentHealth;
  var playerHealth = player.currentHealth;

  if(enemyHealth < 50 && playerHealth > 70) {
   
    this.currentHealth += this.powerUp; 
  } 
  else if (playerHealth < 40) {
   
    this.sneezeOn(player);
  
  } 
  else if (playerHealth > 75) {
  
    this.burpOn(player); 
  } 
  else {
   
    this.throwElbowAt(player);
  }
}

Villain.prototype.setEnemyHbWidth = function () {
  var enemyHealthBarNode = $('.enemy-health');
  var enemyHealthNode = $('.enemy-hp');
  
  enemyHealthNode.text(this.currentHealth + '/' + this.maxHealth);
  enemyHealthBarNode.width(this.currentHealth / this.maxHealth * 100 + '%');
  
    (enemyHealthBarNode.width() < 50) ? 
      enemyHealthBarNode.css('background-color', 'red') : 
      enemyHealthBarNode.css('background-color', 'green');
}


module.exports = {
  Villain
};