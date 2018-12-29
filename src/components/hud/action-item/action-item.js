class ActionItem {
  constructor(id, action) {
    this.id = id;
    this.action = action;
  }

  makeElementUnique() {
    jQuery("#actionContainer").attr(
      "id",
      jQuery("#actionContainer").attr("id") + this.id
    );
    jQuery("#actionName").attr(
      "id",
      jQuery("#actionName").attr("id") + this.id
    );
    jQuery("#actionDesc").attr(
      "id",
      jQuery("#actionDesc").attr("id") + this.id
    );
    jQuery("#actionImage").attr(
      "id",
      jQuery("#actionImage").attr("id") + this.id
    );
    jQuery("#actionCost").attr(
      "id",
      jQuery("#actionCost").attr("id") + this.id
    );
    jQuery("#actionLabelResource").attr(
      "id",
      jQuery("#actionLabelResource").attr("id") + this.id
    );
    jQuery("#actionResourceCost").attr(
      "id",
      jQuery("#actionResourceCost").attr("id") + this.id
    );
  }

  setStyles() {
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
    jQuery("#actionDesc" + this.id).text(this.action.desc);
    jQuery("#actionLabelResource" + this.id).text(this.action.type + ": ");
    jQuery("#actionResourceCost" + this.id).text(this.action.value);
    if (this.action.img && this.action.img !== "img") {
      //TODO img löschen
      const imgPath = "../assets/images/actions/";
      jQuery("#actionImage" + this.id).attr("src", imgPath + this.action.img);
    }
  }

  select() {
    jQuery("#actionContainer" + this.id).on("click", () => {
      currentAction = this.action;
      loadModal(
        "./components/modals/action-confirmation-modal/action-confirmation-modal.html"
      );
      //TODO: Execute action -> modal
      //executeAction(this.action);
    });
  }

  init() {
    this.makeElementUnique();
    this.setStyles();
    this.setAttributes();
    this.select();
  }
}
