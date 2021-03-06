const startGame = () => {
  jQuery("#main").load(
    "./sites/character-selection/character-selection.html",
    () => {
      const gst = GameStateManager.getInstance();
      gst.setLoaded();
      jQuery(document).off();
    }
  );
};

setTimeout(() => {
  jQuery(document).ready(() => {
    jQuery(document).keypress(() => {
      startGame();
      $(document).off("keypress");
    });
    jQuery(document).on("click", () => {
      startGame();
      $(document).off("keypress");
    });
  });
}, 4000);
