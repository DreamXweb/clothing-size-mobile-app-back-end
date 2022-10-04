const {defaultAuth, anError, aStatus, firestore} = require("../common/common");

module.exports.changePassword = async ({req, res}) => {
    // TODO write separate function get userRecord from email

    let email = req.body['email'];
    if (!email) {
        return anError(res);
    }

    let userRecord = await defaultAuth.getUserByEmail(email);

    if (!userRecord || !userRecord.providerData || !userRecord.providerData[0] || !userRecord.uid) {
        return aStatus(res, 400).send({'error': 'not-registered'});
    }

    if (userRecord.providerData[0].providerId !== 'password') {
        return aStatus(res, 400).send({'error': 'google'});
    }

    let uid = userRecord.uid;

    let docRef = firestore.collection('userData').doc(uid);

    let doc = await docRef.get();

    if (!doc) {
        return aStatus(res, 400).send({'error': 'error no doc'});
    }

    let data = doc.data();

    if (!data) {
        return aStatus(res, 400).send({'error': 'error no data'});
    }

    let newPassword = data['newPassword'];

    if (!newPassword) {
        return aStatus(res, 400).send({'error': 'error no new password'});
    }

    await defaultAuth.updateUser(uid, {password: newPassword});

    delete data['newPassword'];
    await docRef.set(data);

    return aStatus(res, 200).send({success: 'success'});
}
