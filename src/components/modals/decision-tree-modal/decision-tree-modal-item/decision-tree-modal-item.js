class DecisionTreeModalItem {
  constructor(id, actions) {
    this.id = id;
    this.actions = actions;
  }

  makeElementsUnique() {
    jQuery("#decisionTreeModalItemDay").attr(
      "id",
      jQuery("#decisionTreeModalItemDay").attr("id") + this.id
    );
    jQuery("#decisionTreeActionName1").attr(
      "id",
      jQuery("#decisionTreeActionName1").attr("id") + this.id
    );
    jQuery("#decisionTreeResouceGain1").attr(
      "id",
      jQuery("#decisionTreeResouceGain1").attr("id") + this.id
    );
    jQuery("#decisionTreeMoneyLoss1").attr(
      "id",
      jQuery("#decisionTreeMoneyLoss1").attr("id") + this.id
    );
  }

  setAttributes() {
    jQuery("#decisionTreeModalItemDay" + this.id).text("Tag " + (this.id + 1));
    jQuery("#decisionTreeActionName1" + this.id).text(
      this.actions[0].action.name
    );

    jQuery("#decisionTreeMoneyLoss1" + this.id).text(
      this.actions[0].action.cost
    );
    jQuery("#decisionTreeResouceGain1" + this.id).text(
      this.actions[0].calcValue
    );
  }

  init() {
    this.makeElementsUnique();
    this.setAttributes();
  }
}
