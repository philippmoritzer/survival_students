jQuery("#decisionTreeModalClose").on("click", () => {
  closeModal();
});

for (let i = 0; i < actionHistory.length; i++) {
  titleLoaded = false;
  if (i % 3 === 0) {
    jQuery.get(
      "./components/modals/decision-tree-modal/decision-tree-title/decision-tree-title.html",
      data => {
        let dTreeTitle = new DecisionTreeTitle(i / 3);
        jQuery("#decisionTreeContent").append(data);
        dTreeTitle.init();
        titleLoaded = true;
      }
    );
  } else {
    titleLoaded = true;
  }

  if (titleLoaded) {
    jQuery.get(
      "./components/modals/decision-tree-modal/decision-tree-item/decision-tree-item.html",
      data => {
        let dTreeItem = new DecisionTreeItem(
          i,
          actionHistory[i].action,
          actionHistory[i].calcValue
        );
        jQuery("#decisionTreeContent").append(data);
        dTreeItem.init();
      }
    );
  }
}
