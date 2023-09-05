const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure:false,
    auth: {
        user: 'ayanofficial0508@gmail.com',
        pass: process.env.MAIL_PASSWORD,
    }
});

module.exports = transporter;
