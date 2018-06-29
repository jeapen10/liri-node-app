require("dotenv").config();
var request = require("request");
var keys = require("./keys.js");
var fs = require("fs");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

// Access to keys information
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Request to grab data from OMDB API
var request = require('request');
request('http://www.omdbapi.com/', function (error, response, body) {

})

// Create the commands
if (process.argv[2] === "my-tweets") {

    var params = { eapsterbunny: "nodejs", count: 20 };
    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (!error) {
            tweets.forEach(function (tweet) {
                console.log(tweet.text);
                console.log(tweet.created_at);
                console.log("\n-------------------------\n");
            })
        }
    })
}

if (process.argv[2] === "spotify-this-song") {

    spotify
        .search({ type: 'track', query: 'All the Small Things' })
        .then(function (response) {
            //   console.log(response.tracks.items[0]);
            // Artist
            console.log(response.tracks.items[0].artists[0].name);

            // Song name
            console.log(response.tracks.items[0].name);

            // Preview Link
            console.log(response.tracks.items[0].external_urls.spotify);

            // Album
            console.log(response.tracks.items[0].album.name);
        })

        .catch(function (err) {
            console.log(err);
        });



    // if (query === undefined) {
    //     query = "The Sign by Ace of Base";
    // } else if (err) {
    //     return console.log('Error occurred: ' + err);
    // } else {
    //     var song = process.argv[2].split(",");
    //     song[1] = query;

    // }

    // console.log(data);
}

var movieThis = function(movieName) {
    if (movieName === "") {
        movieName = "Mr. Nobody";
    }


if (process.argv[2] === "movie-this") {
    var request = require('request');
    request("http://www.omdbapi.com/?apikey=d3f8250e&t=" + movieName + "&y=&plot=full&tomatoes=true&r=json", function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    
        if (!error && response.statusCode === 200) {
	    
            var movie = JSON.parse(body);
    
            
            console.log("Movie Title: " + movie.Title);
            console.log("Release Year: " + movie.Year);
            console.log("IMDB Rating: " + movie.imdbRating);
            console.log("Rotten Tomatoes Rating: " + movie.Ratings[2].Value);
            console.log("Country Produced In: " + movie.Country);
            console.log("Language: " + movie.Language);
            console.log("Plot: " + movie.Plot);
            console.log("Actors: " + movie.Actors);
          }
    
    });
}



if (process.argv[2] === "do-what-it-says") {

    // var doWhatItSays = function () {
        fs.readFile("random.txt", "utf8", function (error, data) {
            console.log(data);
            var dataArr = data.split(',')

            // Set to first item
            action = dataArr[0];
            // Set to second item
            argument = dataArr[1];

            doThis(action, argument);
            
        });
    }
