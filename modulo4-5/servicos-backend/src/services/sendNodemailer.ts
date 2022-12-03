import dotenv from 'dotenv';

dotenv.config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
});

async function sendNodemailer () {
    const mailSend = await transporter.sendMail({
        from: process.env.NODEMAILER_USER,
        to: "projetos_jbl-aaaaiax6fosqmlb2s7ipkez3d4@labenualunos.slack.com",
        subject: "[BARROS - Bianca Paccola]",
        text: "Coloquei este email para ser enviado quando bate no endpoint /email"
    })
    console.log(mailSend);
    return mailSend;
}

export default sendNodemailer;