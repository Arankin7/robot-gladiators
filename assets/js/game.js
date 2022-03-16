var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this.
// console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Mr. Roboto", "Amy Android", "General Grevious"];
var enemyHealth = 50;
var enemyAttack = 12;
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

                playerMoney = Math.max(playerMoney - skipPenalty);

                window.alert (playerName + " lost " + skipPenalty + " dollars.");

                // window.alert (playerName + " still has " + playerHealth + " health remaining.");
                // window.alert (enemyName + " still has " + enemyHealth + " health  remaining.");

                break;
            }
        } 
            var damage = randomNumber(playerAttack - 3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);

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
            
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);

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
var startGame = function () {

    // Resets player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // Alert players that they are starting the round 
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = randomNumber(40, 60);

            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length -1) {

                var storeConfirm = window.confirm ("Would you like to visit the shop?");

                if (storeConfirm) {
                    shop();
                }
                else {
                    continue;
                }
            }
        }

        else {
            window.alert ("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();
};


var endGame = function () {
    // If player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert ("Great job, you've survived Robot Gladiators! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert ("You've lose your robot in battle!");
    }

    // Asking the player if they'd like to play again. 
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

var shop = function () {
    console.log("Entered the shop.");

    var shopOptionPrompt = window.prompt ("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?  Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    
    // Use 'switch' to carry out action
    switch (shopOptionPrompt){
        case "REFILL":
        case "refill":
            if (playerMoney >= 7){
            window.alert ("Refilling " + playerName + "'s health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert (playerName + " does not have enough money!");
            }
            window.alert (playerName + "'s health is now " + playerHealth + ".");
            break;
        
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7){
            window.alert ("Upgrading " + playerName + "'s attack power by 6 for 7 dollars.");
            playerAttack = playerAttack + 5;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert (playerName + " does not have enough money!");
            }
            window.alert (playerName + "'s attack power is now " + playerAttack +".");
            break;
            
        case "LEAVE":
        case "leave":
            window.alert ("Leaving the store.");
            break;

        default:
            window.alert ("Please chose a valid option. 'REFILL', 'UPGRADE', or 'LEAVE'.");
            shop();
            break;
    }
};

var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

// Starts the GAME!
startGame ();

