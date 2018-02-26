module.exports = (texts) => {

    if(texts instanceof Array) {
        const textsToSend = texts.map((text) => {
            const personWhosImproving = text.User.firstName;
            const personsGoal = text.goal;

            return {
                message: text.Friends.map((friend) => {
                    const friendFirstName = friend.firstName;

                    return {
                        messageToFriend: `Hey ${friend.firstName}, did ${personWhosImproving} achieve their goal of "${personsGoal}"?`,
                        phoneNumber: friend.phoneNumber
                    }
                })
            }

        });

        textsToSend.forEach((text) => {
            console.log(text)
        })
    }

}