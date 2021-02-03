console.log("here");
console.log("tom&jquery", $);

var about = $(".about");

about.on("click", function aboutClick(e) {
  var abouttxt = $(".about-txt");
  abouttxt.css("visibility", "visible");
});

var more = $(".more");
// more.on("click", function aboutClick(e) {
//   var moretxt = $(".more-txt");
//   moretxt.css("visibility", "visible");
// });

var board = $(".board");
var slot = $(".slot");
var img = $("img");
//var s1 = new Audio("./shum1.wav");
var s2 = new Audio("./popfol1.wav");

slot.on("click", function mouseClick(e) {
  $(e.currentTarget).css("visibility", "hidden");
  s2.play(e);
});

board.hover(function (e) {
  slot.toggleClass("mouseon");
});

img.on("mouseenter", function mouseOver(e) {
  console.log("mouseover");
  $(e.currentTarget).toggleClass("rotateone");
});

// img.on("click", function (e) {
//   var imgOn = $(e.currentTarget);
//   //s1.play(e);
//   imgOn.on("click", function (e) {
//     s2.play(e);
//     $(e.currentTarget).css("visibility", "hidden");
//   });
// });
