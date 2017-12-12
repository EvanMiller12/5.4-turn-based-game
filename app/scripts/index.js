var $ =  require('jquery');
var Handlebars = require('handlebars');
var _ = require('underscore');

// Functions to determine the chance of a hit
var percentChance = require('./pain');

// Models
var Hero = require('./models/hero').Hero;
var Villain = require('./models/villain').Villain;

// Hero Instances
var bart = require('./collections/heros').bart;
var lisa = require('./collections/heros').lisa;
var ned = require('./collections/heros').ned;
var maggie = require('./collections/heros').maggie;


// Villain Instances
var homer = require('./collections/villains').homer;
var krusty= require('./collections/villains').krusty;
var nelson= require('./collections/villains').nelson;

// Full Screen Templates
var startModalTemplate = require('../templates/start-modal.hbs');
var gameTemplate = require('../templates/fight.hbs');
var winnerTemplate = require('../templates/winnerOrLoser/winner.hbs');
var loserTemplate = require('../templates/winnerOrLoser/loser.hbs');

// Hero and Villain Templates
var enemyTemplate = require('../templates/enemy/villain.hbs');
var playerTemplate = require('../templates/player/hero.hbs');

var actionsTemplate = require('../templates/player/actions.hbs');

// Fight Text Templates
var introText = require('../templates/fight-intro-text.hbs');

// var enemyHitText = require('../templates/enemy/enemyFightText/enemy-hit-text.hbs');
// var enemyMissText = require('../templates/enemy/enemyFightText/enemy-miss-text.hbs');
// var playerHitText = require('../templates/player/playerFightText/player-hit-text.hbs');
// var playerMissText = require('../templates/player/playerFightText/player-miss-text.hbs');
 
 var app = $('#app');
 var audio = $('.music');

function displayTemplate(template){
  var currentView = app.append(template);
  
    addAudio('./audio/simpsons.mp3');
  
  return currentView;
}

function addAudio (path) {
  
  audio.attr('src', path)
}

var heroArray = [bart, lisa, ned, maggie];

displayTemplate(startModalTemplate({heroArray}));

// selects random villain and returns the villain;
function getRandomVillain() {
  var villainArray=[homer, krusty, nelson];

  var index = _.random(0, (villainArray.length - 1));

  var selectedVillain = villainArray[index];

  return selectedVillain;
}

var currentEnemy = {};

function setEnemy(){
  var enemyNode = $('.enemy-wrapper');
  
  currentEnemy = getRandomVillain();
  
  enemyNode.append(enemyTemplate(currentEnemy));
}

var currentPlayer = {};

function setPlayer(player){
  var playerNode = $('.player-wrapper');
  
  currentPlayer = player;

  $(playerTemplate(currentPlayer)).appendTo(playerNode).hide().fadeIn(1000);
}

function displayActions() {
  var actionsNode = $('.actions-wrapper');

  actionsNode.append(actionsTemplate());
}

function displayGameText(template) {
  var fightText = $('.fight-text');

  fightText.append(template);
}

//starts game
$('.player-select-btn').on('click', function(e){
  e.preventDefault();
  
  audio.empty();
  
  app.empty();

  displayTemplate(gameTemplate());
  displayActions();
  displayGameText(introText());
  
  setEnemy();

    var selectedPlayer = _.where(heroArray, {
      'name': $(this).text()
    });

    currentPlayer = selectedPlayer[0]; 
  
    setPlayer(currentPlayer);
 });

$('#app').on('click', '.punch-btn', function() {

  currentPlayer.throwPunchAt(currentEnemy);
  currentEnemy.setEnemyHbWidth();

  setTimeout(function(){
      currentEnemy.counterAttack(currentPlayer);
      currentPlayer.setPlayerHbWidth();
    }, 
    2000);
});

$('#app').on('click', '.kick-btn', function() {

  currentPlayer.throwKickAt(currentEnemy);
  currentEnemy.setEnemyHbWidth();
  
  setTimeout(function(){
      
      currentEnemy.counterAttack(currentPlayer);
      currentPlayer.setPlayerHbWidth();
    }, 
    2000);
});

$('#app').on('click', '.take-donut-btn', function() {
  
  currentPlayer.takeDonutFrom(currentEnemy);
  currentEnemy.setEnemyHbWidth();

  setTimeout(function(){
      currentEnemy.counterAttack(currentPlayer);
      currentPlayer.setPlayerHbWidth();
    }, 
  2000); 
});

$('#app').on('click', '.power-up-btn', function() {
  
  currentPlayer.increaseHealth();
  
  currentPlayer.setPlayerHbWidth();

  setTimeout(function(){
      currentEnemy.counterAttack(currentPlayer);
      currentPlayer.setPlayerHbWidth();
    }, 
  2000);
});
