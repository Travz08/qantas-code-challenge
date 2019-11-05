# Qantas Code Challenge

This project is a front-end code challenge for Qantas. The challenge was to build a mobile responsive app which will load the list of airports from the given API. A live demo can be seen [here](https://qantas-code-challenge.traviskelekolio1.now.sh).

or to run locally follow the steps below.

## Running the project

Clone or Download the project.

In order to run you will need to have Node >= 8.10 and npm >= 5.6 on your machine.

To view the project within your browser you will need to navigate into the project directory and run:

### `npm start`

This runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Challenges

A couple challenges arose whilst attempting this challenge. In the challenge description it mentioned the airports to be displayed were those that Qantas *Operates* from. Through the given data in the [API](https://api.qantas.com/flight/refData/airport) I was unable to determine which airports followed true to that statement. Assumptions were made where I displayed only those airports that were international along with all within Australia.

Another problem I came across was the latitude and longitude values of some of the airports within the API were incorrect. In turn creating the problem where Google Maps was unable to pinpoint the correct location.