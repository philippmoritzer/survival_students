class ActionItem {
  constructor(id, action) {
    this.id = id;
    this.action = action;
  }

  makeElementUnique() {}

  setAttributes() {}

  select() {}

  init() {
    this.makeElementUnique();
    this.setAttributes();
    this.select();
  }
}
