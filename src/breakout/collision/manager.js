define("breakout/collision/manager", [], function () {

    "use strict";

    var collidable = {};

    var CollisionManager = function () {};
    //function () {
    //};

    // CollisionManager.register = function (collider) {
    //     colliders[collider.guid] = collider;
    // }

    CollisionManager.register = function (entity) {
        collidable[entity.guid] = entity;
    }

    CollisionManager.unregister = function (entity) {
        delete collidable[entity.guid];
    };

    CollisionManager.check = function () {

        var collider, subscriber;
        for (var c_guid in collidable) {

            collider = collidable[c_guid];

            for (var s_guid in collider.subscribers) {

                subscriber = colliders[s_guid];

                // check if one bounding box is to the LEFT of the other.
                if (collider.x > subscriber.x + subscriber.w || subscriber.x > collider.x + collider.w) {
                    continue;
                }

                // check if one bounding box is ABOVE the other.
                if (collider.y + collider.h < subscriber.y || subscriber.y + subscriber.h < collider.y) {
                    continue;
                }

                // there seems to be a collision between these two colliders. trigger callbacks
                for (var j = 0; j < collider.subscribers[s_guid].length; j++) {
                    collider.subscribers[s_guid][j].call(collider.entity, subscriber.entity);
                }
            }
        }
    };

    return CollisionManager;
});
