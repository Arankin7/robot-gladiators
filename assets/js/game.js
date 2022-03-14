var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this.
// console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Mr. Roboto", "Amy Android", "General Grevious"];
var enemyHealth = 50;
var enemyAttack = 25;
var playerMoney = 10;
var skipPenalty = 5;

// console.log(enemyNames, enemyHealth, enemyAttack);

var fight = function(enemyName) {

    while (playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

        if (promptFight === "SKIP" || promptFight === "skip") {

            //Confirm player wants to skip the fight
            var confirmSkip = window.confirm("Are you sure you would like to quit this fight?");

            if (confirmSkip) {
                window.alert (playerName + " has chosen to skip this fight!");
                playerMoney = playerMoney - skipPenalty;

                window.alert (playerName + " lost " + skipPenalty + " dollars.");

                // window.alert (playerName + " still has " + playerHealth + " health remaining.");
                // window.alert (enemyName + " still has " + enemyHealth + " health  remaining.");

                break;
            }
        } 
            // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable 
            enemyHealth = enemyHealth - playerAttack; 

            // Log a resulting message to the console so we know that it worked. 
            console.log(playerName + " attacked " + enemyName +". " + enemyName + " now has " + enemyHealth + " health remaining.");   

            // Checking enemy health
            if (enemyHealth <= 0) {
            window.alert (enemyName + " has died!");

            // award player money for winning 
            playerMoney = playerMoney + 20;
            break;
            }
            else {
            window.alert (enemyName + " still has " + enemyHealth + " health left.");
            }

            // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value of the 'playerHealth' variable.
            playerHealth = playerHealth - enemyAttack; 

            //Checking player health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
        
            else {
                window.alert (playerName + " still has " + playerHealth + " health left.");
            }

            //Log a resulting message to the conosle so we know that it worked. 
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");         
    }
};

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
         // Alert players that they are starting the round 
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }

    else {
        window.alert ("You have lost your robot in battle! Game Over!");
        break;
    }
   
}