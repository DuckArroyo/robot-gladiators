
//JS structure to run a fighting game. No CSS is used. HTML is used to load browser.

// DATA TRACKING

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  //Alerts players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

//Attack 1 User > NPC
  //Substract tge vakue if 'playerAttack' from the value of 'enemyHealth' 
  //and use the result to update the value in the 'enemyHealth' variable
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log
  ( 
    playerName + " attacked " + enemyName + ". " 
    + enemyName + " now has " + enemyHealth + " health remaining."
  );

  //check enemy's health - Display alert
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  }
  else {
    window.alert(enemyName + "still has " + enemyHealth + " health left. ファイト");
  }

//Attack 2 NPC > User
  // Subtract the value of `enemyAttack` from the value of `playerHealth` 
  //and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log
  (
    enemyName + " attacked " + playerName + ". " 
    + playerName + " now has " + playerHealth + " health remaining."
  );

  //check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  }
  else {
    window.alert(playerName + " still has " + playerHealth + " health left." )
  }

};

fight();