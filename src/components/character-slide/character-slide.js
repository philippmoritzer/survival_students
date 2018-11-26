class CharacterSlide {
  constructor(id, money, hunger, life, learn) {
    this.id = id;
    this.money = money;
    this.hunger = hunger;
    this.life = life;
    this.learn = learn;
  }

  makeElementUnique() {
    jQuery("#characterSlide").attr(
      "id",
      jQuery("#characterSlide").attr("id") + this.id
    );
    jQuery("#name").attr("id", jQuery("#name").attr("id") + this.id);
    jQuery("#money").attr("id", jQuery("#money").attr("id") + this.id);
    jQuery("#hunger").attr("id", jQuery("#hunger").attr("id") + this.id);
    jQuery("#life").attr("id", jQuery("#life").attr("id") + this.id);
    jQuery("#learn").attr("id", jQuery("#learn").attr("id") + this.id);
    jQuery("#characterSelectionDescription").attr(
      "id",
      jQuery("#characterSelectionDescription").attr("id") + this.id
    );
  }

  setCharacterAttributes() {
    jQuery("#name" + this.id).text(NAME_INDEX_PAIR[this.id].name);
    jQuery("#money" + this.id).text(this.money);
    jQuery("#hunger" + this.id).text(this.hunger);
    jQuery("#life" + this.id).text(this.life);
    jQuery("#learn" + this.id).text(this.learn);
  }

  selectIndex() {
    jQuery("#characterSlide" + this.id).on("click", () => {
      selectCharacter(this);

      var ids = [0, 1, 2];
      this.removeActiveClasses(ids);
      jQuery("#characterSlide" + this.id).addClass("active");
      jQuery("#characterSelectionDescription" + this.id).css({
        visibility: "visible"
      });
      jQuery("#characterSelectionLaunchButton").attr("disabled", false);
    });
  }

  init() {
    this.makeElementUnique();
    this.setCharacterAttributes();

    this.selectIndex();
  }

  removeActiveClasses(ids) {
    for (var i in ids) {
      console.log(i);
      jQuery("#characterSlide" + i).removeClass("active");
      jQuery("#characterSelectionDescription" + this.id).css({
        visibility: "hidden"
      });
    }
  }
}
