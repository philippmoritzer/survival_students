function startGame() {
  jQuery("#main").load(
    "./sites/character-selection/character-selection.html",
    () => {
      console.log("Game starting....");
    }
  );
}
