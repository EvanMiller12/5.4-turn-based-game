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

// Fight Text intro Template
var introText = require('../templates/fight-intro-text.hbs');
 
 var app = $('#app');
 var audioNode = $('.audio-wrapper');

function addAudio (path) {
  
  audioNode.append('<audio class="audio-src" autoplay></audio>');
  
  var audioSrc = $('.audio-src');
  
  audioSrc.attr('src', path);
}

function removeAudio (){
  audioNode.remove();
}

function displayTemplate(template){

  var currentView = app.append(template);
  
    addAudio('./audio/simpsons.mp3');
  
  return currentView;
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
  
  $(enemyTemplate(currentEnemy)).appendTo(enemyNode).hide().fadeIn(2000);
}

var currentPlayer = {};

function setPlayer(player){

  var playerNode = $('.player-wrapper');
  
  currentPlayer = player;

  $(playerTemplate(currentPlayer)).appendTo(playerNode).hide().fadeIn(2000);
}

function displayActions() {
  var actionsNode = $('.actions-wrapper');
  
 $(actionsTemplate()).appendTo(actionsNode).hide().fadeIn(500);

}

function hideActions() {
  var actionsNode = $('.actions-wrapper');

  actionsNode.empty();
}

function displayGameText(template) {
  var fightText = $('.fight-text');

  fightText.append(template);
}

var checkLoss = function(player) {
  
  var loss;

  (player.currentHealth <= 0) ? loss = true : loss = false;

    if (loss === true) {
      app.empty();
      displayTemplate(loserTemplate(currentPlayer));
    }
}

var checkWin = function(enemy) {
  
  var win;

  (enemy.currentHealth <= 0) ? win = true : win = false;

    if (win === true) {
      app.empty();
      displayTemplate(winnerTemplate(currentPlayer));
    }
}

//starts game
$('.player-select-btn').on('click', function(e){
  
  e.preventDefault();
  
  removeAudio();
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

app.on('click', '.punch-btn', function() {

    currentPlayer.throwPunchAt(currentEnemy);
    currentEnemy.setEnemyHbWidth();
    hideActions();

    checkWin(currentEnemy);

      setTimeout(function(){
        currentEnemy.counterAttack(currentPlayer);
        currentPlayer.setPlayerHbWidth();
        checkLoss(currentPlayer);
        displayActions();
      }, 
      3000);
  
});

app.on('click', '.kick-btn', function() {

  currentPlayer.throwKickAt(currentEnemy);
  currentEnemy.setEnemyHbWidth();
  
  hideActions();

  checkWin(currentEnemy);

  setTimeout(function(){
      
      currentEnemy.counterAttack(currentPlayer);
      currentPlayer.setPlayerHbWidth();
      checkLoss(currentPlayer);
      displayActions();
    }, 
    3000);
});

app.on('click', '.take-donut-btn', function() {
  
  currentPlayer.takeDonutFrom(currentEnemy);
  currentEnemy.setEnemyHbWidth();
  
  hideActions();

  checkWin(currentEnemy);

  setTimeout(function(){
      currentEnemy.counterAttack(currentPlayer);
      currentPlayer.setPlayerHbWidth();
      checkLoss(currentPlayer);
      displayActions();
    }, 
  3000); 
});

app.on('click', '.power-up-btn', function() {
  
  currentPlayer.increaseHealth();
  
  currentPlayer.setPlayerHbWidth();

  hideActions();

  setTimeout(function(){
      currentEnemy.counterAttack(currentPlayer);
      currentPlayer.setPlayerHbWidth();
      checkLoss(currentPlayer);
      displayActions();
    }, 
  3000);
});

app.on('click', '.play-again', function(){
  location.reload();
});