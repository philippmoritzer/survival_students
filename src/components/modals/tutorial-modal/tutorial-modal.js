//Resource-Bar Tutorial

const loadTutorialElement = (id, text, identifier) => {
  jQuery("#tutorialElementContainer" + this.id).detach(() => {
    console.log("deleted");
  });
  jQuery.get(
    "./components/modals/tutorial-modal/tutorial-element/tutorial-element.html",
    data => {
      const offset = jQuery(identifier).offset();
      const height = jQuery(identifier).height();
      const width = jQuery(identifier).width();

      let tElement = new TutorialElement(id, text, {
        top: offset.top,
        left: offset.left,
        width: width,
        height: height
      });
      jQuery("#tutorialModalContainer").append(data);
      tElement.init();
    }
  );
};

const initTutorialModal = () => {
  loadTutorialElements();
  $(window).on("resize", () => {
    loadTutorialElements();
  });
};

const loadTutorialElements = () => {
  //load Resource Bar Tutorial Element
  loadTutorialElement(
    1,
    "Ressourcenübersicht - Hier werden die Ressourcen Hunger (Grün), Lebensgefühl (Rot) und Lernstand (Gelb) angezeigt. Fällt eine dieser Ressourcen unter 0 ist das Spiel verloren.",
    ".gameResourceBars"
  );

  //load Actions tutorial element
  loadTutorialElement(
    2,
    "Aktionen - Mit einem klick auf eine Aktion können detaillierte Informationen zur jeweiligen Aktion eingesehen werden." +
      "Führe Aktionen aus um Belohnungen (Items, s. Rucksack) zu bekommen und ihre Ressourcen zu füllen. Die Aktionen bringen farblich gemäß der Ressourcenübersicht Prozente für die jeweilige Leiste. Aktionen kosten Geld. Unterschiedliche Aktionen bringen unterschiedlich viele Punkte." +
      "Es gibt verschiedene Gebiete mit verschiedenen Aktionen. Über den Navigator kann das Gebiet gewechselt werden." +
      " Pro Tag können 3 Aktionen ausgeführt werden. Die Aktionen wechseln pro Tag. " +
      " Über die Historie kann eingesehen werden, welche Aktionen zuletzt ausgeführt wurden. So kann es bei einem verlorenen Spiel nützlich sein zu reflektieren, welche Aktionen beim nächsten Spiel besser ausgeführt werden sollten.",
    ".gameActionArea"
  );

  //load game backpack tutorial element
  loadTutorialElement(3, "Rucksack", "#gameBackpack");

  //load game navigator tutorial element
  loadTutorialElement(4, "Navigator", "#gameNavigator");
  //load game history tutorial element
  loadTutorialElement(5, "Historie", "#gameDecision");
  //load game tutorial tutorial element
  loadTutorialElement(6, "Tutorial", "#gameTutorial");
  //load game actions tutorial element
  loadTutorialElement(7, "Aktionen übrig", ".gameTurnIndicator");
  //load game money tutorial element
  loadTutorialElement(8, "Geld vorhanden", ".gameMoney");
  //load game character tutorial element
  loadTutorialElement(9, "Aktueller Charakter", ".gameCharacterImageName");
  //load game endday tutorial element
  loadTutorialElement(10, "Tag beenden", "#gameEndDayButton");
  //load game day tutorial element
  loadTutorialElement(11, "Aktueller Tag", "#gameActionBarTopItemDay");
  //load game location tutorial element
  loadTutorialElement(12, "Aktueller Ort", "#gameActionBarTopItemLocation");
};
