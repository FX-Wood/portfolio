const express = require('express');
const app = express();
const nodemailer = require('nodemailer')



app.use(express.static(__dirname + '/client/build'))

app.post('/contact/sendmessage/to/me', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAILER_HOST,
        port: process.env.MAILER_PORT,
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASS
        }
    });
    console.log(req.body)
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
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
})

app.get('*', (req, res) => {
    res.send(__dirname + '/client/build/index.html')
})

port = process.env.PORT || 3001
app.listen(port, () => console.log(`portfolio is listening on port ${port}`));