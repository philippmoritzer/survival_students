jQuery("#actionConfirmationClose").on("click", () => {
  closeModal();
});

jQuery("#acceptButton").on("click", () => {
  executeAction();
});

jQuery("#actionConfirmationCost").text(currentAction.cost);
jQuery("#actionConfirmationActionName").text(currentAction.name);
jQuery("#actionConfirmationActionDesc").text(currentAction.desc);
jQuery("#actionConfirmationResourceValue").text(currentAction.value + " ");
jQuery("#actionConfirmationResourceType").text(currentAction.type + " ");

jQuery("#actionConfirmationAcceptButton").on("click", () => {
  executeAction(currentAction);
  closeModal();
});
