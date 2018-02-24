const cron = require('node-cron');
const Goals = require('../models').Goal;
const moment = require('moment');
const dateToday = moment().format("MM-DD-YYYY");

function findTodaysGoalDeadlines() {
    Goals.findAll({
        where: {
            deadline: dateToday
        }
    })
    .then((todaysDeadlines) => {
        console.log(todaysDeadlines)

        const todaysGoalsWithFriends = todaysDeadlines.filter((deadline) => {
            if(deadline.Friends) {
                return deadline
            }
        });

        console.log(todaysGoalsWithFriends);
    })
}


cron.schedule("*/5 * * * * *", function() {
    findTodaysGoalDeadlines();
});