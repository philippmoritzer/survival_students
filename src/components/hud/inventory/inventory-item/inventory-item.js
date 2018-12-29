class InventoryItem {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  makeElementUnique() {
    jQuery("#inventoryGridItem").attr(
      "id",
      jQuery("#inventoryGridItem").attr("id") + this.id
    );
    jQuery("#inventoryTooltipText").attr(
      "id",
      jQuery("#inventoryTooltipText").attr("id") + this.id
    );
    jQuery("#inventoryItemImage").attr(
      "id",
      jQuery("#inventoryItemImage").attr("id") + this.id
    );
  }

  setAttributes() {
    const preImagePath = "../assets/images/items/";

    jQuery("#inventoryItemImage" + this.id).attr(
      "src",
      preImagePath + this.item.image
    );
  }

  loadHoverItem() {
    const hoverItem = new HoverItem(this.id, this.item);
    jQuery("#inventoryTooltipText" + this.id).load(
      "./components/hud/hover-item/hover-item.html",
      () => {
        hoverItem.init();
      }
    );
  }

  initRightClickEvent() {
    jQuery("#inventoryGridItem" + this.id).on("click", () => {
      tempRemoveItem = this.item;
      loadModal("./components/modals/sell-item-modal/sell-item-modal.html");
    });
  }

  remove() {
    jQuery("#inventoryGridItem" + this.id).remove();
  }

  init() {
    this.makeElementUnique();
    this.setAttributes();
    this.loadHoverItem();
    this.initRightClickEvent();
  }
}
