class CharacterSlide {
  constructor(id, money, hunger, life, learn) {
    this.id = id;
    this.money = money;
    this.hunger = hunger;
    this.life = life;
    this.learn = learn;
  }

  makeElementUnique() {
    jQuery("#slide").attr("id", jQuery("#slide").attr("id") + this.id);
    jQuery("#money").attr("id", jQuery("#money").attr("id") + this.id);
    jQuery("#hunger").attr("id", jQuery("#hunger").attr("id") + this.id);
    jQuery("#life").attr("id", jQuery("#life").attr("id") + this.id);
    jQuery("#learn").attr("id", jQuery("#learn").attr("id") + this.id);
  }

  setCharacterAttributes() {
    jQuery("#money" + this.id).text(this.money);
    jQuery("#hunger" + this.id).text(this.hunger);
    jQuery("#life" + this.id).text(this.life);
    jQuery("#learn" + this.id).text(this.learn);
  }

  selectIndex() {
    jQuery("#slide" + this.id).on("click", () => {
      selectCharacter(this);
    });
  }

  init() {
    this.makeElementUnique();
    this.setCharacterAttributes();
    this.selectIndex();
  }
}
