// Enemies our player must avoid
var Enemy = function(x, y, sprite, enm_speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.enm_speed = enm_speed;
    this.sprite = sprite;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.enm_speed * dt;
    
    if (this.x > 510) {
        this.x = -50;
        this.enm_speed = 150 + Math.floor(Math.random()*200);
    };
    if (player.x < this.x + 81 &&
        player.x + 81 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.x = 202;
        player.y = 405;
    };
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var Player = function(x, y, sprite) {
    this.px = 0;
    this.py = 0;
}
Player.prototype.update = function() {
    this.x = this.x + this.px;
    this.y = this.y + this.py;
    if (this.x < -16) {
        this.x = -16;
    }
    if (this.x > 420) {
        this.x = 420;
    }
    if (this.y > 356) {
        this.y = 356;
    }
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(key) {
    this.px = 0;
    this.py = 0;
    switch(key) {
        case 'right' :
            this.px = 1;
        case 'left' :
            this.px = -1;
        case 'up' :
            this.py = -1;
        case 'down' :
            this.py = 1;
    }
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var allEnemies = [
    new Enemy(-108, 10, 'images/enemy-bug.png', 100),
    new Enemy(-108, 92, 'images/enemy-bug.png', 80),
    new Enemy(-108, 174, 'images/enemy-bug.png', 110),
    new Enemy(-108, 10, 'images/enemy-bug.png', 200),
    new Enemy(-108, 92, 'images/enemy-bug.png', 90),
    new Enemy(-108, 174, 'images/enemy-bug.png', 150),
    new Enemy(-108, 10, 'images/enemy-bug.png', 120),
    new Enemy(-108, 92, 'images/enemy-bug.png', 120),
    new Enemy(-108, 174, 'images/enemy-bug.png', 120),
];
// Now instantiate your objects.
// Place all enemy objectsy in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(129, 185, 'images/char-boy.png');
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});