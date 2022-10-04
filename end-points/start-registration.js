const {anError, firestore, aStatus, sendStartRegistration, defaultAuth} = require("../common/common");

const getCurrentTimestamp = () => new Date().getTime();
const _1_minute = 60 * 1000;
const _5_minutes = 5 * _1_minute;

module.exports.registrationStart = async ({req, res}) => {
    let email = req.body['email'];
    if (!email) {
        return anError(res);
    }
    try {
        let userRecord = await defaultAuth.getUserByEmail(email);
        if (userRecord && userRecord.providerData && userRecord.providerData[0] && userRecord.uid) {
            return aStatus(res, 400).send({'error': 'Already registered!'});
        }
    } catch {

    }
    let docRef = firestore.collection('emailsToVerify').doc(email);
    let doc = await docRef.get();
    if (doc) {
        let data = doc.data();
        if (data) {
            let status = data['status'];
            if (!status) {
                return anError(res);
            }
            if (status === 'unverified') {
                let timestamp = data['timestamp'];
                if (!timestamp) {
                    return anError(res);
                }
                if (getCurrentTimestamp() - timestamp < _5_minutes) {
                    return aStatus(res, 400).send({'error': 'Already unverified!'});
                }

            }
        }
    }
    await docRef.set({status: 'unverified', timestamp: getCurrentTimestamp()});


    let unregisteredUserData = firestore.collection('unregisteredUserData');
    let registration_code;

    let attempts = 0;

    while (true) {
        registration_code = Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9);
        if (!(await unregisteredUserData.doc(registration_code).get()).data()) {
            break;
        }
        attempts++;
        if (attempts > 10) {
            return anError(res);
        }
    }

    // TODO continue ....

    doc = await unregisteredUserData.doc(registration_code).set(req.body);
    await sendStartRegistration({email, registration_code});
    return aStatus(res, 200).send({'status': 'success'});
}
