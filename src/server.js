const express = require('express')
const bodyParser = require('body-parser')
const mailgun = require('mailgun-js')
const path = require('path')

var api_key = 'key-90cce8be63f3edf76c30edc72eeeee4e';
var domain = 'sandbox4b3f7a5e66d043008f3845d5956bcd0a.mailgun.org';
const mail = mailgun({ apiKey: api_key, domain: domain });


const application = express();
application.use(bodyParser.urlencoded({ extended: true }));

application.use(express.static(path.join(__dirname, 'public')));
application.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});


application.post('/subscribe', (req, res) => {
    const Email = req.body.Email
    console.log(Email)
    const to_say = {
        from: 'Gurkirat Singh <gurkirat4784.be22@chitkara.edu.in>',
        to: Email,
        subject: "Welcome",
        text: "Welcome, Thanks for subscribing you have been successfull in subscribing."
    };

    mail.messages().send(to_say, (error,body) => {

        if(error) {
            console.log(error);
            return res.status(500).send('Their is an error');
        }

        console.log(body);
        res.send(__dirname + '/index.html');
    });

});

application.listen(3001, () => {
    console.log("Server is running at port 3001")
})