const nodemailer = require('nodemailer');

const getMails =(req,res) => {
//Code to get all the mails sent
}

const sendMail = async (req, res) => {
    const { body } = req;
    // var temp = JSON.parse(body.contacts);
    // console.log(temp.contacts[1]);
    // console.log(body);

    console.log(body.contacts.split(','));
    
    
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: body.iMail,
            pass: body.pMail
        }
    });
// console.log(body.iMail);
    

var mailOptions = {
    from: '"Testing Aj" <no-reply@bulk-mailer.com>',
    to: "xccage1@gmail.com",
    subject: 'Bulk-Mailer',
    text: 'Hello there! xD'
}

// console.log(JSON.parse(body.contacts)[1]);
var temp = body.contacts.split(',');
var size = temp.length;
for(let i=0; i<size; i++){
    mailOptions.to = temp[i]
    transporter.sendMail(mailOptions, (mailErr, info)=>{
        // console.log(mailErr);
        if(mailErr) {
    // if(mailErr.responseCode === 535)
            res.status(500).json('Server Error!');
        }
        else if(i+1===size) {
            res.status(200).json('Email Scheduled for all the contacts!');
        }
    });
}
}

const updateMail = (req,res) => {
//Code to update a mail if its not yet sent
}

const deleteMail = (req,res) => {
//Code to delete a mail
}

module.exports = {
    getMails,
    sendMail,
    updateMail,
    deleteMail
}