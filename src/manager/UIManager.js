let activeResourceBars = [];
let currentAction = null;
let tempRemoveItem = null;
let actionHistory = [];

const changeUIDay = area => {
  if (gst.day === 1) {
  }

  // jQuery("#gameEndDayButton").attr("disabled", true);
  jQuery("#gameEndDayButton").addClass("gameEndDayButtonActionsLeft");
  jQuery("#gameTurnIndicatorText").text(gst.turnCount + " / " + MAX_TURN_COUNT);

  const actionItem1 = new ActionItem(0, area.actions[0]);
  const actionItem2 = new ActionItem(1, area.actions[1]);
  const actionItem3 = new ActionItem(2, area.actions[2]);

  loadActionItems(actionItem1, "#gameAction1", ACTION_ITEM_PAGE);
  loadActionItems(actionItem2, "#gameAction2", ACTION_ITEM_PAGE);
  loadActionItems(actionItem3, "#gameAction3", ACTION_ITEM_PAGE);
};

/**
 * Makes the "End Day"-Button available when all turns are used
 */
const updateGameDayEndButtonUI = () => {
  jQuery("#gameEndDayButton").removeClass("gameEndDayButtonActionsLeft");
};

/**
 * updates the current Turn (e.g.Aktionen 0/3 -> 1/3)
 */
const updateGameTurnIndicatorUI = () => {
  jQuery("#gameTurnIndicatorText").text(gst.turnCount + " / " + MAX_TURN_COUNT);
};

const updateResourceBarUI = (resourceBarIndex, value) => {
  if (resourceBarIndex >= 0 && resourceBarIndex <= 2) {
    activeResourceBars[resourceBarIndex].updateState(value);
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

/**
 * removes an item from the inventory (UI)
 * @param {*} item
 */
const removeItemsUI = item => {
  jQuery("#inventoryGridItem" + item.id).remove();
  closeModal();
};

/**
 * updates the money
 */
const updateMoneyUI = newValue => {
  playCashSound();
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

const initOutroUI = () => {
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
