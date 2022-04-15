//Display movie card
$("#startBtn").on("click", function (event) {
    event.preventDefault();
    displayMovieBox();
});

function displayMovieBox() {
    var theBody = document.querySelector("body");
    theBody.classList.add("moviebg");
    $("#firstPage").css("display", "none");
    $("footer").css("display", "none");
    $("#movies").css("display", "block");
}

//Display food card
$("#genres").on("change", function () {
    $("#movieBtn").css("pointerEvents", "auto");
});

$("#movieBtn").on("click", function () {
    $("#saveMovieBtn").css("pointerEvents", "auto");
});

$("#saveMovieBtn").on("click", function (event) {
    event.preventDefault();
    displayFoodBox();
});

function displayFoodBox() {
    var theBody = document.querySelector("body");
    theBody.classList.add("foodbg");
    $("#movies").css("display", "none");
    $("#dinner").css("display", "block");
    $("#dinnerBtn").css("pointerEvents", "auto");
}

//Display cocktails card
$("#dinnerBtn").on("click", function () {
    $("#saveFoodBtn").css("pointerEvents", "auto");
});

$("#saveFoodBtn").on("click", function (e) {
    e.preventDefault();
    displayCocktails();
});

function displayCocktails() {
    var theBody = document.querySelector("body");
    theBody.classList.add("cocktailbg");
    $("#dinner").css("display", "none");
    $("#cocktails").css("display", "block");
    $("#cocktailsBtn").css("pointerEvents", "auto");
}

//Display game card
$("#cocktailsBtn").on("click", function () {
    $("#saveCocktailBtn").css("pointerEvents", "auto");
});

$("#saveCocktailBtn").on("click", function (e) {
    e.preventDefault();
    displayGames();
});

function displayGames() {
    var theBody = document.querySelector("body");
    theBody.classList.add("gamebg");
    $("#cocktails").css("display", "none");
    $("#game").css("display", "block");
    $("#gamesBtn").css("pointerEvents", "auto");
}

//Display song card
$("#saveGameBtn").on("click", function (e) {
    e.preventDefault();
    displaySongs();
});

function displaySongs() {
    var theBody = document.querySelector("body");
    theBody.classList.add("songbg");
    $("#game").css("display", "none");
    $("#song").css("display", "block");
    $("#songBtn").css("pointerEvents", "auto");
}

//Display choices combo
$("#songBtn").on("click", function () {
    getRandomSong();
    $("#saveSongBtn").css("pointerEvents", "auto");
})

$("#saveSongBtn").on("click", function (e) {
    e.preventDefault();
    makeButton();
    viewCombo();
    
})

function viewCombo() {
    // console.log("viewcombo called");
    var theBody = document.querySelector("body");
    theBody.classList.add("combobg");
    $("#song").css("display", "none");
    $("#combo").css("display", "block");
    $("#saveSongBtn").css("pointerEvents", "none");

    
}

//DYnamicaaly make generate message button
function makeButton() {
    // console.log("Make button was called");
    var generateMessage = document.createElement("button");
    generateMessage.innerHTML = "GENERATE MESSAGE";
    generateMessage.setAttribute("id", "generateButton");
    generateMessage.classList.add("btn");
    $("#combo").append(generateMessage);

    //When you click generate message button
    generateMessage.addEventListener("click", function() {
        $("#combo").css("display", "none");
        $("#message").css("display", "block");
        var theBody = document.querySelector("body");
        theBody.classList.add("messagebg");
        makeTextMessage();
    })

}

//View message page


function makeTextMessage() {

    var movieVariable = JSON.parse(localStorage.getItem("MovieStorage")).movieName;
    var foodVariable = JSON.parse(localStorage.getItem("FoodStorage")).foodMoniker;
    var drinkVariable = JSON.parse(localStorage.getItem("DrinkStorage")).drinkMoniker;
    var gameVariable = JSON.parse(localStorage.getItem("GameStorage")).gameNameObj;
    var songVariable = JSON.parse(localStorage.getItem("songStorage")).mySongName;

    var textString = `\n Hey, I have the perfect idea for our date! \n We're going to watch the movie ${movieVariable}.\n For dinner, I'll make us some ${foodVariable} \n while you prepare 2 glasses of ${drinkVariable}. \n After Dinner we can play ${gameVariable} and listen to ${songVariable}!`;

    var textBox = document.querySelector("#theText");
    textBox.innerHTML = textString;

}

var theCopyButton = document.querySelector("#copyText");
theCopyButton.addEventListener("click", function() {
    
    var content = document.getElementById('theText');
    
    content.select();
    document.execCommand('copy');
    alert("Copied!");

})