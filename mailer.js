const nodemailer = require('nodemailer');
const fs = require('fs');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'himti@paramadina.ac.id',
        pass: 'informatika123$',
    }
});

let tes = undefined
let attach = []

attach.push({
    filename: 'inisertif.pdf',
    content: fs.readFileSync('Esertif.pdf')
})

var mailOptions = {
    from: 'PANITIA ASIG 14 <himti@paramadina.ac.id>',
    to: 'ghifari.ti19@gmail.com',
    subject: 'E-Certificate Talkshow ASIG 14',
    text: 'test hello',
    attachments : attach
};


transporter.sendMail(mailOptions, (error,info)=>{
    if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
})