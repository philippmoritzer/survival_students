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

  init() {
    this.makeElementUnique();
    this.setAttributes();
  }
}
