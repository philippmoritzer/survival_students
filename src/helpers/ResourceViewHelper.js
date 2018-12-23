let activeResourceBars = [];

const changeUIDay = () => {
  jQuery("#gameEndDayButton").attr("disabled", true);
  jQuery("#gameTurnIndicatorText").text(gst.turnCount + " / " + MAX_TURN_COUNT);
};
