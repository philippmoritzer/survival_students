/**
 * gets needed scripts.
 */
const getScripts = () => {
  jQuery.getScript("./models/Character.js");
  jQuery.getScript("./models/Action.js");
  jQuery.getScript("./models/Resource.js");
  jQuery.getScript("./helpers/constants.js");
  jQuery.getScript("./helpers/methods.js");
  jQuery.getScript("./manager/UIManager.js");
  jQuery.getScript(
    "./components/modals/decision-tree-modal/decision-tree-item/decision-tree-item.js"
  );
  jQuery.getScript(
    "./components/modals/decision-tree-modal/decision-tree-title/decision-tree-title.js"
  );
  jQuery.getScript(
    "./components/modals/tutorial-modal/tutorial-element/tutorial-element.js"
  );
};

getScripts();
