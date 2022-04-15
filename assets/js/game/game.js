$("#game")
  .append()
  .html(
    `
    <div class="container center">
        <div class="col">
            <div class="card">

                <div class = "card-content cardStyle gameCard">
                    
                    <span>Choose an Activity!</span>
                    <div id="gameImg" class="card-image"></div>

                    <div id="gameInfo"></div>


                </div>

                <div class="card-action" id="gameBtnBox">
                    <a class="waves-effect waves-light btn" id="gamesBtn">New Game</a>
                    <span id="howToPlay"></span>
                    <a class="waves-effect waves-light btn" id="saveGameBtn">Confirm choice</a>
                    </div>
                
            </div>
        </div>
    </div>
    </div>
    `
  );

function randomGame() {
  var gamesArr = [
    "Jenga",
    "UNO",
    "Battleship Board Game",
    "Off Topic: A Game for Those Slightly Off",
    "Talk Flirt Dare",
    "Tabletop Simulator",
    "Twister Game",
    "Sequence",
    "Truth or Dare Date Questions",
    "36 Questions",
    "Karaoke",
    "Mad Libs",
    "Escape Room",
    "Fuji Board Game",
    "It Takes Two",
    "New Phone, Who Dis?",
  ];
  var gamesArrImg = [
    "https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/2DB2C615EA8E4D5A9EF0AB0A21091825/D326882S_2.jpg?fit=inside|540:540",
    "https://cdn.shopify.com/s/files/1/0288/4704/6734/products/W2085_2_690x690.png?v=1599331049",
    "https://images.schoolspecialty.com/images/224154_ecommfullsize.jpg",
    "https://cdn-o.fishpond.com/0259/670/009/1307839077/original.jpeg",
    "https://s3.r29static.com/bin/shop/ba3/x,85/2124539/image.webp",
    "https://hb.imgix.net/928701042d49e18b7727bd0cff21c44b67fc3f3d.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=0a539b70097ed452f408320cb562d225",
    "https://www.riteaid.com/shop/media/catalog/product/z/e/zeu1jlj4mk5hmqtxma4u.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=406&width=406&canvas=406:406",
    "https://mobileimages.lowes.com/productimages/954246d6-5ee9-4dce-893a-50dd90b06de1/43551260.jpg?size=xl",
    "https://psycatgames.com/games/truth-or-dare-extreme/app-icon_huc2ace91c261708279f00eb75c5a1ba02_935943_1024x0_resize_q75_box.jpg",
    "https://int.nyt.com/applications/modernlove-questions/img/social/36q_share_02-104c7bcd8369a8cd4d263158a9a45b5d0dc37d5a.png",
    "https://blog.tutorming.com/hubfs/Chinese%20Karaoke/chinese%20Karaoke%20.jpg",
    "https://target.scene7.com/is/image/Target/GUEST_42d67d3e-9075-4a51-a130-72ebc8ad43cc?wid=488&hei=488&fmt=pjpeg",
    "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg",
    "https://cf.geekdo-images.com/XBPqlJiKWc6cf0OjkKF2pA__opengraph/img/FQgPOLLKhrYzNeU25JmdichA1Dw=/fit-in/1200x630/filters:strip_icc()/pic4264971.jpg",
    "https://image.api.playstation.com/vulcan/ap/rnd/202012/0815/0Xqi1LgRoEtJ5zlFprpd54Vu.png",
    "https://cdn11.bigcommerce.com/s-zs2cp9aoth/images/stencil/2048x2048/products/3892/4410/new_phone_who_dis_3__70353.1586988311.jpg?c=2",
  ];

  console.log(gamesArr);

  var randomNum = Math.floor(Math.random() * gamesArr.length);
  console.log(randomNum);

  console.log(gamesArr);

  console.log(gamesArrImg[randomNum]);

  var gameName = gamesArr[randomNum];
  var gameImage = gamesArrImg[randomNum];
  var gameGoogleUrl = "https://www.google.com/search?q=" + gameName;

  $("#gameImg").append().html(`<img src="${gameImage}"/>`);

  $("#gameInfo")
    .append()
    .html(
      `<div>
            <h4>${gameName}</h4>
        </div>`
    );
  $("#howToPlay")
    .append()
    .html(
      `<a class="waves-effect waves-light btn" href="${gameGoogleUrl}">Google</a>`
    );

  var myLocalGameStore = {
    gameURLObj: gameGoogleUrl,
    gameNameObj: gameName,
    gameImageObj: gameImage,
  };

  var gameLocalStorage = JSON.stringify(myLocalGameStore);
  localStorage.setItem("GameStorage", gameLocalStorage);
}

function getGameLocalStorage() {
  var useGameStorage = JSON.parse(localStorage.getItem("GameStorage"));
  console.log(useGameStorage);
  $("#savedGame").append().html(`
        <div class="container center">
            <div class="col">
                
                <div class="card">

                <div class = "card-content cardStyle gameCard">
                
                    <div id="savedGImage" class="card-image"></div>

                    <div id="savedGameInfo"></div>


                </div>

            
        </div>


            </div>
        </div>`);
  $("#savedGImage").append().html(`<div>
        <img id="savedGameImage"  src="${useGameStorage.gameImageObj}""></div>`);

  $("#savedGameInfo").append().html(`<h4>${useGameStorage.gameNameObj}</h4>
        `);

}

getGameLocalStorage();

$("#gamesBtn").on("click", function (event) {
  event.preventDefault();
  randomGame();

  setTimeout(getGameLocalStorage, 4000);
});
