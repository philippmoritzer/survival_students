class ResourceBar {
  constructor(id, type, color1, color2, color3, image, progress) {
    this.id = id;
    this.type = type;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
    this.image = image;
    this.progress = progress;
  }

  makeElementUnique() {
    jQuery("#resourceBar").attr(
      "id",
      jQuery("#resourceBar").attr("id") + this.id
    );
    jQuery("#resourceIcon").attr(
      "id",
      jQuery("#resourceIcon").attr("id") + this.id
    );
    jQuery("#numbersBar").attr(
      "id",
      jQuery("#numbersBar").attr("id") + this.id
    );
    jQuery("#progress").attr("id", jQuery("#progress").attr("id") + this.id);
    jQuery("#resourceBarText").attr(
      "id",
      jQuery("#resourceBarText").attr("id") + this.id
    );
  }

  setAttributes() {
    const IMAGE_PATH = "./../assets/images/";
    jQuery("#resourceBar" + this.id).css({ "background-color": this.color1 });
    jQuery("#numbersBar" + this.id).css({
      "background-image":
        "linear-gradient(" + this.color2 + "," + this.color3 + ")"
    });
    jQuery("#resourceIcon" + this.id).attr("src", IMAGE_PATH + this.image);
    jQuery("#resourceBarText" + this.id).text(this.progress + "%");
    jQuery("#progress" + this.id).animate(
      { width: this.progress + "%" },
      "slow"
    );
    jQuery("#progress" + this.id).css({
      "background-color": this.color1
    });
  }

  updateState(value) {
    jQuery("#progress" + this.id).css({ "box-shadow": "inset 0 0 15px white" });
    jQuery("#progress" + this.id).animate(
      { width: value + "%" },
      "slow",
      () => {
        jQuery("#progress" + this.id).css({
          "box-shadow": "inset 0 0 15px black"
        });
      }
    );
    jQuery("#resourceBarText" + this.id).text(value + "%");
  }

  init() {
    this.makeElementUnique();
    this.setAttributes();
    this.updateState(this.progress);
  }
}
