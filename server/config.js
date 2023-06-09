const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: process.env.MAIL_PORT,
    //secure: false,
    //logger: true,
    debug:true,
    //requireTLS: true,
    //secureConnection: false,
    auth: {
        user: process.env.email,
        pass: process.env.password
    },
   // tls:{
        //ciphers: 'SSLv3',
        //rejectUnauthorized: false
   // }
});

module.exports = transporter;