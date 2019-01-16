jQuery("#actionConfirmationClose").on("click", () => {
  closeModal();
});

jQuery("#actionConfirmationCost").text(currentAction.cost);
jQuery("#actionConfirmationActionName").text(currentAction.name);
jQuery("#actionConfirmationActionDesc").text(currentAction.desc);
jQuery("#actionConfirmationImage").attr(
  "src",
  "../assets/images/actions/" + currentAction.img
);

switch (currentAction.type) {
  case "hunger":
    jQuery("#actionConfirmationResourceImg").attr(
      "src",
      "../assets/images/hunger.png"
    );
    break;
  case "life":
    jQuery("#actionConfirmationResourceImg").attr(
      "src",
      "../assets/images/life.png"
    );
    break;
  case "learn":
    jQuery("#actionConfirmationResourceImg").attr(
      "src",
      "../assets/images/learn.png"
    );
    break;
}

if (currentAction.cost > gst.character.money) {
  jQuery("#actionConfirmationAcceptButton").text("Nicht genug Geld.");
  jQuery("#actionConfirmationAcceptButton").attr("disabled", true);
}

if (gst.turnCount === 3) {
  jQuery("#actionConfirmationAcceptButton").text(
    "Keine Aktionen mehr übrig. Komme morgen wieder"
  );
  jQuery("#actionConfirmationAcceptButton").attr("disabled", true);
}

jQuery("#actionConfirmationAcceptButton").on("click", () => {
  playPopupSound();
  gst.executeAction(currentAction);
  closeModal();
});

if (currentAction.reward && !gst.characterOwnsItem(currentAction.reward)) {
  const item = gst.getItemById(currentAction.reward);
  if (!gst.characterOwnsItem(item.id)) {
    const assetPath = "../assets/images/items/";
    jQuery("#actionConfirmationRewardImg").attr("src", assetPath + item.image);

    const hoverItem = new HoverItem(uuidv4(), item);
    jQuery("#actionConfirmationItemTooltipText").load(
      "./components/hud/hover-item/hover-item.html",
      () => {
        hoverItem.init();
      }
    );
  }
} else {
  jQuery("#actionConfirmationValueContainer").css({
    display: "none"
  });
}
