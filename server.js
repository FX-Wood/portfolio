const express = require('express');
const app = express();
const nodemailer = require('nodemailer')
console.log(process.env.MAILER_HOST)

const transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: false,
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
    }
});

app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/client/build'))

app.post('/contact/sendmessage/to/me', (req, res) => {
    console.log('POST /contact/sendmessage/to/me', req.body)
    let message = {
        from: req.body.email,
        to: process.env.MAIL_RECIPIENT,
        subject: req.body.name + ' -- ' + new Date(),
        text: req.body,
        html: null
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
        } else {
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            
        }
    });
    res.status(301).json({data: 'done'})
})

app.get('*', (req, res) => {
    res.send(__dirname + '/client/build/index.html')
})

port = process.env.PORT || 3001
app.listen(port, () => console.log(`portfolio is listening on port ${port}`));