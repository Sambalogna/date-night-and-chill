function displayResults() {
    $("#firstPage").css("display", "none")
    $("footer").css("display", "none");
    $("#movies").css("display", "block")
}
$("#startBtn").on("click", function (event) {
    event.preventDefault();

    displayResults();
});
