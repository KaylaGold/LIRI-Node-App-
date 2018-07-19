# LIRI-Node-App

#LIRI-Bot

LIRI-Bot is a command line node app that takes in parameters and gives you back data. This app is similar to iPhone's SIRI. The difference is that SIRI is a Speech Interpretation and Recognition Interface, and LIRI is a Language Interpretation and Recognition Interface.

Technologies Used:

Node.js

JavaScript.

LIRI uses the following commands:

my-tweets

spotify-this-song

movie-this

do-what-it-says

Node npm packages:

Twitter: An asynchronous client library for the Twitter REST and Streaming API's.

Node-Spotify-API: A simple to use API library for the Spotify REST API.

Request: Designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

DotEnv: A zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

How to Use LIRI-Bot:

Step 1: Use command: node liri.js my-tweets

*This will show your last 20 tweets and when they were created at in your terminal/bash window.

Step 2: Use command: node liri.js spotify-this-song '<song name here>'

*This will show the following information about the song in your terminal/bash window:
