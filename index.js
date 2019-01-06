//At the initial start of the game - load intro.html into the main div

$(window).on("load", function() {
  var gst = GameStateManager.getInstance();
  if (!gst.loaded) {
    jQuery("#main").load("./sites/intro/intro.html", () => {});
    gst.setLoaded();
    gst.initGameData();
  }
});

// comment in to start at game.html

// $(window).on("load", function() {
//   var gst = GameStateManager.getInstance();
//   gst.setLoaded();
//   const HUNGER_RESOURCE_1 = new Resource(25, 1, 20);
//   const LIFE_RESOURCE_2 = new Resource(50, 0.5, 20);
//   const LEARN_RESOURCE_1 = new Resource(25, 0.3, 20);

//   gst.character = new Character(
//     1,
//     "Testname",
//     "../assets/images/lisa.png",
//     80000,
//     HUNGER_RESOURCE_1,
//     LIFE_RESOURCE_2,
//     LEARN_RESOURCE_1
//   );

//   gst.character.items = [];

//   jQuery("#main").load("./sites/game/game.html", () => {});
//   gst.setLoaded();
//   gst.initGameData();
//   gst.initPromise.then(() => {
//     gst.startGame();
//   });
// });
