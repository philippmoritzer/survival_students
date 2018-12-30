class DecisionTreeTitle {
  constructor(id) {
    this.id = id;
  }

  makeElementsUnique() {
    jQuery("#decisionTreeTitleText").attr(
      "id",
      jQuery("#decisionTreeTitleText").attr("id") + this.id
    );
  }

  setAttributes() {
    jQuery("#decisionTreeTitleText" + this.id).text("Tag " + (this.id + 1));
  }

  init() {
    this.makeElementsUnique();
    this.setAttributes();
  }
}
