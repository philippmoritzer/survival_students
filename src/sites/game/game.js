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
