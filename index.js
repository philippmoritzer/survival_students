//initital check if browser is supported
var supported = true;

if (/MSIE 10/i.test(navigator.userAgent)) {
  //internet explorer 10
  supported = false;
}

if (
  /MSIE 9/i.test(navigator.userAgent) ||
  /rv:11.0/i.test(navigator.userAgent)
) {
  //internet explorer 9/11
  supported = false;
}

if (/Edge\/\d./i.test(navigator.userAgent)) {
  //Microsoft Edge
  supported = false;
}

if (!supported) {
  jQuery("#main").css({ display: "none" });
  jQuery("#browserNotSupported").css({ display: "unset" });
} else {
  //At the initial start of the game - load intro.html into the main div

  console.log(
    "%cSurvival Students - 1.0",

    "background: black; color: white; font-size: x-large; font-family: 'Arial'; padding: 50px;"
  );

  console.log(
    "%cBy Philipp Moritzer - Hannes Lesemann - Pascal Seegers",
    "background: black; color: white; font-size: large; padding: 25px;"
  );

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
}
