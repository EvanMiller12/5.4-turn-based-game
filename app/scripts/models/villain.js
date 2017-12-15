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
  
  var playerFeedback = $('.fight-text');
  var playerNode = $('.player-wrapper');

  var basicChance = pain.basicHit();

  var elbowMiss = (player.powerUp - 2);
  
  (basicChance) ? 
      player.currentHealth -= this.elbowDamage : 
      player.currentHealth += elbowMiss;

  (basicChance) ? 
      playerFeedback.text(this.name + ' hit you for ' + this.elbowDamage) :
      playerFeedback.text(this.name + ' missed with an elbow you gained ' + elbowMiss + ' hp!');

      (player.currentHealth >= player.maxHealth) ?
          player.currentHealth = player.maxHealth :
          player.currentHealth;

      (player.currentHealth <= 0) ? 
          player.currentHealth = 0 : 
          player.currentHealth;

      if (basicChance) {
      playerNode.animate({
        opacity: 0.35
      }, 
      300, 
      function () {
        playerNode.animate({
          opacity: 1
        });
      });
    }
};

Villain.prototype.burpOn = function(player) {
  
  var playerFeedback = $('.fight-text');
  var playerNode = $('.player-wrapper');

  var strongChance = pain.strongHit();

  var burpMiss = (player.powerUp - 4);

  (strongChance) ? 
      player.currentHealth -= this.burpDamage : 
      player.currentHealth += burpMiss;

  (strongChance) ? 
      playerFeedback.text(this.name + ' hit you for ' + this.burpDamage) :
      playerFeedback.text('you dodged a burp and gained ' + burpMiss + ' hp!');

      (player.currentHealth >= player.maxHealth) ?
          player.currentHealth = player.maxHealth :
          player.currentHealth;

      (player.currentHealth <= 0) ? 
          player.currentHealth = 0 : 
          player.currentHealth;

    if (strongChance) {
      playerNode.animate({
        opacity: 0.25,
        marginLeft: "15"
      }, 
      400, 
      function () {
        playerNode.animate({
          opacity: 1,
          marginRight: "15"
        });
      });
    }
};

Villain.prototype.sneezeOn = function(player) {
  
 var playerFeedback = $('.fight-text');
 var playerNode = $('.player-wrapper');

  var criticalChance = pain.criticalHit();

  var sneezeMiss = (player.powerUp - 6);
   
 (criticalChance) ? 
      player.currentHealth -= this.sneezeDamage : 
      player.currentHealth += sneezeMiss;
  
  (criticalChance) ? 
      playerFeedback.text(this.name + ' hit you for ' + this.sneezeDamage) :
      playerFeedback.text('you dodged a burp and gained ' + sneezeMiss + ' hp!');

    (player.currentHealth >= player.maxHealth) ?
        player.currentHealth = player.maxHealth :
        player.currentHealth;

    (player.currentHealth <= 0) ? 
        player.currentHealth = 0 : 
        player.currentHealth;

    if (criticalChance) {
      playerNode.animate({
        opacity: 0.15,
        marginLeft: "20"
      }, 
      400, 
      function () {
        playerNode.animate({
          opacity: 1,
          marginRight: "20"
        });
      });
    }
};

Villain.prototype.counterAttack = function(player) {
  var enemyHealth = this.currentHealth;
  var playerHealth = player.currentHealth;

    if(enemyHealth < 40 && playerHealth > 60) {
     
      this.currentHealth += this.powerUp; 
    } 
    else if (playerHealth < 30) {
     
      this.sneezeOn(player);
    
    } 
    else if (playerHealth > 70) {
    
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