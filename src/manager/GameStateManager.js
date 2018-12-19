class GameStateManager {
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

  /**
   * inits the game data stored as json in data-folder
   * asynchronous request -> returns a promise
   */
  initGameData() {
    var initPromise = new Promise(function(resolve, reject) {
      let hungerActions = [];
      jQuery.getJSON("./data/actions/hungerActions.json", data => {
        hungerActions = data;
        GameStateManager.getInstance().hungerActions = hungerActions;
        console.log(GameStateManager.getInstance().hungerActions);
      });

      let lifeActions = [];
      jQuery.getJSON("./data/actions/lifeActions.json", data => {
        lifeActions = data;
        GameStateManager.getInstance().lifeActions = lifeActions;
        console.log(GameStateManager.getInstance().lifeActions);
      });

      let learnActions = [];
      jQuery.getJSON("./data/actions/learnActions.json", data => {
        learnActions = data;
        GameStateManager.getInstance().learnActions = learnActions;
        console.log(GameStateManager.getInstance().learnActions);
      });

      const actions = [hungerActions, lifeActions, learnActions];

      let areas = [];
      jQuery.getJSON("./data/area/areas.json", data => {
        areas = data;
        GameStateManager.getInstance().areas = areas;
        console.log(GameStateManager.getInstance().areas);
        //FIX ME, fragt den letzten ab und resolvt dann
        resolve();
      });
    });

    this.initPromise = initPromise;
  }

  getAreaById(id) {
    //FIXME: id != index
    return this.areas[id];
  }

  playMusic() {
    var audio = new Audio("../assets/audio/background-music.mp3");
    audio.loop = true;
    audio.volume = 0.2;
    audio.play();
  }
}
