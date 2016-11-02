define("breakout/container", function () {

    "use strict";

    var Container = function () {
        this.elements = {};
    };

    Container.prototype.items = function () {
        return this.elements;
    };

    Container.prototype.register = function (name, value) {
        this.elements[name] = value;
    };

    Container.prototype.unregister = function (name) {
        delete this.elements[name];
    };

    return Container;
});
