jQuery("#sellItemModalClose").on("click", () => {
  closeModal();
});

jQuery("#sellItemModalItemTitle").text(tempRemoveItem.title);
jQuery("#sellItemModalItemDesc").text(tempRemoveItem.description);
jQuery("#sellItemAcceptButton").text(
  "Verkaufen für: " + tempRemoveItem.sellfor
);

jQuery("#sellItemAcceptButton").on("click", () => {
  gst.sellItem(tempRemoveItem);
});
