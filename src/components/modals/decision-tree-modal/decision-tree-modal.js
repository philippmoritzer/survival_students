jQuery("#decisionTreeModalClose").on("click", () => {
  closeModal();
});

for (let i = 0; i < actionHistory.length; i++) {
  if (i % 3 === 0) {
    jQuery.get(
      "./components/modals/decision-tree-modal/decision-tree-modal-item/decision-tree-modal-item.html",
      data => {
        jQuery("#decisionTreeModalContainer")
          .append(data)
          .ready(() => {
            let tempActions = [];
            tempActions.push(actionHistory[i]);
            if (actionHistory[i + 1]) {
              tempActions.push(actionHistory[i + 1]);
            }
            if (actionHistory[i + 2]) {
              tempActions.push(actionHistory[i + 2]);
            }
            const dTreeItem = new DecisionTreeModalItem(i / 3, tempActions);
            dTreeItem.init();
          });
      }
    );
  }
}
