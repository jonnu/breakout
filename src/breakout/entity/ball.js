define("breakout/entity/ball", [ "breakout/entity" ], function (Entity) {

    var Ball = function (x, y, size, collider) {

        // this.x = x;
        // this.y = y;
        this.radius = size;
        this.dx = 2;
        this.dy = -2;

        Entity.call(this, x, y);

        this.collider = collider;
        this.collider.reposition(x, y, this.radius * 2, this.radius * 2);

        //collider.entity = this;
        console.log("Ball created", this);
    };

    Ball.prototype             = Object.create(Entity.prototype);
    Ball.prototype.constructor = Ball;

    Ball.prototype.render = function (canvas, context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();

        this.collider.render(canvas, context);
    };

    Ball.prototype.move = function (canvas, context) {

        if (this.y + this.dy < this.radius || this.y + this.dy > canvas.height - this.radius) {
            this.dy = -this.dy;
        }

        if (this.x + this.dx < this.radius || this.x + this.dx > canvas.width - this.radius) {
            this.dx = -this.dx;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.collider.reposition(this.x - this.radius, this.y - this.radius);
    };

    return Ball;
});
