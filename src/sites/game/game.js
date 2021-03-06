const gst = GameStateManager.getInstance();
stopIntroMusic();

jQuery("#gameTitle").text("Survival - Playing as " + gst.character.name);

/**
 * method to start a new day
 */
const newDayModal = () => {
  gst.changeDay();

  jQuery("#modal").load(
    "./components/modals/introduction-modal/introduction-modal.html",
    () => {
      jQuery("#introductionText").text("TAG " + gst.day);
      jQuery("#modal").animate({ opacity: 1 }, "slow", () => {
        jQuery("#modal").css({ display: "unset" });
        window.setTimeout(() => {
          jQuery("#modal")
            .css({})
            .animate({ opacity: 0 }, "slow", () => {
              jQuery("#modal").css({ display: "none", opacity: 1 });
            });
        }, 1750);
      });
    }
  );
  jQuery("#gameActionBarTopItemDay").text("Tag  " + gst.day + " / 30");
  if (gst.day === 1) {
    setTimeout(function() {
      loadModal("./components/modals/tutorial-modal/tutorial-modal.html");
      initTutorialModal();
    }, 3500);
  }
};

jQuery(document).ready(() => {
  jQuery("#gameCharacterbar").load(
    "./components/hud/name-image-container/name-image-container.html",
    () => {
      //initial call for first day
      newDayModal();
    }
  );
});

const loadResourceBars = (resourceBar, identifier, htmlpage) => {
  jQuery(document).ready(() => {
    jQuery(identifier).innerHTML = jQuery(identifier).load(htmlpage, () => {
      resourceBar.init();
    });
  });
};

const resource_bar1 = new ResourceBar(
  0,
  RESOURCE_BARS[0].type,
  RESOURCE_BARS[0].color1,
  RESOURCE_BARS[0].color2,
  RESOURCE_BARS[0].color3,
  RESOURCE_BARS[0].image,
  gst.character.hunger.value
);

const resource_bar2 = new ResourceBar(
  1,
  RESOURCE_BARS[1].type,
  RESOURCE_BARS[1].color1,
  RESOURCE_BARS[1].color2,
  RESOURCE_BARS[1].color3,
  RESOURCE_BARS[1].image,
  gst.character.life.value
);

const resource_bar3 = new ResourceBar(
  2,
  RESOURCE_BARS[2].type,
  RESOURCE_BARS[2].color1,
  RESOURCE_BARS[2].color2,
  RESOURCE_BARS[2].color3,
  RESOURCE_BARS[2].image,
  gst.character.learn.value
);

activeResourceBars.push(resource_bar1);
activeResourceBars.push(resource_bar2);
activeResourceBars.push(resource_bar3);

loadResourceBars(resource_bar1, "#res1", RESOURCE_BAR_PAGE);
loadResourceBars(resource_bar2, "#res2", RESOURCE_BAR_PAGE);
loadResourceBars(resource_bar3, "#res3", RESOURCE_BAR_PAGE);

jQuery("#gameEndDayButton").on("click", () => {
  playPopupSound();
  newDayModal();
});

jQuery("#gameNavigator").on("click", () => {
  playPopupSound();
  loadModal("./components/modals/area-choice-modal/area-choice-modal.html");
});

/**
 * method for changing the area
 * @param {area} area to change to
 */
const execAreaChange = area => {
  jQuery("#main").animate({ opacity: 0 }, "slow", () => {
    jQuery("#main")
      .css({
        background:
          "url('../assets/scenes/" +
          area.backgroundImage +
          "') no-repeat center center fixed"
      })
      .animate({ opacity: 1 });
    jQuery("#modal").css({ display: "none" });
  });
  changeAreaMusic(area.index);

  const actionItem1 = new ActionItem(0, area.actions[0]);
  const actionItem2 = new ActionItem(1, area.actions[1]);
  const actionItem3 = new ActionItem(2, area.actions[2]);

  loadActionItems(actionItem1, "#gameAction1", ACTION_ITEM_PAGE);
  loadActionItems(actionItem2, "#gameAction2", ACTION_ITEM_PAGE);
  loadActionItems(actionItem3, "#gameAction3", ACTION_ITEM_PAGE);

  jQuery("#gameActionBarTopItemLocation").text(gst.area.name);
};

const ACTION_ITEM_PAGE = "./components/hud/action-item/action-item.html";

const loadActionItems = (actionItem, identifier, htmlpage) => {
  jQuery(document).ready(() => {
    jQuery(identifier).innerHTML = jQuery(identifier).load(htmlpage, () => {
      actionItem.init();
    });
  });
};

gst.initPromise.then(val => {
  gst.loadCharacterSpecificActions().then(val => {
    gst.changeAreaTasks();
    gst.changeArea(0);
    const area = gst.getAreaByIndex(0);
    const actionItem1 = new ActionItem(0, area.actions[0]);
    const actionItem2 = new ActionItem(1, area.actions[1]);
    const actionItem3 = new ActionItem(2, area.actions[2]);

    loadActionItems(actionItem1, "#gameAction1", ACTION_ITEM_PAGE);
    loadActionItems(actionItem2, "#gameAction2", ACTION_ITEM_PAGE);
    loadActionItems(actionItem3, "#gameAction3", ACTION_ITEM_PAGE);
  });

  //initial loading of action items into the divs.
});

const switchItems = () => {
  gst.areas;
};

inventoryDisplayed = false;

const hideInventory = () => {
  jQuery("#gameInventory").css({
    display: "none"
  });
  inventoryDisplayed = false;
};

jQuery("#gameInventory").load("./components/hud/inventory/inventory.html");

jQuery("#gameBackpack").on("click", () => {
  if (!inventoryDisplayed) {
    playOpenBackpackSound();
    const offset = jQuery("#gameBackpack").offset();
    jQuery("#gameInventory").css({
      top: offset.top,
      left: offset.left + 78,
      display: "unset"
    });
    inventoryDisplayed = true;
  } else {
    hideInventory();
  }
});

jQuery("#gameDecision").on("click", () => {
  playPopupSound();
  loadModal("./components/modals/decision-tree-modal/decision-tree-modal.html");
});

jQuery("#gameTutorial").on("click", () => {
  playPopupSound();
  loadModal("./components/modals/tutorial-modal/tutorial-modal.html");
  initTutorialModal();
});

jQuery("#gameCredits").on("click", () => {
  window.open("/src/sites/credits/credits.html", "_blank");
});
