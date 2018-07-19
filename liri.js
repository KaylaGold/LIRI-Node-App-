// Code to read and set any environment variables with the dotenv package
const dotenv = require("dotenv").config();

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
// First Argument: Commands eg 'my-tweets', 'spotify-this-song'etc
let command = process.argv[2];
// Second Argument: When user gives us input next to the command in the command line eg node liri.js spotify-this-song "bendita tu luz". The "bendita tu luz" is user input
let input = process.argv[3];


// Conditional statements for arguments (commands). This is app functionality due to user input
switch (command) {
    case "my-tweets":
        // No user input necessary here
        myTweets();
        break;

    case "spotify-this-song":
        // If there is an input from user
        if (input) {
            spotifyThisSong(input);
        } else {
            // If there is no input from user
            spotifyThisSong('The Sign');
        }
        break;

    case "movie-this":
        // If there is an input from user
        if (input) {
            movieThis(input);
        } else {
            // If there is no input from user
            movieThis('Mr. Nobody');
        }
        break;

    case "do-what-it-says":
        // No user input necessary here
        doWhatItSays();
        break;
    default:
        console.log('Hello, invalid command. Please try again!');
};


// Functions for the arguments (commands) 
// Command #1 shows the last 20 tweets and when they were created
function myTweets() {

    let screenName = {
        screen_name: '@LagLiri'
    };
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
// Command #2 display the artist, song name, preview link of the song from Spotify, the album 
//that the song is from, and if no song is provided then default to "The Sign" by Ace of Base
function spotifyThisSong(song) {
    spotify.search({ type: 'track', query: song, limit: 1}, function (err, data) {

        if (err) {
            return console.log('Error occurred: ' + err);
      } else {
        for (let i = 0; i < data.tracks.items.length; i++);{
             let spotifySongData = data.tracks.items[i];
             //Display artist
         console.log("Artist:" + spotifySongData.artists.name);
         console.log("Songs name:" + spotifySongData.name);
         console.log("Preview link of the song is:"+ spotifySongData.preview_url);
         console.log("Album name is:" + spotifySongData.album.name);
         console.log("-----------------------");
         }
         
     }

        console.log(data.tracks.items[0]);
    });

}

// Command #3 OMDB will display title of movie, year it came out, IMDB rating, Rotten Tomatoes rating,
//country where movie was produced, language of movie, plot, and actors in the movie
function  movieThis(movie){
    let queryUrl = "http://www.omdbapi.com/?t=" + movie + "&apikey=" + omdb + "&plot=short&tomatoes=true";
  
    request(queryUrl, function(error, response, body){
        //If request is successful
        if(!error && response.statusCode === 200) {
            console.log(body); //remove when done
            console.log("Title of the movie is:"+ JSON.parse(body).Title);
            console.log("Year the movie came out is:" + JSON.parse(body).Year);
            console.log("IMDB Rating of the move is:" + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating of the movie is:" + JSON.parse(body).tomatoRating);
            console.log("Country where the movie was produced is:" + JSON.parse(body).Country);
            console.log("Language of the movie is:" + JSON.parse(body).Language);
            console.log("Plot of the movie is:" + JSON.parse(body).Plot);
            console.log("Actors in the movie are:" + JSON.parse(body).Actors);
        }else{
            console.log('Error occured.');
        } if(movie === 'Mr. Nobody'){
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");
        }
    });
}
/*
// Command #4 LIRI will take the text inside of random.txt and use it to call one of LIRI's commands
function doWhatItSays(){
    fs.readFile('random.txt', "utf8", function(err, data){
        if(err){
            console.log('Error occurred.');
        } else{
            let content = data;
            console.log(data); 
            
            spotifyThisSong();
        }
    })
};



*/