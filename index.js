//At the initial start of the game - load intro.html into the main div
jQuery(document).ready(() => {
  var gst = GameStateManager.getInstance();
  if (!gst.loaded) {
    jQuery("#main").load("./sites/intro/intro.html", () => {});
    gst.setLoaded();
  }
});
