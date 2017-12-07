var $ = require ('jquery');
var pain = require('./pain.js');

function Hero(options){
  options = options || {};
  this.name = options.name;
  this.image = options.image;
  this.health = options.health;
  this.punchDamage = options.punchDamage;
  this.kickDamage = options.kickDamage;
  this.donutDamage = options.donutDamage;
  this.powerUp = options.powerUp;
};

Hero.prototype.throwPunch = function(enemy) {
  var 
};

Hero.prototype.throwKick = function(enemy) {

};

Hero.prototype.takeDonut = function(enemy) {

};

Hero.prototype.increaseHealth = function(enemy) {

};

// Hero.prototype.attack = function(villain){
//   if(pain.painInflicted()){
//     villain.health -= this.attack;
//   };
// };
//
// Hero.prototype.kick = function(villain){
//     if(pain.painInflicted2()){
//       villain.health -= this.kick;
//     };
//   };
//
// Hero.prototype.donut = function(villain){
//     if(pain.painInflicted3()){
//       villain.health -= this.donut;
//     };
//   };