
$("#game").append().html(
    `
    <div class="row">
        <div class="col s12 m7">
            <div class="card">
                <div id="gameImg" class="card-image"></div>
                <div class="card-content">
                    <div id="gameInfo"></div>
                </div>
                <div class="card-action" id="gameBtnBox">
                    <a class="waves-effect waves-light btn" id="gamesBtn">New Game</a>
                    <span id="howToPlay"></span>
                </div>
            </div>
        </div>
    </div>
    </div>
    `
);

function randomGame() {
    var gamesArr = ["Jenga", "UNO", "Battleship", "Off Topic: A Game for Those Slightly Off", "Talk Flirt Dare", "Tabletop Simulator", "Twister", "Sequence", "Truth or Dare", "36 Questions", "Karaoke", "Mad Libs", "Escape Room", "Fuji", "It Takes Two", "New Phone, Who Dis?"];

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
        `<a class="waves-effect waves-light btn" href="https://www.youtube.com/results?search_query=${gamesArr}">Youtube</a>`
    )

}

$("#gamesBtn").on("click", function (event) {
    event.preventDefault();
    randomGame();
})


