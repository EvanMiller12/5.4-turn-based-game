var $ = require ('jquery');
var pain = require('./pain.js');

function Villain(options){
  options = options || {};
  this.name = options.name;
  this.image = options.image;
  this.health = options.health;
  this.currentHealth = options.currentHealth;
  this.elbowDamage = options.elbowDamage;
  this.sneezeDamage = options.sneezeDamage;
  this.burpDamage = options.burpDamage;
  this.powerUp = options.powerUp;
};

Villain.prototype.throwElbow = function(player) {

};

Villain.prototype.sneezeOnUm = function(player) {

};

Villain.prototype.burpOnUm = function(player) {

};

Villain.prototype.increaseHealth = function(player) {

};

// Villain.prototype.attack = function(villain){
//   if(pain.painInflicted()){
//     hero.health -= this.attack;
//   };
// };
//
//
//   Villain.prototype.sneeze = function(villain){
//     if(pain.painInflicted2()){
//       hero.health -= this.sneeze;
//     };
//   };
//
//     Villain.prototype.burp = function(villain){
//       if(pain.painInflicted3()){
//         hero.health -= this.burp;
//       };
// };



module.exports = {
  Villain
};