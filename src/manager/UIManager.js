let activeResourceBars = [];
let currentAction = null;
let tempRemoveItem = null;
let actionHistory = [];

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
    updateMoneyUI(gst.character.money);

    if (action.reward) {
      gst.addItem(action.reward);
    }
    actionHistory.push(action);
  }
};

/**
 * method has to be called when a resource value changes
 * to update the UI
 */
const updateAllResourceBars = () => {
  activeResourceBars[0].updateState(gst.character.hunger.value);
  activeResourceBars[1].updateState(gst.character.life.value);
  activeResourceBars[2].updateState(gst.character.learn.value);
};

/**
 * updates the UI (Backpack) when adding an item
 * @param {*} item
 */
const addItemUI = item => {
  const invItem = new InventoryItem(item.id, item);

  jQuery.get(
    "./components/hud/inventory/inventory-item/inventory-item.html",
    data => {
      jQuery("#inventoryGrid").append(data);
      invItem.init();
    }
  );
};

const removeItemsUI = item => {
  console.log("##DELETE");
  jQuery("#inventoryGridItem" + item.id).remove();
  console.log("inventoryGridItem" + item.id);
  closeModal();
};

/**
 * updates the money
 */
const updateMoneyUI = newValue => {
  jQuery(".gameMoneyText").animate(
    {
      opacity: "0"
    },
    100
  );
  jQuery("#gameMoney").text(newValue);
  jQuery("#gameMoney").animate(
    {
      opacity: "1"
    },
    1000
  );
};

const initLoseUI = () => {
  jQuery("#main").load("./sites/outro/outro.html");
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
