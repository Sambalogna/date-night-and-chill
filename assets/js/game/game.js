
$("#game").append().html(
    `
    <div class="container center">
        <div class="col">
            <div class="card">
                <div id="gameImg" class="card-image"></div>
                <div class="card-content">
                    <div id="gameInfo"></div>
                </div>
                <div class="card-action" id="gameBtnBox">
                    <a class="waves-effect waves-light btn grey darken-2" id="gamesBtn">New Game</a>
                    <span id="howToPlay"></span>
                </div>
            </div>
        </div>
    </div>
    </div>
    `
);

function randomGame() {
    var gamesArr = ["Jenga", "UNO", "Battleship Board Game", "Off Topic: A Game for Those Slightly Off", "Talk Flirt Dare", "Tabletop Simulator", "Twister Game", "Sequence", "Truth or Dare Date Questions", "36 Questions", "Karaoke", "Mad Libs", "Escape Room", "Fuji Board Game", "It Takes Two", "New Phone, Who Dis?"];

    console.log(gamesArr);

    var randomNum = Math.floor(Math.random() * (gamesArr.length));
    console.log(randomNum);

    gamesArr = gamesArr[randomNum];
    console.log(gamesArr);

    $("#gameInfo").append().html(
        `<div>
            <h4>${gamesArr}</h4>
        </div>`
    )
    $("#howToPlay").append().html(
        `<a class="waves-effect waves-light btn grey darken-2" href="https://www.google.com/search?q=${gamesArr}">Google</a>`
    )

}

$("#gamesBtn").on("click", function (event) {
    event.preventDefault();
    randomGame();
})


