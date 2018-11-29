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
    jQuery("#nameB").attr("id", jQuery("#nameB").attr("id") + this.id);
    jQuery("#money").attr("id", jQuery("#money").attr("id") + this.id);
    jQuery("#hunger").attr("id", jQuery("#hunger").attr("id") + this.id);
    jQuery("#hungerM").attr("id", jQuery("#hungerM").attr("id") + this.id);
    jQuery("#life").attr("id", jQuery("#life").attr("id") + this.id);
    jQuery("#lifeM").attr("id", jQuery("#lifeM").attr("id") + this.id);
    jQuery("#learn").attr("id", jQuery("#learn").attr("id") + this.id);
    jQuery("#learnM").attr("id", jQuery("#learnM").attr("id") + this.id);
    jQuery("#card").attr("id", jQuery("#card").attr("id") + this.id);
    jQuery("#characterSelectionDescription").attr(
      "id",
      jQuery("#characterSelectionDescription").attr("id") + this.id
    );
    jQuery("#characterSlideHungerGradient").attr(
      "id",
      jQuery("#characterSlideHungerGradient").attr("id") + this.id
    );
    jQuery("#characterSlideLifeGradient").attr(
      "id",
      jQuery("#characterSlideLifeGradient").attr("id") + this.id
    );
    jQuery("#characterSlideLearnGradient").attr(
      "id",
      jQuery("#characterSlideLearnGradient").attr("id") + this.id
    );
  }

  setSpecificStyle() {
    jQuery("#characterSlideHungerGradient" + this.id).css({
      width: this.hunger + "%"
    });
    jQuery("#characterSlideLifeGradient" + this.id).css({
      width: this.life + "%"
    });
    jQuery("#characterSlideLearnGradient" + this.id).css({
      width: this.learn + "%"
    });
  }

  setCharacterAttributes() {
    jQuery("#name" + this.id).text(NAME_INDEX_PAIR[this.id].name);
    jQuery("#nameB" + this.id).text(NAME_INDEX_PAIR[this.id].name);
    jQuery("#money" + this.id).text(this.money);
    jQuery("#hunger" + this.id).text(this.hunger);
    jQuery("#hungerM" + this.id).text(this.hunger);
    jQuery("#life" + this.id).text(this.life);
    jQuery("#lifeM" + this.id).text(this.life);
    jQuery("#learn" + this.id).text(this.learn);
    jQuery("#learnM" + this.id).text(this.learn);
  }

  selectIndex() {
    jQuery("#characterSlide" + this.id).on("click", () => {
      console.log("happens selectIndex");
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

  addTurnEvent() {
    jQuery("#name" + this.id).on("click", () => {
      jQuery("#characterSlide" + this.id).addClass("is-flipped");
    });
    jQuery("#nameB" + this.id).on("click", () => {
      jQuery("#characterSlide" + this.id).removeClass("is-flipped");
    });
  }

  init() {
    this.makeElementUnique();
    this.setCharacterAttributes();
    this.setSpecificStyle();
    this.selectIndex();
    this.addTurnEvent();
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
