class GameStateManager {
  constructor() {
    if (this.instance) {
      throw new Error(
        "Constructor call is private, please use GameStateManager.getInstance()"
      );
    }
  }

  static getInstance() {
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

  startGame() {
    this.day = 0;
    this.turnCount = 0;
    this.character.items = [];
    this.character.items.push(this.items[0]);
    this.win = false;
    this.dailyResources = [];
  }

  changeArea(index) {
    this.area = this.getAreaByIndex(index);

    execAreaChange(this.area);
  }

  setNavigationItemsLoaded() {
    this.navigationItemsLoaded = true;
  }

  saveDailyResources() {
    this.dailyResources.push({
      hungerVal: this.character.hunger.value,
      lifeVal: this.character.life.value,
      learnVal: this.character.learn.value
    });
  }

  changeDay() {
    playDayChangeMusic();
    this.changeAreaTasks();
    if (this.day !== 0) {
      this.executeResourceLoss();
      this.saveDailyResources();
    } else {
      this.saveDailyResources();
    }
    this.checkLosingCondition();
    if (this.day < 30) {
      this.day++;
      this.turnCount = 0;
      changeUIDay(this.area);
    } else {
      this.win = true;
      initOutroUI();
    }
  }

  /**
   * inits the game data stored as json in data-folder
   * asynchronous request -> returns a promise
   */
  initGameData() {
    let initPromise = new Promise((resolve, reject) => {
      let items = [];
      jQuery.getJSON("./data/items/items.json", data => {
        items = data;
        GameStateManager.getInstance().items = items;
      });

      let hungerActions = [];
      jQuery.getJSON("./data/actions/all/hunger-actions.json", data => {
        hungerActions = data;
        GameStateManager.getInstance().hungerActions = hungerActions;
      });

      let lifeActions = [];
      jQuery.getJSON("./data/actions/all/life-actions.json", data => {
        lifeActions = data;
        GameStateManager.getInstance().lifeActions = lifeActions;
      });

      let learnActions = [];
      jQuery.getJSON("./data/actions/all/learn-actions.json", data => {
        learnActions = data;
        GameStateManager.getInstance().learnActions = learnActions;
      });

      const actions = [hungerActions, lifeActions, learnActions];

      let areas = [];
      jQuery.getJSON("./data/area/areas.json", data => {
        areas = data;
        GameStateManager.getInstance().areas = areas;
        resolve();
      });
    });

    this.initPromise = initPromise;
  }

  loadCharacterSpecificActions() {
    let characterSpecificActionFolder = "character" + this.character.id;
    return new Promise((resolve, reject) => {
      jQuery.getJSON(
        "./data/actions/" +
          characterSpecificActionFolder +
          "/hunger-actions.json",
        data => {
          GameStateManager.getInstance().hungerActions = GameStateManager.getInstance().hungerActions.concat(
            data
          );
        }
      );
      jQuery.getJSON(
        "./data/actions/" +
          characterSpecificActionFolder +
          "/learn-actions.json",
        data => {
          GameStateManager.getInstance().learnActions = GameStateManager.getInstance().learnActions.concat(
            data
          );
        }
      );
      jQuery.getJSON(
        "./data/actions/" +
          characterSpecificActionFolder +
          "/life-actions.json",
        data => {
          GameStateManager.getInstance().lifeActions = GameStateManager.getInstance().lifeActions.concat(
            data
          );
          resolve();
        }
      );
    });
  }

  executeAction(action) {
    if (this.turnCount === 2) {
      updateGameDayEndButtonUI();
    }

    if (this.turnCount < 3 && this.character.money >= action.cost) {
      this.turnCount++;

      updateGameTurnIndicatorUI();
      let calculatedValue;
      switch (action.type) {
        case "hunger":
          this.character.money = this.character.money - action.cost;

          calculatedValue = round(
            action.value * this.character.hunger.multiplier,
            0
          );
          this.character.hunger.value =
            this.character.hunger.value + calculatedValue;

          if (this.character.hunger.value > 100) {
            this.character.hunger.value = 100;
          }

          updateResourceBarUI(0, this.character.hunger.value);
          break;
        case "life":
          this.character.money = this.character.money - action.cost;

          calculatedValue = round(
            action.value * this.character.life.multiplier,
            0
          );
          this.character.life.value =
            this.character.life.value + calculatedValue;
          if (this.character.life.value > 100) {
            this.character.life.value = 100;
          }
          updateResourceBarUI(1, this.character.life.value);
          break;
        case "learn":
          this.character.money = this.character.money - action.cost;
          calculatedValue = round(
            action.value * this.character.learn.multiplier,
            0
          );
          this.character.learn.value =
            this.character.learn.value + calculatedValue;
          if (this.character.learn.value > 100) {
            this.character.learn.value = 100;
          }
          updateResourceBarUI(2, this.character.learn.value);

          break;
      }
      updateMoneyUI(this.character.money);

      if (action.reward) {
        this.addItem(action.reward);
      }
      actionHistory.push({ action: action, calcValue: calculatedValue });
    }
  }

  getAreaByIndex(index) {
    for (let i = 0; i < this.areas.length; i++) {
      const area = this.areas[i];
      if (area.index === index) {
        return area;
      }
    }
  }
  /**
   * Method that inits the Tasks in a certain Area
   * needs to be called once the game starts (on day one)
   * and on every day change
   */
  changeAreaTasks() {
    for (let area of this.areas) {
      area.actions = [];
      switch (area.name) {
        case "Home":
          for (let i = 0; i < ACTIONS_PER_AREA; i++) {
            switch (i) {
              case 0:
                let sAction = this.hungerActions[
                  Math.floor(Math.random() * this.hungerActions.length)
                ];

                area.actions.push(
                  this.evaluateAreaActionFit(sAction, this.hungerActions, area)
                );
                break;
              case 1:
                let sAction2 = this.lifeActions[
                  Math.floor(Math.random() * this.lifeActions.length)
                ];

                area.actions.push(
                  this.evaluateAreaActionFit(sAction2, this.lifeActions, area)
                );
                break;
              case 2:
                let sAction3 = this.learnActions[
                  Math.floor(Math.random() * this.learnActions.length)
                ];

                area.actions.push(
                  this.evaluateAreaActionFit(sAction3, this.learnActions, area)
                );
                break;
            }
          }

          break;
        case "Foodcourt":
          for (let i = 0; i < ACTIONS_PER_AREA; i++) {
            let foodcourtAction = this.hungerActions[
              Math.floor(Math.random() * this.hungerActions.length)
            ];

            area.actions.push(
              this.evaluateAreaActionFit(
                foodcourtAction,
                this.hungerActions,
                area
              )
            );
          }
          break;
        case "Hochschule":
          for (let i = 0; i < ACTIONS_PER_AREA; i++) {
            let hochschuleAction = this.learnActions[
              Math.floor(Math.random() * this.learnActions.length)
            ];
            area.actions.push(
              this.evaluateAreaActionFit(
                hochschuleAction,
                this.learnActions,
                area
              )
            );
          }
          break;
        case "City":
          for (let i = 0; i < ACTIONS_PER_AREA; i++) {
            let cityAction = this.lifeActions[
              Math.floor(Math.random() * this.lifeActions.length)
            ];
            area.actions.push(
              this.evaluateAreaActionFit(cityAction, this.lifeActions, area)
            );
          }
          break;
        case "Sportplatz":
          for (let i = 0; i < ACTIONS_PER_AREA; i++) {
            let rndAction = getRandomInt(0, 2);
            let sportActions = null;

            switch (rndAction) {
              case 0:
                sportActions = this.learnActions;
                break;
              case 1:
                sportActions = this.hungerActions;
                break;
              case 2:
                sportActions = this.lifeActions;
                break;
            }

            let sportAction =
              sportActions[Math.floor(Math.random() * sportActions.length)];
            area.actions.push(
              this.evaluateAreaActionFit(sportAction, sportActions, area)
            );
          }
          break;
      }
    }
    return this.areas;
  }

  /**
   *  makes sure the right action is displayed only in the right area
   * called in method changeAreaTasks();
   *
   * @param action -initial action
   * @param actions wanted actionArray (hunger, life or learn)
   * @param area - the area where the action should be checked for
   */
  evaluateAreaActionFit(action, actions, area) {
    while (action.area !== area.index) {
      action = actions[Math.floor(Math.random() * actions.length)];
      if (!action.area) {
        if (action.area !== 0) {
          break;
        }
      }
    }
    return action;
  }

  /**
   * Loses predefined Value each day
   * call in changeDay()-Method
   */
  executeResourceLoss() {
    this.character.hunger.value =
      this.character.hunger.value - this.character.hunger.lossPerDay;
    this.character.life.value =
      this.character.life.value - this.character.life.lossPerDay;
    this.character.learn.value =
      this.character.learn.value - this.character.learn.lossPerDay;
    updateAllResourceBars();
  }

  /**
   * method that checks if losing condition is met
   * needs to be called whenever the character is losing a
   * resource
   */
  checkLosingCondition() {
    if (
      this.character.hunger.value <= 0 ||
      this.character.life.value <= 0 ||
      this.character.learn.value <= 0
    ) {
      initOutroUI();
    }
  }

  /**
   * adds an item to a character
   * @param {item-id} id
   */
  addItem(id) {
    const item = this.getItemById(id);
    this.character.items.push(item);

    if (item.type && item.value) {
      switch (item.type) {
        case "hunger":
          this.character.hunger.multiplier =
            this.character.hunger.multiplier + item.value;
          break;
        case "life":
          this.character.life.multiplier =
            this.character.life.multiplier + item.value;
          break;
        case "learn":
          this.character.learn.multiplier =
            this.character.learn.multiplier + item.value;
          break;
      }
    }
    addItemUI(item);
  }

  sellItem(item) {
    for (let i = 0; i < this.character.items.length; i++) {
      const element = this.character.items[i];
      if (item.id === element.id) {
        this.character.items.splice(i, 1);
        break;
      }
    }
    this.character.money = this.character.money + item.sellfor;
    //make sure the bonus of the item is not granted anymore
    if (item.type && item.value) {
      switch (item.type) {
        case "hunger":
          this.character.hunger.multiplier =
            this.character.hunger.multiplier - item.value;
          break;
        case "life":
          this.character.life.multiplier =
            this.character.life.multiplier - item.value;
          break;

        case "learn":
          this.character.learn.multiplier =
            this.character.learn.multiplier - item.value;
          break;
      }
    }
    updateMoneyUI(this.character.money);
    playCashSound();
    removeItemsUI(item);
  }

  /**
   * checks if the character owns an item
   * a character is only allowed to own a item once.
   * @param {*} item item-id to check
   */
  characterOwnsItem(item) {
    for (let i = 0; i < this.character.items.length; i++) {
      const element = this.character.items[i];

      if (element.id === item) {
        return true;
      }
    }

    return false;
  }

  /**
   * gets item by id
   * @param {*} id
   */
  getItemById(id) {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.id === id) {
        return item;
      }
    }
  }
}
