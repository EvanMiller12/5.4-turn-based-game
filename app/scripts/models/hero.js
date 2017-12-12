var $ = require ('jquery');
var pain = require('../pain.js');

function Hero(options){
  options = options || {};
  this.name = options.name;
  this.image = options.image;
  this.maxHealth = options.maxHealth;
  this.currentHealth = options.currentHealth;
  this.punchDamage = options.punchDamage;
  this.kickDamage = options.kickDamage;
  this.donutDamage = options.donutDamage;
  this.powerUp = options.powerUp;
};

Hero.prototype.throwPunchAt = function(enemy) {

  enemy.currentHealth = (pain.basicHit()) ? 
      enemy.currentHealth -= this.punchDamage : 
      enemy.currentHealth += (enemy.powerUp -2);

      (enemy.currentHealth >= enemy.maxHealth) ?
          enemy.currentHealth = enemy.maxHealth :
          enemy.currentHealth;

      (enemy.currentHealth <= 0) ? 
          enemy.currentHealth = 0 : 
          enemy.currentHealth;
};

Hero.prototype.throwKickAt = function(enemy) {
  
  enemy.currentHealth = (pain.strongHit()) ? 
      enemy.currentHealth -= this.kickDamage : 
      enemy.currentHealth += (enemy.powerUp - 5);

      (enemy.currentHealth >= enemy.maxHealth) ?
          enemy.currentHealth = enemy.maxHealth :
          enemy.currentHealth;

      (enemy.currentHealth <= 0) ? 
      enemy.currentHealth = 0 : 
      enemy.currentHealth;
};

Hero.prototype.takeDonutFrom = function(enemy) {
 
  enemy.currentHealth = (pain.criticalHit()) ? 
      enemy.currentHealth -= this.donutDamage : 
      enemy.currentHealth += (enemy.powerUp - 7);

      (enemy.currentHealth >= enemy.maxHealth) ?
          enemy.currentHealth = enemy.maxHealth :
          enemy.currentHealth;

      (enemy.currentHealth <= 0) ? 
      enemy.currentHealth = 0 : 
      enemy.currentHealth;
};

Hero.prototype.increaseHealth = function() {
  
  this.currentHealth = (this.currentHealth > 0 && this.currentHealth < (this.maxHealth - this.powerUp)) ? 
      this.currentHealth += this.powerUp :
      this.currentHealth = this.maxHealth;
};

Hero.prototype.setPlayerHbWidth = function() {
  
  var playerHealthBarNode = $('.player-health');
  var playerHealthNode = $('.player-hp');
  
  playerHealthNode.text(this.currentHealth + '/' + this.maxHealth);
  playerHealthBarNode.width(this.currentHealth / this.maxHealth * 100);

  (playerHealthBarNode.width() < 50) ? 
      playerHealthBarNode.css('background-color', 'red') : 
      playerHealthBarNode.css('background-color', 'green');
}

module.exports = {
  Hero
}