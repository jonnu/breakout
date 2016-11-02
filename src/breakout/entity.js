define("breakout/entity", [ "breakout/collision/manager" ], function (CollisionManager) {

    "use strict";

    var Entity = function (x, y) {
        this.x = x;
        this.y = y;
    };

    return Entity;
});
