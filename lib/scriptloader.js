getScripts();

/**
 * gets needed scripts.
 */
function getScripts() {
  jQuery.getScript("./models/Character.js");
  jQuery.getScript("./models/Action.js");
  jQuery.getScript("./helpers/constants.js");
  jQuery.getScript("./manager/UIManager.js");
}
