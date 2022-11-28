const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('../configNodemailer/smtp');

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
});

async function sendNodemailer () {
    const mailSend = await transporter.sendMail({
        from: "Bianca Paccola <verdie.fahey47@ethereal.email",
        to: ["projetos_jbl-aaaaiax6fosqmlb2s7ipkez3d4@labenualunos.slack.com"],
        subject: "[BARROS - Bianca Paccola]",
        text: "Coloquei este email para ser enviado quando bate no endpoint /email"
    })
    console.log(mailSend);
    return mailSend;
}

export default sendNodemailer;