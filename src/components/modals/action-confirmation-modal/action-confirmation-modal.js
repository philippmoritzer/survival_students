jQuery("#actionConfirmationClose").on("click", () => {
  closeModal();
});

jQuery("#actionConfirmationCost").text(currentAction.cost);
jQuery("#actionConfirmationActionName").text(currentAction.name);
jQuery("#actionConfirmationActionDesc").text(currentAction.desc);
jQuery("#actionConfirmationResourceValue").text(currentAction.value + " ");
jQuery("#actionConfirmationResourceType").text(currentAction.type + " ");
jQuery("#actionConfirmationImage").attr(
  "src",
  "../assets/images/actions/" + currentAction.img
);

jQuery("#actionConfirmationAcceptButton").on("click", () => {
  executeAction(currentAction);
  closeModal();
});

if (currentAction.reward) {
  const item = gst.getItemById(currentAction.reward);
  if (!gst.characterOwnsItem(item)) {
    const assetPath = "../assets/images/items/";
    jQuery("#actionConfirmationRewardImg").attr("src", assetPath + item.image);

    const hoverItem = new HoverItem(uuidv4(), item);
    jQuery("#actionConfirmationItemTooltipText").load(
      "./components/hud/hover-item/hover-item.html",
      () => {
        hoverItem.init();
      }
    );
  } else {
    jQuery("#actionConfirmationValueContainer").css({
      display: "none"
    });
  }
}
