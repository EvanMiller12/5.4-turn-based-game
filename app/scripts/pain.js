var _ = require('underscore');

/******
 
 Functions to determine the chance a player 
 or enemy will be hit by an attack
 
 *****/

"use strict";

  // 50% chance of a successful attack
  var basicHit = function(){
    var randomNum = _.random(1, 2);
    
    var hitOrMiss = (randomNum === 1) ? true :  false;
    
    return hitOrMiss;
  }

  // 33% chance of a successful attack
  var strongHit = function(){
    var randomNum2 = _.random(1, 3);

    var hitOrMiss = (randomNum2 === 3) ? true : false;

    return hitOrMiss;
  }

  // 20% chance of a successful attack
  var criticalHit = function(){
    var randomNum3 = _.random(1, 5);
    
    var hitOrMiss = (randomNum3 === 5) ? true : false;
    
    return hitOrMiss;
  };

module.exports = {
  basicHit,
  strongHit,
  criticalHit
}