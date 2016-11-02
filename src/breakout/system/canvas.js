define("breakout/system/canvas", [], function () {

    "use strict";

    var Canvas = function (id) {
        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext("2d");
    };

    Canvas.prototype.setCanvasSize = function (width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    };

    return Canvas;
});
