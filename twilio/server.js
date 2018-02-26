const cron = require('node-cron');
const Goals = require('../models').Goal;
const Friends = require('../models').Friend;
const Users = require('../models').User;
const sendText = require('./sendText.js');
const moment = require('moment');
const dateToday = moment().format("MM-DD-YYYY");

function findTodaysGoalDeadlines() {

    Goals.findAll({
        where: {
            deadline: dateToday
        },

        include: [Friends, Users]
    })
    .then((todaysDeadlines) => {
        console.log(todaysDeadlines.length)

        return todaysGoalsWithFriends = todaysDeadlines.filter((deadline) => {
            if(deadline.Friends.length > 0) {
                return deadline
            }
        });

    })
    .then((todaysGoalsForTexts) => {
        sendText(todaysGoalsForTexts);
    })
}


cron.schedule("*/10 * * * * *", function() {
    findTodaysGoalDeadlines();
});