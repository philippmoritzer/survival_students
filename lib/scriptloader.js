/**
 * gets needed scripts.
 */
const getScripts = () => {
  jQuery.getScript("./models/Resource.js");
  jQuery.getScript("./models/Character.js");
  jQuery.getScript("./helpers/methods.js");
  jQuery.getScript("./helpers/constants.js");
  jQuery.getScript("./manager/SoundManager.js");
  jQuery.getScript("./manager/UIManager.js");
  jQuery.getScript(
    "./components/modals/decision-tree-modal/decision-tree-modal-item/decision-tree-modal-item.js"
  );
  jQuery.getScript(
    "./components/modals/tutorial-modal/tutorial-element/tutorial-element.js"
  );
  jQuery.getScript("./components/hud/resource-bar/resource-bar.js");
};

getScripts();
