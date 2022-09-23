const axios = require("axios");
const template = require("../mail/templates/template");
const Firestore = require("@google-cloud/firestore");
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

// api - https://elasticemail.com/developers/api-documentation/rest-api#operation/emailsPost
const ELASTIC_EMAIL_URL = 'https://api.elasticemail.com/v4/emails?apikey=***';
// password: *** for ***

const pathname = '';

const domain = process.env.LOCAL === 'yes' ? 'http://localhost:3000' : 'https://cardsicle.com';

const SITE_URL = domain + pathname;

// Use your project ID here
const PROJECTID = 'cardsicles-com';

initializeApp({
    credential: applicationDefault(),
});

// TODO good template
const defaultElasticEmailBody = {
    Recipients: [
        {

            // changed while sending
            Email: "",
        }
    ],
    Content: {

        // TODO try to change it to different emails
        From: "info@cardsicle.com",
        FromName: "Cardsicle",
        fromName: "Cardsicle",
        Subject: "The best email in the world",
        Body: [
            {
                ContentType: "HTML",

                // changed while sending
                Content: "",

                Charset: "utf-8"
            }
        ]
    }
}

const sendEmail = async ({email}) => {
    defaultElasticEmailBody.Recipients[0].Email = email;
    return await axios.post(ELASTIC_EMAIL_URL, defaultElasticEmailBody);
}

module.exports.anError = (res) => {
    return res.status(400).send({'status': 'error'});
}

module.exports.sendEmail = sendEmail;

module.exports.sendStartRegistration = async ({email, registration_code}) => {
    defaultElasticEmailBody.Content.Body[0].Content = template.get({type: 'start-registration', site_url: SITE_URL, data: registration_code});
    defaultElasticEmailBody.Content.Subject = 'Registration to cardsicles.com link';
    return await sendEmail({email})
}

module.exports.sendForgotPassword = async ({email, uid}) => {
    defaultElasticEmailBody.Content.Body[0].Content = template.get({type: 'forgot-password', site_url: SITE_URL, data: uid});
    defaultElasticEmailBody.Content.Subject = 'Password reset on cardsicles.com';
    return await sendEmail({email})
}

module.exports.defaultAuth = getAuth();

// noinspection JSValidateTypes
module.exports.firestore = new Firestore({
    projectId: PROJECTID,
    timestampsInSnapshots: true
    // NOTE: Don't hardcode your project credentials here.
    // If you have to, export the following to your shell:
    //   GOOGLE_APPLICATION_CREDENTIALS=<path>
    // keyFilename: '/cred/cloud-functions-firestore-000000000000.json',
});

module.exports.aStatus = (res, status) => res.status(status);

module.exports.log = (obj) => {
    let key = Object.keys(obj)[0];
    console.log(key + ' = ', obj[key]);
}

module.exports.SITE_URL = SITE_URL;
