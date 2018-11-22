class GameStateManager {
  // loaded = false;

  constructor() {
    if (this.instance) {
      throw new Error("Constructor call is private, please use GameStateManager.getInstance()");
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
}
