define("breakout/system/helper", [], function () {

    "use strict";

    function generateGuidOctet () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    return {
        generateGuid: function () {
            return generateGuidOctet() + generateGuidOctet() + '-' + generateGuidOctet() + '-' + generateGuidOctet() + '-' + generateGuidOctet() + '-' + generateGuidOctet() + generateGuidOctet() + generateGuidOctet();
        }
    };

});
