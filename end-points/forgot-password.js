const {defaultAuth, anError, aStatus, sendForgotPassword} = require("../common/common");


module.exports.forgotPassword = async ({req, res}) => {

    let email = req.body['email'];
    if (!email) {
        return anError(res);
    }

    try {
        let userRecord = await defaultAuth.getUserByEmail(email);

        if (!userRecord || !userRecord.providerData || !userRecord.providerData[0] || !userRecord.uid) {
            return aStatus(res, 400).send({'error': 'not-registered'});
        }

        if (userRecord.providerData[0].providerId !== 'password') {
            return aStatus(res, 400).send({'error': 'google'});
        }

        // generatedPassword
        let uid = userRecord.uid;

        await defaultAuth.updateUser(uid, {password: uid});

        // TODO only in five minutes // TODO store data ...
        await sendForgotPassword({email, uid});

        return aStatus(res, 200).send({success: 'success'});
    } catch {
        return aStatus(res, 400).send({error: 'not-registered'});
    }

}
