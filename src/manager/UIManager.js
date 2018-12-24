let activeResourceBars = [];
let currentAction = null;

const changeUIDay = area => {
  jQuery("#gameEndDayButton").attr("disabled", true);
  jQuery("#gameTurnIndicatorText").text(gst.turnCount + " / " + MAX_TURN_COUNT);

  const actionItem1 = new ActionItem(0, area.actions[0]);
  const actionItem2 = new ActionItem(1, area.actions[1]);
  const actionItem3 = new ActionItem(2, area.actions[2]);

  loadActionItems(actionItem1, "#gameAction1", ACTION_ITEM_PAGE);
  loadActionItems(actionItem2, "#gameAction2", ACTION_ITEM_PAGE);
  loadActionItems(actionItem3, "#gameAction3", ACTION_ITEM_PAGE);
};

const executeAction = action => {
  console.log("hello");
  console.log("#####type" + action.type);
  if (gst.turnCount === 2) {
    jQuery("#gameEndDayButton").attr("disabled", false);
  }

  if (gst.turnCount < 3 && gst.character.money >= action.cost) {
    gst.turnCount++;
    jQuery("#gameTurnIndicatorText").text(
      gst.turnCount + " / " + MAX_TURN_COUNT
    );

    switch (action.type) {
      case "hunger":
        gst.character.money = gst.character.money - action.cost;

        round(
          (gst.character.hunger.value =
            gst.character.hunger.value +
            action.value * gst.character.hunger.multiplier),
          0
        );
        if (gst.character.hunger.value > 100) {
          gst.character.hunger.value = 100;
        }
        activeResourceBars[0].updateState(gst.character.hunger.value);
        break;
      case "life":
        gst.character.money = gst.character.money - action.cost;
        gst.character.life.value = round(
          gst.character.life.value +
            action.value * gst.character.life.multiplier,
          0
        );
        if (gst.character.life.value > 100) {
          gst.character.life.value = 100;
        }
        console.log(gst.character.life.value);
        activeResourceBars[1].updateState(gst.character.life.value);
        break;
      case "learn":
        gst.character.money = gst.character.money - action.cost;
        gst.character.learn.value = round(
          gst.character.learn.value +
            action.value * gst.character.learn.multiplier,
          0
        );
        if (gst.character.learn.value > 100) {
          gst.character.learn.value = 100;
        }
        activeResourceBars[2].updateState(gst.character.learn.value);
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
};

const loadModal = url => {
  jQuery("#modal").load(url, () => {
    jQuery(".modal").css({
      display: "unset"
    });
  });
};

const closeModal = () => {
  jQuery("#modal").css({ display: "none" });
};
