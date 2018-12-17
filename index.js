//At the initial start of the game - load intro.html into the main div
// jQuery(document).ready(() => {
//   var gst = GameStateManager.getInstance();
//   if (!gst.loaded) {
//     jQuery("#main").load("./sites/intro/intro.html", () => {});
//     gst.setLoaded();
//   }
// });
/*
$(window).on("load", function() {
  var gst = GameStateManager.getInstance();
  if (!gst.loaded) {
    jQuery("#main").load("./sites/intro/intro.html", () => {});
    gst.setLoaded();
  }
});*/

//comment in to start at game.html

$(window).on("load", function() {
  var gst = GameStateManager.getInstance();
  gst.setLoaded();
  gst.character = new Character(1, "Testname", 8000, 40, 40, 40);

  jQuery("#main").load("./sites/game/game.html", () => {});
  gst.setLoaded();
  gst.initGameData();
});

const execAreaChange = area => {
  console.log(area.backgroundImage);
  jQuery("#main").animate({ opacity: 0 }, "slow", () => {
    jQuery("#main")
      .css({
        background:
          "url('../assets/scenes/" +
          area.backgroundImage +
          "') no-repeat center center fixed"
      })
      .animate({ opacity: 1 });
    jQuery("#modal").css({ display: "none" });
  });

  // jQuery("#main").animate({ opacity: 0 }, "slow", () => {});

  // jQuery("#main")
  //   .css({
  //     background:
  //       'url("../assets/scenes/' +
  //       area.backgroundImage +
  //       '") no-repeat center center fixed;'
  //   })
  //   .animate({ opacity: 1 });
};
