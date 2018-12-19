//At the initial start of the game - load intro.html into the main div
// jQuery(document).ready(() => {
//   var gst = GameStateManager.getInstance();
//   if (!gst.loaded) {
//     jQuery("#main").load("./sites/intro/intro.html", () => {});
//     gst.setLoaded();
//   }
// });

// $(window).on("load", function() {
//   var gst = GameStateManager.getInstance();
//   if (!gst.loaded) {
//     jQuery("#main").load("./sites/intro/intro.html", () => {});
//     gst.setLoaded();
//     gst.initGameData();
//   }
// });

//comment in to start at game.html

$(window).on("load", function() {
  var gst = GameStateManager.getInstance();
  gst.setLoaded();
  gst.character = new Character(1, "Testname", 8000, 40, 40, 40);

  jQuery("#main").load("./sites/game/game.html", () => {});
  gst.setLoaded();
  gst.initGameData();
});
