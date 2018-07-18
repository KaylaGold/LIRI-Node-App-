// Code to read and set any environment variables with the dotenv package
require("dotenv").config();



// Request npm package
let Twitter = require('twitter');
let Spotify = require('node-spotify-api');
let request = require('request');
let keys = require('./keys.js');
let fs = require("fs");

// Code required to import the keys.js file and store it in a variable

let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);
let omdb = keys.omdb.api_key;

// Arguments 
// First Argument: commands eg 'my-tweets', 'spotify-this-song'etc
let command = process.argv[2]; 
// Second Argument: when user gives us input next to the command in the command line eg node liri.js spotify-this-song "bendita tu luz"
let input = process.argv[3]; 


// Conditional statements for commands. This is app functionality due to user input
switch (command) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        // If there is an input
        if (input) {
            spotifyThisSong(input);
        } else {
            // if there is no input
            spotifyThisSong("The Sign");
        }
        break;

    case "movie-this":
        if (input) {
            movieThis(input);
        } else {
            movieThis("Mr. Nobody");
        }
        break;

    case "do-what-it-says":
        if (input) {
            doWhatItSays(input);
        } else {
            doWhatItSays("I Want it That Way");
        }
        break;
    default:
        console.log('Invalid command. Please try again Lady!');
};




// Functions for 3 main functions of the app
function myTweets() {

    let screenName = { screen_name: '@LagLiri' };
    client.get('statuses/user_timeline', screenName, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
            for (let i = 0; i < tweets.length; i++) {
                let date = tweets[i].created_at;
                console.log('@LagLiri:' + tweets[i].text + "Created at:" + date.substring(0, 19));
                console.log('--------------------');

                // Add text to log.txt file
                fs.appendFile('log.txt', "@LagLiri:" + tweets[i].text + "Created at:" + date.substring(0.19));
                fs.appendFile('log.txt', "------------");
            }

        } else {
            console.log('Error occurred');

        }
    });

};

// Command #2 display the artist, song name, preview link of teh song from Spotify, the album 
//that the song is from, and if no song is provided then default to "The Sign" by Ace of Base

function spotifyThisSong(trackQuery) {
    spotify.search({ type: 'track', query: trackQuery, limit: 1 }, function (err, data) {

        if (err) {
            return console.log('Error occurred: ' + err);
        } else{
            for(let i=0; i<data.tracks.items.length; i++);

        }

        console.log(data.tracks.items[0]);
    });
   
}




