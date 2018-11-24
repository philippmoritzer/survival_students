function startGame(character) {
  var gManager = GameStateManager.getInstance();
  gManager.setCharacter(character);

  jQuery("#main").load("../game/game.html", () => {
    console.log(
      "Game starting with character" + JSON.stringify(gManager.character)
    );
  });
}
