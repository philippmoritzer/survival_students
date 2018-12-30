jQuery("#inventoryCloseButton").on("click", () => {
  hideInventory();
});

jQuery(() => {
  for (let i = 0; i < gst.character.items.length; i++) {
    const item = gst.character.items[i];

    jQuery.get(
      "./components/hud/inventory/inventory-item/inventory-item.html",
      data => {
        let invItem = new InventoryItem(item.id, item);
        jQuery("#inventoryGrid").append(data);
        invItem.init();
      }
    );
  }
});
