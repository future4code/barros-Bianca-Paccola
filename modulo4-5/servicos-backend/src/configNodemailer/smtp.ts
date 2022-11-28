import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    host: 'smtp.ethereal.email',
    port: 587,
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
}