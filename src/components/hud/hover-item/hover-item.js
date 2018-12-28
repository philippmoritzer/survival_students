class HoverItem {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  makeElementsUnique() {
    jQuery("#hoverItemContainer").attr(
      "id",
      jQuery("#hoverItemContainer").attr("id") + this.id
    );
    jQuery("#hoverItemTitle").attr(
      "id",
      jQuery("#hoverItemTitle").attr("id") + this.id
    );
    jQuery("#hoverItemDesc").attr(
      "id",
      jQuery("#hoverItemDesc").attr("id") + this.id
    );
    jQuery("#hoverItemSellPrice").attr(
      "id",
      jQuery("#hoverItemSellPrice").attr("id") + this.id
    );
  }

  setAttributes() {
    jQuery("#hoverItemTitle" + this.id).text(this.item.title);
    jQuery("#hoverItemDesc" + this.id).text(this.item.description);
    jQuery("#hoverItemSellPrice" + this.id).text(
      "Verkaufen für: " + this.item.sellfor
    );
  }

  init() {
    this.makeElementsUnique();
    this.setAttributes();
  }
}
