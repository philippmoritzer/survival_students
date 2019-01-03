class CharacterSlide {
  constructor(id, money, hunger, life, learn) {
    this.id = id;
    this.money = money;
    this.hunger = hunger;
    this.life = life;
    this.learn = learn;
  }

  makeElementUnique() {
    jQuery("#characterSlideName").attr(
      "id",
      jQuery("#characterSlideName").attr("id") + this.id
    );
    jQuery("#characterSlideMoney").attr(
      "id",
      jQuery("#characterSlideMoney").attr("id") + this.id
    );

    jQuery("#characterSlideHungerResource").attr(
      "id",
      jQuery("#characterSlideHungerResource").attr("id") + this.id
    );

    jQuery("#characterSlideLifeResource").attr(
      "id",
      jQuery("#characterSlideLifeResource").attr("id") + this.id
    );

    jQuery("#characterSlideLearnResource").attr(
      "id",
      jQuery("#characterSlideLearnResource").attr("id") + this.id
    );

    jQuery("#characterSlideCharacterImage").attr(
      "id",
      jQuery("#characterSlideCharacterImage").attr("id") + this.id
    );

    jQuery("#characterSlideContainer").attr(
      "id",
      jQuery("#characterSlideContainer").attr("id") + this.id
    );
  }

  setSpecificStyle() {}

  setCharacterAttributes() {
    jQuery("#characterSlideName" + this.id).text(NAME_INDEX_PAIR[this.id].name);
    jQuery("#characterSlideCharacterImage" + this.id).attr(
      "src",
      NAME_INDEX_PAIR[this.id].portrait
    );
    jQuery("#characterSlideMoney" + this.id).text(this.money);

    const resourceBarCSlide1 = new ResourceBar(
      uuidv4(),
      RESOURCE_BARS[0].type,
      RESOURCE_BARS[0].color1,
      RESOURCE_BARS[0].color2,
      RESOURCE_BARS[0].color3,
      RESOURCE_BARS[0].image,
      this.hunger.value
    );

    const resourceBarCSlide2 = new ResourceBar(
      uuidv4(),
      RESOURCE_BARS[1].type,
      RESOURCE_BARS[1].color1,
      RESOURCE_BARS[1].color2,
      RESOURCE_BARS[1].color3,
      RESOURCE_BARS[1].image,
      this.life.value
    );

    const resourceBarCSlide3 = new ResourceBar(
      uuidv4(),
      RESOURCE_BARS[2].type,
      RESOURCE_BARS[2].color1,
      RESOURCE_BARS[2].color2,
      RESOURCE_BARS[2].color3,
      RESOURCE_BARS[2].image,
      this.learn.value
    );

    this.loadResourceBars(
      resourceBarCSlide1,
      "#characterSlideHungerResource" + this.id,
      RESOURCE_BAR_PAGE
    );

    this.loadResourceBars(
      resourceBarCSlide2,
      "#characterSlideLifeResource" + this.id,
      RESOURCE_BAR_PAGE
    );

    this.loadResourceBars(
      resourceBarCSlide3,
      "#characterSlideLearnResource" + this.id,
      RESOURCE_BAR_PAGE
    );
  }

  loadResourceBars(resourceBar, identifier, htmlpage) {
    jQuery(document).ready(() => {
      jQuery(identifier).innerHTML = jQuery(identifier).load(htmlpage, () => {
        resourceBar.init();
        jQuery("#resourceBar" + resourceBar.id).css({
          width: "75%",
          height: "80%"
        });
      });
    });
  }

  selectIndex() {
    jQuery("#characterSlideContainer" + this.id).on("click", () => {
      console.log("hi");
      selectCharacter(this.id);
    });
  }

  init() {
    this.makeElementUnique();
    this.setCharacterAttributes();
    this.selectIndex();
  }
}
