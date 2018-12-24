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
};

getScripts();
