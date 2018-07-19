# LIRI-Node-App

##**LIRI-Bot**

LIRI-Bot is a command line node app that takes in parameters and gives you back data. This app is similar to iPhone's SIRI. The difference is that SIRI is a Speech Interpretation and Recognition Interface, and LIRI is a Language Interpretation and Recognition Interface.

###Technologies Used:
*Node.js 

*JavaScript. 

###LIRI uses the following commands:

* `my-tweets`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`


### Node npm packages:

[Twitter] (https://www.npmjs.com/package/twitter): An asynchronous client library for the Twitter REST and Streaming API's.

[Node-Spotify-API] (https://www.npmjs.com/package/node-spotify-api): A simple to use API library for the Spotify REST API.

[Request] (https://www.npmjs.com/package/request): Designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

[DotEnv] (https://www.npmjs.com/package/dotenv): A zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

###How to Use LIRI-Bot:
Step 1: Use command: node liri.js my-tweets
*This will show your last 20 tweets and when they were created at in your terminal/bash window.

Step 2: Use command: node liri.js spotify-this-song '<song name here>'
 *This will show the following information about the song in your terminal/bash window:

-Artist(s)
-The song's name
-A preview link of the song from Spotify
-The album that the song is from

**If no song is provided then your program will default to "The Sign" by Ace of Base.

Step 3: Use command: node liri.js movie-this '<movie name here>'
 *This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.


**If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

Step 4: Use command: node liri.js do-what-it-says
* LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
 
 
 




