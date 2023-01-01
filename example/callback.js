var qrcode = require('../lib/main');
var popup = require('node-popup');
qrcode.generate('someone sets it up, 于斯人也', function (str) { 
    //popup.alert(str);
    console.log(str);
});
