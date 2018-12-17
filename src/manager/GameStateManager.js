class GameStateManager {
  // loaded = false;

  constructor() {
    if (this.instance) {
      throw new Error(
        "Constructor call is private, please use GameStateManager.getInstance()"
      );
    }
  }

  static getInstance() {
    console.log(this.instance);
    if (!this.instance) {
      this.instance = new GameStateManager();
    }
    return this.instance;
  }

  setLoaded() {
    this.loaded = true;
  }

  setCharacter(character) {
    this.character = character;
  }

  changeArea(id) {
    this.area = this.getAreaById(id);
    execAreaChange(this.area);
  }

  setNavigationItemsLoaded() {
    this.navigationItemsLoaded = true;
  }

  initGameData() {
    let hungerActions = [];
    jQuery.getJSON("./data/actions/hungerActions.json", data => {
      hungerActions = data;
      this.hungerActions = hungerActions;
      console.log(this.hungerActions);
    });

    let lifeActions = [];
    jQuery.getJSON("./data/actions/lifeActions.json", data => {
      lifeActions = data;
      this.lifeActions = lifeActions;
      console.log(this.lifeActions);
    });

    let learnActions = [];
    jQuery.getJSON("./data/actions/learnActions.json", data => {
      learnActions = data;
      this.learnActions = learnActions;
      console.log(this.learnActions);
    });

    const actions = [hungerActions, lifeActions, learnActions];

    let areas = [];
    jQuery.getJSON("./data/area/areas.json", data => {
      areas = data;
      this.areas = areas;
      console.log(this.areas);
    });
  }

  getAreaById(id) {
    return this.areas[id];
  }
}
