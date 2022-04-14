function displayResults() {
    $("#firstPage").css("display", "none")
    $("#resultsPage").css("display", "block")
}
$("#startBtn").on("click", function (event) {
    event.preventDefault(); 
    displayResults();
});

