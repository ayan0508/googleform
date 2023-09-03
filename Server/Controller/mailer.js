const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure:false,
    auth: {
        user: 'ayanofficial0508@gmail.com',
        pass: 'thdlxuagestlbsiz'
    }
});

module.exports = transporter;
