// function to generate a random numeric value
var randomNumber = function() {
  var value = Math.floor(Math.random() * (21)) + 40;
  return value;
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 20,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 5;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 7;
      this.money -= 5;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};

var enemyInfo = [
  {
    name: "T1000",
    attack: randomNumber(10, 14)
  },
  {
    name: "Dalek",
    attack: randomNumber(10, 14)
  },
  {
    name: "Agent Smith",
    attack: randomNumber(10, 14)
  }
];



console.log (Math.random());

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        console.log(promptFight);//!Console log
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === 'skip' || promptFight === 'SKIP') {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      console.log(promptFight);//!Console log
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        console.log(playerInfo.name + ' has decided to skip this fight. Goodbye!');//!Console log

        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);

      console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');
      console.log(enemy.health);//!Console log

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      console.log(enemy.name + ' still has ' + enemy.health + ' health left.');//!Console log

    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      console.log(playerInfo.name + ' has died!');//!Console log

      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      console.log(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');//!Console log

    }
  }
};

// function to start a new game
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      console.log('Welcome to Robot Gladiators! Round ' + (i + 1));//!Console log

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);
      
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player is not alive, break out of the loop and let endGame function run
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      console.log("You have lost your robot in battle! Game Over!");//!Console log

      break;
    }
  }

  // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  console.log("The game has now ended. Let's see how you did!");//!Console log

  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');
    console.log("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');//!Console log
    
  } else {
    window.alert("You've lost your robot in battle!");
    console.log("You've lost your robot in battle!");//!Console log

  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    console.log('Thank you for playing Robot Gladiators! Come back soon!');//!Console log

  }
};

// go to shop between battles function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
  );

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
    playerInfo.refillHealth();
    break;

    case "UPGRADE":
    case "upgrade":
    playerInfo.upgradeAttack();
    break;

    case 'LEAVE':
    case 'leave':
    window.alert('Leaving the store.');
    console.log('Left store');//!Console log
    // do nothing, so function will end
    break;

    default:
    window.alert('You did not pick a valid option. Try again.');
    console.log('invalid user option');//!Console log
    // call shop() again to force player to pick a valid option
    shop();
    break;

  }
};

// start first game when page loads
startGame();