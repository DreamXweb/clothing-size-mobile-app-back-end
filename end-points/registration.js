const {firestore, defaultAuth, anError, aStatus} = require("../common/common");

module.exports.registration = async ({req, res}) => {
    let registration_code = req.body['registration_code'];
    if (!registration_code) {
        return anError(res);
    }
    let docRef = firestore.collection('unregisteredUserData').doc(registration_code);
    let doc = await docRef.get();
    if (!doc) {
        return anError(res);
    }
    let data = doc.data();
    if (!data) {
        return anError(res);
    }
    console.log('data = ', data);
    let userRecord;
    try {
        userRecord = await defaultAuth.createUser({
            email: data.email,
            password: data.password,
            displayName: data.firstName,
            disabled: false,
        });
    } catch (error) {
        console.log('error = ', error);
        return aStatus(res, 400).send({error: error.errorInfo});
    }
    console.log('Successfully created new user:', userRecord.uid);
    await docRef.delete();
    await firestore.collection('emailsToVerify').doc(data.email).delete();
    delete data.password;
    await firestore.collection('userData').doc(userRecord.uid).set(data);
    return aStatus(res, 200).send({success: 'success'});
}
