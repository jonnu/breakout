define("breakout/entity/brick", [ "breakout/entity" ], function (Entity) {

    "use strict";

    var Brick = function (x, y, w, h, collider) {

        this.w = w;
        this.h = h;

        Entity.call(this, x, y);

        this.collider = collider;
        collider.entity = this;
        collider.reposition(x, y, w, h);
    };

    Brick.prototype             = Object.create(Entity.prototype);
    Brick.prototype.constructor = Brick;

    Brick.prototype.render = function (canvas, context) {
        context.beginPath();
        context.rect(this.x, this.y, this.w, this.h);
        context.fillStyle = "#000000";
        context.fill();
        context.closePath();

        this.collider.render(canvas, context);
    };

    return Brick;
});
