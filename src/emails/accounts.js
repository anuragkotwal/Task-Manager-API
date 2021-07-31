const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (Toemail,name) => {
    sgMail.send({
        to: Toemail,
        from:'emailforwork.final@gmail.com',
        subject: 'Thanks for joining us!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app. Reply to the same email.`,
    }) 
}

const CancelEmail = (Toemail,name) => {
    sgMail.send({
        to: Toemail,
        from:'emailforwork.final@gmail.com',
        subject: 'GoodBye:(',
        text: `Thanks to be with us ${name}. I hope you have a grate day and hope to see you back sometime soon.`,
    })
}

module.exports = {
    sendWelcomeEmail,
    CancelEmail,
}