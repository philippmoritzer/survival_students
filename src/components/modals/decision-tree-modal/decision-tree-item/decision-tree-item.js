class DecisionTreeItem {
  constructor(id, action, calcValue) {
    this.id = id;
    this.action = action;
    this.calcValue = calcValue;
  }

  makeElementsUnique() {
    jQuery("#decisionTreeItemActionName").attr(
      "id",
      jQuery("#decisionTreeItemActionName").attr("id") + this.id
    );
    jQuery("#decisionTreeItemMoney").attr(
      "id",
      jQuery("#decisionTreeItemMoney").attr("id") + this.id
    );
    jQuery("#decisionTreeItemResourceImg").attr(
      "id",
      jQuery("#decisionTreeItemResourceImg").attr("id") + this.id
    );
    jQuery("#decisionTreeItemResourceText").attr(
      "id",
      jQuery("#decisionTreeItemResourceText").attr("id") + this.id
    );
  }

  setAttributes() {
    jQuery("#decisionTreeItemActionName" + this.id).text(this.action.name);
    jQuery("#decisionTreeItemMoney" + this.id).text(this.action.cost);
    jQuery("#decisionTreeItemResourceText" + this.id).text(this.calcValue);
    switch (this.action.type) {
      case "hunger":
        jQuery("#decisionTreeItemResourceImg" + this.id).attr(
          "src",
          "../assets/images/hunger.png"
        );
        break;
      case "life":
        jQuery("#decisionTreeItemResourceImg" + this.id).attr(
          "src",
          "../assets/images/life.png"
        );
        break;
      case "learn":
        jQuery("#decisionTreeItemResourceImg" + this.id).attr(
          "src",
          "../assets/images/learn.png"
        );
        break;
    }
  }

  init() {
    this.makeElementsUnique();
    this.setAttributes();
  }
}
