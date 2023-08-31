const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const path = require('path');

app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/client/build'))

app.post('/contact/sendmessage/to/me', async function(req, res) {
    console.log('POST /contact/sendmessage/to/me', req.body)
    
    const transporter = nodemailer.createTransport({
        host: process.env.MAILER_HOST,
        port: process.env.MAILER_PORT,
        secure: false,
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASS
        }
    });
    
    transporter.verify(function(err, success) {
        if (err) {
            console.log(err);
            console.error(err)
        } else {
            console.log(success)
            console.log("Server is ready to take our messages");
        }
    });

    let message = {
        from: req.body.email,
        to: process.env.MAIL_RECIPIENT,
        subject: req.body.name + ' -- ' + new Date(),
        text: req.body.message
    };

    transporter.sendMail(message, function(err, info) {
        if (err) {
            console.log('Error occurred. ' + err.message);
            console.error(err)
            res.status(500).json({type:'failure', data: 'error sending message'});
        } else {
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.status(301).json({type:'success', data:'done'})
        }
    });
})

app.get('/downloads/resume', function(req, res) {
    const filePath = path.join(__dirname + '/static/fx wood--resume--20 june 2019.pdf')
    res.download(filePath, function(err) {
        if (err) {
            console.error(err)
        } else {
            console.log('yay', filePath)
        }
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build/index.html'))
})

port = process.env.PORT || 3001
app.listen(port, () => console.log(`portfolio is listening on port ${port}`));
