console.log("here");
console.log("tom&jquery", $);

var about = $(".about");

about.on("click", function aboutClick(e) {
  var abouttxt = $(".about-txt");
  $(abouttxt).toggleClass("vizible");
});

var more = $(".more");

more.on("click", function aboutClick(e) {
  console.log("ej ju");
  var moretxt = $(".more-txt");
  $(moretxt).toggleClass("vizible");
});

var dark = $(".dark");
var board = $(".board");

//

dark.on("click", function aboutClick(e) {
  console.log("jes ju");
  $(board).toggleClass("black");
  dark.text(dark.text() == "D A R K" ? "L I G H T" : "D A R K");
});

//TOGGLE TEXT
// dark.text(dark.text() == "D A R K" ? "L I G H T" : "D A R K");

var slot = $(".slot");
var img = $("img");
var s1 = new Audio("./shum1.wav");
var s2 = new Audio("./popfol1.wav");
var s3 = new Audio("./popfol2.wav");
var s4 = new Audio("./pop.wav");

var shumoviArray = [s1, s2, s3, s4];
var randomShum = shumoviArray[Math.floor(Math.random() * shumoviArray.length)];

img.on("mouseup", function mouseClick(e) {
  console.log("varimgon");
  // $(e.currentTarget).css("visibility", "hidden");
  $(e.currentTarget).addClass("clicked");
  var randomShum =
    shumoviArray[Math.floor(Math.random() * shumoviArray.length)];
  randomShum.play(e);
});

//PROBA RANDOM ZVUKITJI

board.hover(function (e) {
  // event.stopPropagation(e);
  $(slot).toggleClass("mouseon");
});

//// PROB ASOUND

var ch1 = new Audio("./ch1.wav");
var ch2 = new Audio("./ch2.wav");
var ch3 = new Audio("./ch3.wav");
var ch4 = new Audio("./ch4.wav");
var ch5 = new Audio("./ch5.wav");
var ch6 = new Audio("./ch6.wav");
var ch7 = new Audio("./ch7.wav");
var ch8 = new Audio("./ch8.wav");
var ch9 = new Audio("./ch9.wav");
var ch10 = new Audio("./ch10.wav");
var ch11 = new Audio("./ch11.wav");
var ch12 = new Audio("./ch12.wav");

var soundzArray = [
  ch1,
  ch2,
  ch3,
  ch4,
  ch5,
  ch6,
  ch7,
  ch8,
  ch9,
  ch10,
  ch11,
  ch12,
];

var randomSound = soundzArray[Math.floor(Math.random() * soundzArray.length)];

slot.on("mouseenter", function mouseOver(e) {
  event.stopPropagation(e);
  console.log("mouseover");
  $(e.currentTarget).toggleClass("rotateone");
  var randomSound = soundzArray[Math.floor(Math.random() * soundzArray.length)];
  randomSound.play(e);
});