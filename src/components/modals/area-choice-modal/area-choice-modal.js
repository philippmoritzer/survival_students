function loadAreaItem(areaChoiceItem, identifier, htmlpage) {
  jQuery(document).ready(() => {
    jQuery(identifier).innerHTML = jQuery(identifier).load(htmlpage, () => {
      areaChoiceItem.init();
    });
  });
}

function load() {
  for (i = 0; i < gst.areas.length; i++) {
    let area = gst.areas[i];
    const areaItem = new AreaChoiceItem(i, area.name, area.backgroundImage);
    loadAreaItem(areaItem, "#areaChoiceItem" + i, AREA_CHOICE_ITEM_PAGE);
    gst.setNavigationItemsLoaded();
  }
}

if (!gst.navigationItemsLoaded) {
  jQuery.getScript(
    "./components/modals/area-choice-modal/area-choice-item/area-choice-item.js",
    () => {
      load();
    }
  );
} else {
  load();
}
