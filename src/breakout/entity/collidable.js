define("breakout/entity/collidable", [ "breakout/entity", "breakout/collision/manager", "breakout/system/helper" ], function (Entity, CollisionManager, Helper) {

    var Collider = function (x, y, w, h) {

        this.w = w;
        this.h = h;

        Entity.call(this, x, y);

        this.subscribers = {};
        this.guid = Helper.generateGuid();

        CollisionManager.register(this);
    };

    Collider.prototype             = Object.create(Entity.prototype);
    Collider.prototype.constructor = Collider;

    Collider.prototype.register = function (collider, callback) {

        if (!this.subscribers.hasOwnProperty(collider.guid)) {
            this.subscribers[collider.guid] = [];
        }

        this.subscribers[collider.guid].push(callback);
    };

    Collider.prototype.reposition = function (x, y, w, h) {

        this.x = x;
        this.y = y;

        if (w !== undefined) {
            this.w = w;
        }

        if (h !== undefined) {
            this.h = h;
        }
    }

    Collider.prototype.render = function (canvas, context) {

        // context.beginPath();
        // context.lineWidth = 2;
        // context.strokeStyle = "red";
        // context.rect(this.x, this.y, this.w, this.h);
        // context.stroke();
        // context.closePath();
    }

    Collider.prototype.onCollisionWith = function (collider, callback) {
    };

    return Collider;
});
