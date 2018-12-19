const gst = GameStateManager.getInstance();

jQuery(document).ready(() => {
  jQuery("#gameCharacterbar").load(
    "./components/hud/name-image-container/name-image-container.html",
    () => {}
  );
});

const RESOURCE_BAR_PAGE = "./components/hud/resource-bar/resource-bar.html";

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
  gst.character.hunger
);

const resource_bar2 = new ResourceBar(
  1,
  RESOURCE_BARS[1].type,
  RESOURCE_BARS[1].color1,
  RESOURCE_BARS[1].color2,
  RESOURCE_BARS[1].color3,
  RESOURCE_BARS[1].image,
  gst.character.life
);

const resource_bar3 = new ResourceBar(
  2,
  RESOURCE_BARS[2].type,
  RESOURCE_BARS[2].color1,
  RESOURCE_BARS[2].color2,
  RESOURCE_BARS[2].color3,
  RESOURCE_BARS[2].image,
  gst.character.learn
);

loadResourceBars(resource_bar1, "#res1", RESOURCE_BAR_PAGE);
loadResourceBars(resource_bar2, "#res2", RESOURCE_BAR_PAGE);
loadResourceBars(resource_bar3, "#res3", RESOURCE_BAR_PAGE);

gst.playMusic();

jQuery("#gameBackpack").on("click", () => {
  //TODO
});

jQuery("#gameNavigator").on("click", () => {
  jQuery("#modal").load(
    "./components/modals/area-choice-modal/area-choice-modal.html",
    () => {
      jQuery("#modal").css({ display: "unset" });
    }
  );
});

/**
 * method for changing the area
 * @param {area} area to change to
 */
const execAreaChange = area => {
  console.log(area.backgroundImage);
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
};

const ACTION_ITEM_PAGE = "./components/hud/action-item/action-item.html";

const loadActionItems = (actionItem, identifier, htmlpage) => {
  jQuery(document).ready(() => {
    jQuery(identifier).innerHTML = jQuery(identifier).load(htmlpage, () => {
      actionItem.init();
    });
  });
};

//creating
//TODO: Randomize
//make sure data is loaded, if not, try again

gst.initPromise.then(function(val) {
  console.log("HALLOOOO");
  const actionItem1 = new ActionItem(0, gst.hungerActions[0]);
  const actionItem2 = new ActionItem(1, gst.hungerActions[1]);
  const actionItem3 = new ActionItem(2, gst.learnActions[0]);

  //initial loading of action items into the divs.
  loadActionItems(actionItem1, "#gameAction1", ACTION_ITEM_PAGE);
  loadActionItems(actionItem2, "#gameAction2", ACTION_ITEM_PAGE);
  loadActionItems(actionItem3, "#gameAction3", ACTION_ITEM_PAGE);
});
