var qrcode = require('../lib/main'),
    url = 'https://baidu.com/';

qrcode.generate(url, { small: true }, function (qr) {
    console.log(qr);
});
