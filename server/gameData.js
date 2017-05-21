'use strict';

const express = require('express');
const router = express.Router();
const axios = require('axios');

//API key
const xmlStatsKey = require('../secret.js').xmlStats;

//Date
const today = new Date();

const monthOrDayToString = (num) => {
  let twoDigitDate = num.toString();
  if (twoDigitDate.length === 1) {
    return `0${twoDigitDate}`;
  }
  return twoDigitDate;
};

const createTeamId = (name) => {
  return name.toLowerCase()
    .split(' ')
    .join('-')
    .replace(/[.]/g, '');
};

const year = today.getFullYear();
const month = monthOrDayToString(today.getMonth() + 1);
const day = monthOrDayToString(today.getDate());
const xmlDate = `${year}${month}${day}`;

const config = {
  headers: { Authorization: xmlStatsKey }
};

//Get Game Schedule
router.get('/games', (req, res, next) => {
  const apiSchedule = `https://erikberg.com/events.json?date=${xmlDate}&sport=mlb`;
  const games = [];
  axios.get(apiSchedule, config)
    .then(sched => {
      sched.data.event.forEach(game => {
        const newGame = {};
        newGame.homeName = game.home_team.last_name;
        newGame.homeId = createTeamId(game.home_team.full_name);
        newGame.awayName = game.away_team.last_name;
        newGame.awayId = createTeamId(game.away_team.full_name);
        newGame.time = game.start_date_time;
        games.push(newGame);
      });
    })
    .then(() => res.send(games))
    .catch(err => console.error(err));
});

//Get Rosters
router.get('/team/:teamId', (req, res, next) => {
  const apiRoster = `https://erikberg.com/mlb/roster/${req.params.teamId}.json`;
  axios.get(apiRoster, config)
    .then(roster => res.json(roster.data.players))
    .catch(err => console.error(err));
});

module.exports = {router};
