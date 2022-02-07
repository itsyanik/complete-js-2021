// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, 
the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print 
"... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' 
and logs a string like the above to the console.

Use the problem-solving framework: 
Understand the problem and 
break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
"use strict";

const weatherForecast = (temps) => {
  if (!temps.length) return "No weather report.";

  let weatherString = "";
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    const currentTemp = temps[i];

    weatherString = weatherString + `...${currentTemp}ºC in ${i + 1} days\n`;
  }

  return weatherString;
};

console.log(weatherForecast([17, 21, 23]));
console.log(weatherForecast([12, 5, -5, 0, 4]));
