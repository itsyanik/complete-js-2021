# How to Plan a Web App

In the real world it is very common to see the planning in separate steps. It usually goes like this:

1. User stories

- Description of the application functionallity from the user's perspective.
- High Level Overview of the whole application
- There is a very common format to write user stories that goes like this: As a **[type of user]**, I want to **[an action]** so that **[a benefit]**.

2. Features

- Everything that will needed to be implemented so that the user story works as intended

3. Flowchart

- WHAT we are gonna build

4. Architecture

- How the program should behave according to the features
- It is what holds all the project together

This is just a high level overview. After all these steps are done, which are the planning steps. We can move on to the development step.

## User Stories

1. As a user I want to log my running workouts with location, distance, time, pace and steps/minute, so that I can keep a log of all my running.

2. As a user I want to log my cycling workouts with location, distance, time, and elevation gain, so that I can keep a log of all my cycling.

3. As a user I want to see all my workouts at glance so that I can keep track of my progress over time.

4. As a user I want to see all my workouts on a map, so that I can check where I workout the most.

5. As a user I want to see all my workouts when I leave the app and come back later so that I can keep using the app over time.

## Features

1. Map where user can click and add a new workout (best way to get location coordinates)

2. Geolocation to display a map at current location (more user friendly)

3. Form to input data for running

4. Form to input data for cycling

5. Display all workouts in a list

6. Display workouts on the map

7. Store workout data in the browser using Local Storage API

8. On page load, read the saved data from Local Storage API and display it.
