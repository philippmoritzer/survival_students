function startGame() {
  jQuery("#main").load(
    "../character-selection/character-selection.html",
    () => {
      console.log("Game starting....");
    }
  );
}
