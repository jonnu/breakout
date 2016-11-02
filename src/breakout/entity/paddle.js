define("breakout/entity/paddle", [ "breakout/entity" ], function (Entity) {

    "use strict";

    var Paddle = function (x, y, w, h, collider) {

        this.w = w;
        this.h = h;

        Entity.call(this, x, y);

        this.collider = collider;
        collider.entity = this;
        collider.reposition(x, y, w, h);

        document.addEventListener("keydown", this.keydown, false);
        document.addEventListener("keyup", this.keyup, false);
    };

    Paddle.prototype             = Object.create(Entity.prototype);
    Paddle.prototype.constructor = Paddle;

    Paddle.prototype.render = function (canvas, context) {
        context.beginPath();
        context.rect(this.x, this.y, this.w, this.h);
        context.fillStyle = "#000000";
        context.fill();
        context.closePath();

        this.collider.render(canvas, context);
    };

    Paddle.prototype.move = function (canvas, context) {

        if (inputs.hasOwnProperty(37) && inputs[37] && this.x > 0) {
            this.x = Math.max(this.x - 5, 0);
        }

        if (inputs.hasOwnProperty(39) && inputs[39] && this.x < canvas.width - this.w) {
            this.x = Math.min(this.x + 5, canvas.width - this.w);
        }

        this.collider.reposition(this.x, this.y);
    };

    var inputs = {
    };

    Paddle.prototype.keyup = function (event) {
        inputs[event.keyCode] = false;
    }

    Paddle.prototype.keydown = function (event) {
        inputs[event.keyCode] = true;
    }

    return Paddle;
});
