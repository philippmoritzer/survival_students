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

  changeArea(area) {
    this.area = area;
  }

  initGameData() {
    let hungerActions = [];
    jQuery.getJSON("./data/actions/hungerActions.json", data => {
      hungerActions = data;
      console.log(hungerActions);
    });

    let lifeActions = [];
    jQuery.getJSON("./data/actions/lifeActions.json", data => {
      lifeActions = data;
      console.log(lifeActions);
    });

    let learnActions = [];
    jQuery.getJSON("./data/actions/learnActions.json", data => {
      learnActions = data;
      console.log(learnActions);
    });

    const actions = [hungerActions, lifeActions, learnActions];

    let areas = [];
    jQuery.getJSON("./data/area/areas.json", data => {
      areas = data;
      console.log(data);
    });
  }
}
