var nodemailer = require('nodemailer');

const sendEmail = function (body, success, fail) {
    var transporter = nodemailer.createTransport({
        service: 'qq',
        auth: {
            user: '1772591173@qq.com',
            pass: 'vnqddpydogiibdad' //授权码,通过QQ获取
        }
    });
    var mailOptions = {
        from: '1772591173@qq.com', // 发送者
        to: body.receiptEmail, // 接受者,可以同时发送多个,以逗号隔开
        subject: body.subject, // 标题
        //text: 'Hello world', // 文本
        html: body.content
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            fail && fail(err);
            return;
        }
        success && success(info);
    });
}

module.exports = {
    sendEmail
};