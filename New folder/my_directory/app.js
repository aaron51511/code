const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configure Nodemailer to send emails
const transporter = nodemailer.createTransport({
    service: 'Outlook', 
    auth: {
        user: 'Aaron.Bortunk@lefferts.com',
        pass: 'Aaron.Bortunk@lefferts.com',
    },
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
