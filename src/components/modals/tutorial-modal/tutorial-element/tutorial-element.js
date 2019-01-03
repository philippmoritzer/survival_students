class TutorialElement {
  constructor(id, text, bounds) {
    this.id = id;
    this.text = text;
    this.bounds = bounds;
  }

  makeElementsUnique() {
    jQuery("#tutorialElementContainer").attr(
      "id",
      jQuery("#tutorialElementContainer").attr("id") + this.id
    );
    jQuery("#tutorialElementText").attr(
      "id",
      jQuery("#tutorialElementText").attr("id") + this.id
    );
  }

  setAttributes() {
    console.log(JSON.stringify(this.bounds));
    jQuery("#tutorialElementContainer" + this.id).css({
      top: this.bounds.top + 10,
      left: this.bounds.left + 10,
      width: this.bounds.width - 20,
      height: this.bounds.height - 20
    });
    jQuery("#tutorialElementText" + this.id).text(this.text);
  }

  init() {
    this.makeElementsUnique();
    this.setAttributes();
  }
}
