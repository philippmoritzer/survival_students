class ActionItem {
  constructor(id, action) {
    this.id = id;
    this.action = action;
  }

  makeElementUnique() {
    jQuery("#actionContainer").attr(
      "id",
      jQuery("#actionContainer").attr("id") + this.id
    );
    jQuery("#actionName").attr(
      "id",
      jQuery("#actionName").attr("id") + this.id
    );
    jQuery("#actionDesc").attr(
      "id",
      jQuery("#actionDesc").attr("id") + this.id
    );
    jQuery("#actionImage").attr(
      "id",
      jQuery("#actionImage").attr("id") + this.id
    );
    jQuery("#actionCost").attr(
      "id",
      jQuery("#actionCost").attr("id") + this.id
    );
  }

  setStyles() {
    switch (this.action.type) {
      case "hunger":
        jQuery("#actionContainer" + this.id).css({
          "background-color": "rgba(27, 94, 32, 0.7)"
        });
        break;
      case "life":
        jQuery("#actionContainer" + this.id).css({
          "background-color": "rgba(198, 40, 40, 0.7)"
        });
        break;
      case "learn":
        jQuery("#actionContainer" + this.id).css({
          "background-color": "rgba(249, 168, 37, 0.7)"
        });
        break;
    }
  }

  setAttributes() {
    jQuery("#actionName" + this.id).text(this.action.name);
    jQuery("#actionCost" + this.id).text(this.action.cost);
    jQuery("#actionDesc" + this.id).text(this.action.desc);
  }

  select() {
    jQuery("#actionContainer" + this.id).on("click", () => {
      if (gst.turnCount === 2) {
        jQuery("#gameEndDayButton").attr("disabled", false);
      }

      if (gst.turnCount < 3 && gst.character.money >= this.action.cost) {
        gst.turnCount++;
        jQuery("#gameTurnIndicatorText").text(
          gst.turnCount + " / " + MAX_TURN_COUNT
        );

        switch (this.action.type) {
          case "hunger":
            gst.character.money = gst.character.money - this.action.cost;

            gst.character.hunger = gst.character.hunger + this.action.value;
            if (gst.character.hunger > 100) {
              gst.character.hunger = 100;
            }
            activeResourceBars[0].updateState(gst.character.hunger);
            break;
          case "life":
            gst.character.money = gst.character.money - this.action.cost;
            gst.character.life = gst.character.life + this.action.value;
            if (gst.character.life > 100) {
              gst.character.life = 100;
            }
            activeResourceBars[1].updateState(gst.character.life);
            break;
          case "learn":
            gst.character.money = gst.character.money - this.action.cost;
            gst.character.learn = gst.character.learn + this.action.value;
            if (gst.character.learn > 100) {
              gst.character.learn = 100;
            }
            activeResourceBars[2].updateState(gst.character.learn);
            break;
        }
        jQuery(".gameMoneyText").animate(
          {
            opacity: "0"
          },
          100
        );
        jQuery(".gameMoneyText").text(gst.character.money);
        jQuery(".gameMoneyText").animate(
          {
            opacity: "1"
          },
          1000
        );
      }
    });
  }

  init() {
    this.makeElementUnique();
    this.setStyles();
    this.setAttributes();
    this.select();
  }
}
