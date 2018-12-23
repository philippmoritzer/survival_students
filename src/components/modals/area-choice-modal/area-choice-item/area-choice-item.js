class AreaChoiceItem {
  constructor(id, name, backgroundImage) {
    this.id = id;
    this.name = name;
    this.backgroundImage = backgroundImage;
  }

  makeElementUnique() {
    jQuery("#areaChoiceContainer").attr(
      "id",
      jQuery("#areaChoiceContainer").attr("id") + this.id
    );
    jQuery("#areaChoiceName").attr(
      "id",
      jQuery("#areaChoiceName").attr("id") + this.id
    );
  }

  setAttributes() {
    jQuery("#areaChoiceName" + this.id).text(this.name);
    jQuery("#areaChoiceContainer" + this.id).css({
      "background-image": "url(../assets/scenes/" + this.backgroundImage + ")"
    });
  }

  selectIndex() {
    jQuery("#areaChoiceContainer" + this.id).on("click", () => {
      gst.changeArea(this.id);
    });
  }

  init() {
    this.makeElementUnique();
    this.setAttributes();
    this.selectIndex();
  }
}
