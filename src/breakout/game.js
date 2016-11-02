define("breakout/game", [ "breakout/container", "breakout/entity/ball", "breakout/entity/paddle", "breakout/entity/collidable", "breakout/collision/manager" ], function (EntityManager, Ball, Paddle, Collider, CollisionManager) {

    "use strict";

    var canvas = document.getElementById("breakout");
    var context = canvas.getContext("2d");

    canvas.width = document.body.clientWidth - 50;
    canvas.height = document.body.clientHeight - 50;

    var manager = new EntityManager();
    var ball = new Ball(canvas.width / 2, canvas.height - 30, 6, new Collider());
    var paddle = new Paddle(canvas.width / 2, canvas.height - 20, 100, 10, new Collider());

    // ball.collider.register(paddle.collider, function (paddle) {

    //     // invert.
    //     console.log("two colliders (ball and paddle) are colliding!", this, arguments);
    //     this.dy = -this.dy;

    // });
    //
    //manager.withEntity("ball").onCollisionWith("paddle", doSomething);

    ball.onCollisionWith(paddle, function () {
        console.log("Collision", this, arguments);
    });

    // ball.onCollisionWith(paddle, function (Paddle) {
    //     console.log("I collided with Paddle:", Paddle);
    // });

    manager.register("ball", ball);
    manager.register("paddle", paddle);

    var Game = function () {
    };

    Game.prototype.render = function () {

        // flush
        context.clearRect(0, 0, canvas.width, canvas.height);

        // draw all entities
        for (var element in manager.elements) {
            manager.elements[element].render && manager.elements[element].render.call(manager.elements[element], canvas, context);
        }

        // move all entities
        for (var element in manager.elements) {
            manager.elements[element].move && manager.elements[element].move.call(manager.elements[element], canvas, context);
        }

        // check for collisions
        CollisionManager.check();
    };

    Game.prototype.init = function () {
        var game = new Game();
        setInterval(game.render, 10);
        canvas.focus();
        return game;
    };

    return Game;
});
