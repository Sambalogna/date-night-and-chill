// omdb api
var omdbApi = "https://www.omdbapi.com/?apikey=7b7875f8&t=";
$(document).ready(function () {
    $('select').formSelect();
});

// movies
var romance = ["It's a Wonderful Life", "Casablanca", "Your Name.", "Eternal Sunshine of the Spotless Mind", "Gone with the Wind", "Howl's Moving Castle", "Her", "The Notebook", "The Fault in Our Stars", "Midnight in Paris", "500 Days of Summer", "Love, Simon", "A Star Is Born", "50 First Dates", "La La Land", "Titanic", "Edward Scissorhands", "When a Man Loves a Woman", "Kate & Leopold", "The Perks of Being a Wallflower"];
var horror = ["Alien", "The Shining", "2001: A Space Odyssey", "The Thing", "The Exorcist", "Dawn of the Dead", "Night of the Living Dead", "Get Out", "The Evil Dead", "Halloween", "Split", "A Quiet Place", "Midsommar", "The Ring", "Cloverfield"];
var thriller = ["Inception", "Se7en", "The Silence of the Lambs", "Parasite", "The Departed", "Memento", "Joker", "Reservoir Dogs", "Shutter Island", "No Country for Old Men", "Fargo", "Gone Girl", "V for Vendetta", "Jaws", "The Sixth Sense"];
var comedy = ["Back to the Future", "Superbad", "Spider-Man: Into the Spider-Verse", "Coco", "The Wolf of Wall Street", "Monty Python and the Holy Grail", "The Truman Show", "The 40-Year-Old Virgin", "The Big Lebowski", "Catch Me If You Can", "Shaun of the Dead", "Shrek", "Ratatouille", "Life of Brian", "What We Do in the Shadows"];
var action = ["The Dark Knight", "The Good, the Bad and the Ugly", "The Matrix", "The Terminator", "Gladiator", "Django Unchained", "Inglourious Basterds", "The Batman", "Kill Bill: Vol. 1", "Blade Runner", "Hacksaw Ridge", "Mad Max: Fury Road", "Logan", "Guardians of the Galaxy", "Deadpool"];
var drama = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "Forrest Gump", "Fight Club", "Goodfellas", "The Green Mile", "The Usual Suspects", "The Prestige", "Whiplash", "Grave of the Fireflies", "Apocalypse Now", "Braveheart", "Once Upon a Time in America", "Taxi Driver",];
var adventure = ["Interstellar", "The Lord of the Rings: The Fellowship of the Ring", "Star Wars", "Spirited Away", "The Lion King", "Indiana Jones and the Raiders of the Lost Ark", "WALL·E", "Princess Mononoke", "Stand by Me", "The Wizard of Oz", "Pirates of the Caribbean: The Curse of the Black Pearl", "Cast Away", "The Iron Giant", "Big Hero 6", "Harry Potter and the Sorcerer's Stone"]
var all = action.concat(romance, horror, thriller, comedy, action, drama, adventure);

console.log(romance);
console.log(horror);
console.log(thriller);
console.log(comedy);
console.log(action);
console.log(drama);
console.log(adventure);
console.log(all);

// creates a button and dropdown menu for movie genres
$("#movies").append().html(
    `
    <div class="row">
        <div class="col s12 m7">
            <div class="card">
                
                <div class="card-content cardStyle">
                    <span>GET MY MOVIE!</span>
                    <div id="movieImg" class="card-image">
                    </div>
                    <div id="movieInfo">
                    </div>
                </div>
                
                <div class="card-action">
                <div class="input-field col s12" id="genreSelection">
                    <select name="genres" id="genres">
                        <option value="" disabled selected>Pick a Genre:</option>
                        <option value="all">All</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="drama">Drama</option>
                        <option value="romance">Romance</option>
                        <option value="thriller">Thriller</option>
                    </select>
                </div>
                <a class="waves-effect waves-light btn" id="movieBtn">New Movie</a>
                <a class="waves-effect waves-light btn" id="saveMovieBtn">Confirm choice</a>
                </div>
            </div>
        </div>
    </div>
    
`
);

// adds click listener to execute movie generation
$("#movieBtn").on("click", function (event) {
    event.preventDefault();

    // gets selected genre from dropdown options
    var selectedGenre = $("#genres").val();
    console.log(selectedGenre);

    // assigns selected option with the corresponding array
    if (selectedGenre == "romance") {
        var selectedArr = romance;
    }
    else if (selectedGenre == "horror") {
        var selectedArr = horror;
    }
    else if (selectedGenre == "thriller") {
        var selectedArr = thriller;
    }
    else if (selectedGenre == "comedy") {
        var selectedArr = comedy;
    }
    else if (selectedGenre == "action") {
        var selectedArr = action;
    }
    else if (selectedGenre == "drama") {
        var selectedArr = drama;
    }
    else if (selectedGenre == "adventure") {
        var selectedArr = adventure;
    }
    else if (selectedGenre == "all") {
        var selectedArr = all;
    }
    else {
        console.log("Please pick a genre.")
        return;
    }

    console.log(selectedArr);

    // randomly generates a number based on the selected genre's length
    var randomNum = Math.floor(Math.random() * (selectedArr.length));
    console.log(randomNum);

    // associates the current array with the value of the random number's index
    selectedArr = selectedArr[randomNum];
    console.log(selectedArr);

    // fetches data from the omdb database using the randomly generated array value
    fetch(omdbApi + selectedArr)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log("movie: ", data);
            var movieData = data;

            $("#movieInfo").append().html(
                `<div id="movie">
                    <h4>${movieData.Title} <sup>${movieData.Year}</sup></h4>
                    <h5>${movieData.Plot}</h5>
                </div>`
            );
            $("#movieImg").append().html(
                `<img class="movieImg" width="15%" src="${movieData.Poster}" />`
            )
        });
});