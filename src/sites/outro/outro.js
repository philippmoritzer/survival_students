$(window).off("resize");
stopAreaMusic();

jQuery("#main").css({ background: "black" });

if (gst.win) {
  playWinMusic();
  jQuery("#outroTitle").text("Gewonnen!");
  jQuery("#outroText").text("Du hast gewonnen!");
  jQuery("#outroImage").attr("src", "../assets/images/win.png");
  jQuery("#outroLosingReasoning").text(
    gst.character.name +
      " hat erfolgreich den Monat überstanden. Doch der nächste Monat steht schon an... "
  );
} else {
  playLoseMusic();
  jQuery("#outroTitle").text("Verloren!");
  jQuery("#outroText").text("Du hast verloren!");
  jQuery("#outroImage").attr("src", "../assets/images/loss.png");
}

if (gst.character.hunger.value <= 0) {
  jQuery("#outroLosingReasoning").text(gst.character.name + " ist verhungert.");
} else if (gst.character.life.value <= 0) {
  jQuery("#outroLosingReasoning").text(
    gst.character.name + " hatte zu wenige soziale Aktivitäten diesen Monat."
  );
} else if (gst.character.learn.value <= 0) {
  jQuery("#outroLosingReasoning").text(
    gst.character.name +
      " wurde exmatrikuliert, da die Klausuren nicht bestanden wurden."
  );
}

jQuery("#outroPlayAgainButton").on("click", () => {
  location.reload();
});

jQuery("#outroCredits").on("click", () => {
  window.open("/src/sites/credits/credits.html", "_blank");
});
