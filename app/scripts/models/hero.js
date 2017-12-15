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
  var playerFeedback = $('.fight-text');
  var enemyNode = $( ".enemy-wrapper" );

  var basicChance = pain.basicHit();

  var punchMiss = (enemy.powerUp - 3);

  (basicChance) ? 
      enemy.currentHealth -= this.punchDamage : 
      enemy.currentHealth += punchMiss;

  (basicChance) ? 
      playerFeedback.text('you hit ' + enemy.name + ' for ' + this.punchDamage) :
      playerFeedback.text('you missed! ' + enemy.name + ' gained ' + punchMiss + ' hp!');
      
      (enemy.currentHealth >= enemy.maxHealth) ?
          enemy.currentHealth = enemy.maxHealth :
          enemy.currentHealth;

      (enemy.currentHealth <= 0) ? 
          enemy.currentHealth = 0 : 
          enemy.currentHealth;

    if (basicChance) {
      enemyNode.animate({
        opacity: 0.35,
      }, 
      300, 
      function () {
        enemyNode.animate({
          opacity: 1,
        });
      });
    }

};

Hero.prototype.throwKickAt = function(enemy) {
  var playerFeedback = $('.fight-text');
  var enemyNode = $( ".enemy-wrapper" );

 var strongChance = pain.strongHit();
  
 var kickMiss = (enemy.powerUp - 5);

  (strongChance) ? 
    enemy.currentHealth -= this.kickDamage : 
    enemy.currentHealth += kickMiss;
  
    (strongChance) ?
      playerFeedback.text('you hit ' + enemy.name + ' for ' + this.kickDamage) :
      playerFeedback.text('you missed! ' + enemy.name + ' gained ' + kickMiss + ' hp!');

      (enemy.currentHealth >= enemy.maxHealth) ?
          enemy.currentHealth = enemy.maxHealth :
          enemy.currentHealth;

      (enemy.currentHealth <= 0) ? 
      enemy.currentHealth = 0 : 
      enemy.currentHealth;

     if (strongChance) {
      enemyNode.animate({
        opacity: 0.25,
        marginLeft: "15",
      }, 
      400, 
        function () {
          enemyNode.animate({
            opacity: 1,
            marginRight: "15"
          });
        });
    }
};

Hero.prototype.takeDonutFrom = function(enemy) {
  var playerFeedback = $('.fight-text');
  var enemyNode = $( ".enemy-wrapper" );

  var criticalChance = pain.criticalHit();

  var donutMiss = (enemy.powerUp - 7);

 (criticalChance) ? 
      enemy.currentHealth -= this.donutDamage : 
      enemy.currentHealth += donutMiss;

 (criticalChance) ?
    playerFeedback.text('you hit ' + enemy.name + ' for ' + this.donutDamage) :
    playerFeedback.text('you missed! ' + enemy.name + ' gained ' + donutMiss + ' hp!');

      (enemy.currentHealth >= enemy.maxHealth) ?
          enemy.currentHealth = enemy.maxHealth :
          enemy.currentHealth;

      (enemy.currentHealth <= 0) ? 
      enemy.currentHealth = 0 : 
      enemy.currentHealth;

    if (criticalChance) {
      enemyNode.animate({
        opacity: 0.15,
        marginLeft: "25"
      }, 
      400, 
      function () {
      enemyNode.animate({
          opacity: 1,
          marginRight: "25"
        });
      });
    }
};

Hero.prototype.increaseHealth = function() {
  var playerFeedback = $('.fight-text');

  (this.currentHealth > 0 && (this.currentHealth < (this.maxHealth - this.powerUp))) ? 
      this.currentHealth += this.powerUp :
      this.currentHealth = this.maxHealth;

    playerFeedback.text('you increased ' + this.name + 's health by ' + this.powerUp);

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