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
    jQuery("#actionResourceImg").attr(
      "id",
      jQuery("#actionResourceImg").attr("id") + this.id
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
          "background-color": "rgba(249, 168, 37, 0.9)"
        });
        break;
    }

    if (this.action.cost > gst.character.money) {
      jQuery("#actionCost" + this.id).css({
        color: "#8B0000"
      });
    }
  }

  setAttributes() {
    jQuery("#actionName" + this.id).text(this.action.name);
    jQuery("#actionCost" + this.id).text(this.action.cost);
    jQuery("#actionDesc" + this.id).text(this.action.desc);
    if (this.action.img && this.action.img !== "img") {
      //TODO img löschen
      const imgPath = "../assets/images/actions/";
      jQuery("#actionImage" + this.id).attr("src", imgPath + this.action.img);
    }
    switch (this.action.type) {
      case "hunger":
        jQuery("#actionResourceImg" + this.id).attr(
          "src",
          "../assets/images/hunger.png"
        );
        break;
      case "life":
        jQuery("#actionResourceImg" + this.id).attr(
          "src",
          "../assets/images/life.png"
        );
        break;
      case "learn":
        jQuery("#actionResourceImg" + this.id).attr(
          "src",
          "../assets/images/learn.png"
        );
        break;
    }
  }

  select() {
    jQuery("#actionContainer" + this.id).on("click", () => {
      playPopupSound();

      currentAction = this.action;
      loadModal(
        "./components/modals/action-confirmation-modal/action-confirmation-modal.html"
      );
    });
  }

  init() {
    this.makeElementUnique();
    this.setStyles();
    this.setAttributes();
    this.select();
  }
}
