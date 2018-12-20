class ActionItem {
  constructor(id, action) {
    this.id = id;
    this.action = action;
  }

  makeElementUnique() {
    jQuery("#actionName").attr(
      "id",
      jQuery("#actionName").attr("id") + this.id
    );
    jQuery("#actionContainer").attr(
      "id",
      jQuery("#actionContainer").attr("id") + this.id
    );
    jQuery("#actionImage").attr(
      "id",
      jQuery("#actionImage").attr("id") + this.id
    );
    jQuery("#actionCost").attr(
      "id",
      jQuery("#actionCost").attr("id") + this.id
    );
  }

  setStyles() {
    console.log(this.action.type);
    switch (this.action.type) {
      case "hunger":
        jQuery("#actionContainer" + this.id).css({
          "background-color": "rgba(27, 94, 32, 0.7)"
        });
        break;
      case "life":
        jQuery("#actionContainer" + this.id).css({
          "background-color": "rgba(198, 40, 40, 0.7)"
        });
        break;
      case "learn":
        jQuery("#actionContainer" + this.id).css({
          "background-color": "rgba(249, 168, 37, 0.7)"
        });
        break;
    }
  }

  setAttributes() {
    jQuery("#actionName" + this.id).text(this.action.name);
    jQuery("#actionCost" + this.id).text(this.action.cost);
  }

  select() {}

  init() {
    this.makeElementUnique();
    this.setStyles();
    this.setAttributes();
    this.select();
  }
}
