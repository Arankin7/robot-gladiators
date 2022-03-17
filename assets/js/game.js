var fightOrSkip = function(){
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle?');

    if (promptFight === "" || promptFight === null){
        window.alert("You need to provide a valid response.  Please try again!");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    if (promptFight === "skip" || promptFight === "SKIP"){
        var confirmSkip = window.confirm("Are you sure you would like to skip this fight?");
        
        if (confirmSkip){
            window.alert(playerInfo.name + " has chosen to skip this fight!");
            
            playerInfo.money = Math.max(0, playerInfo.money - skipPenalty);
            window.alert (playerInfo.name + " lost " + skipPenalty + " dollars.");
            return true;
            shop();
        }
    }
    return false;
}


var fight = function(enemy) {

    while (playerInfo.health > 0 && enemy.health > 0) {

        if (fightOrSkip()){
            break;
        }; 

            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);

            // Log a resulting message to the console so we know that it worked. 
            console.log(playerInfo.name + " attacked " + enemy.name +". " + enemy.name + " now has " + enemy.health + " health remaining.");   

            // Checking enemy health
            if (enemy.health <= 0) {
            window.alert (enemy.name + " has died!");

            // award player money for winning 
            playerInfo.money = playerInfo.money + 20;
            break;
            }
            else {
            window.alert (enemy.name + " still has " + enemy.health + " health left.");
            }
            
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);

            //Checking player health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            }
        
            else {
                window.alert (playerInfo.name + " still has " + playerInfo.health + " health left.");
            }

            //Log a resulting message to the conosle so we know that it worked. 
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");         
    }
};

var startGame = function () {

    // Resets player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // Alert players that they are starting the round 
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length -1) {

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
    if (playerInfo.health > 0) {
        window.alert ("Great job, you've survived Robot Gladiators! You now have a score of " + playerInfo.money + ".");
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

    var shopOptionPrompt = window.prompt ("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?  Please enter one: 1 for REFILL, 2 for UPGRADE, or 3 to LEAVE.");

    shopOptionPrompt = parseInt(shopOptionPrompt);
    
    // Use 'switch' to carry out action
    switch (shopOptionPrompt){
        case 1:
            playerInfo.refillHealth();
            break;
        
        case 2:
            playerInfo.upgradeAttack();
            break;
            
        case 3:
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

var getPlayerName = function(){
    var name = "";
    
    while (name === "" || name === null){
        name = prompt("What is your robot's name?");
    }
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function(){
        if (this.money >= 7){
            window.alert ("Refilling " + playerInfo.name + "'s health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 5;
            window.alert (playerInfo.name + "'s health is now " + playerInfo.health + ".");
        }
        else {
            window.alert (playerInfo.name + " does not have enough money!");
        }
        
    },
    upgradeAttack: function(){
        if (this.money >= 7){
            window.alert ("Upgrading " + playerInfo.name + "'s attack power by 6 for 7 dollars.");
            this.attack += 5;
            this.money -= 7;
            window.alert (playerInfo.name + "'s attack power is now " + playerInfo.attack +".");
        }
        else{        
            window.alert (playerInfo.name + " does not have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Battle Droid",
        attack: randomNumber(10, 14)
    },
    {
        name: "Droideka",
        attack: randomNumber(10, 14)
    },
    {
        name: "General Grevious",
        attack: randomNumber(10, 14)
    }
];
var skipPenalty = 5;

// Starts the GAME!
startGame ();

