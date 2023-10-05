#!/usr/bin/node
const request = require('request');
const requestURL = process.argv[2];

request(requestURL, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    const completedTask = {};
    for (const task of data) {
      if (task.completed) {
        if (Object.prototype.hasOwnProperty.call(completedTask, task.userId)) {
          completedTask[task.userId]++;
        } else {
          completedTask[task.userId] = 1;
        }
      }
    }
    console.log(completedTask);
  }
});
