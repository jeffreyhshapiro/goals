require('dotenv').config();
const twilio = require('twilio');
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

module.exports = (texts) => {

    if(texts instanceof Array) {
        const textsToSend = texts.map((text) => {
            const personWhosImproving = text.User.firstName;
            const personsGoal = text.goal;

            return text.Friends.map((friend) => {
                    const friendFirstName = friend.firstName;

                    return {
                        messageToFriend: `Hey ${friend.firstName}, did ${personWhosImproving} achieve their goal of "${personsGoal}"?`,
                        phoneNumber: friend.phoneNumber
                    }
                })

        });

        textsToSend.forEach((text) => {

            console.log(text)

            return

            client.messages.create({
                body: `+1${text.messageToFriend}`,
                to: `+1${text.phoneNumber}`,  // Text this number
                from: '+17324798842' // From a valid Twilio number
            })
            .then((message) => console.log(message.sid))
            .catch((err) => console.log(err))

        })
    }

}