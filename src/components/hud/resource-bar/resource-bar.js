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

    console.log(IMAGE_PATH + this.image);
  }

  updateState(value) {
    jQuery("#progress" + this.id).css({ width: value + "%" });
    jQuery("#resourceBarText" + this.id).text(value + "%");
  }

  setProgress(progress) {
    this.progress = progress;
  }

  init() {
    this.makeElementUnique();
    this.setAttributes();
  }
}
