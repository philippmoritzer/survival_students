class DecisionTreeModalItem {
  constructor(id, actions) {
    this.id = id;
    this.actions = actions;
  }

  makeElementsUnique() {
    //inital action of the day

    jQuery("#decisionTreeResourceContainer1").attr(
      "id",
      jQuery("#decisionTreeResourceContainer1").attr("id") + this.id
    );
    jQuery("#decisionTreeModalItemDay").attr(
      "id",
      jQuery("#decisionTreeModalItemDay").attr("id") + this.id
    );
    jQuery("#decisionTreeActionName1").attr(
      "id",
      jQuery("#decisionTreeActionName1").attr("id") + this.id
    );
    jQuery("#decisionTreeResouceGain1").attr(
      "id",
      jQuery("#decisionTreeResouceGain1").attr("id") + this.id
    );
    jQuery("#decisionTreeMoneyLoss1").attr(
      "id",
      jQuery("#decisionTreeMoneyLoss1").attr("id") + this.id
    );
    jQuery("#decisionTreeResImg1").attr(
      "id",
      jQuery("#decisionTreeResImg1").attr("id") + this.id
    );

    //Second Action of the day
    jQuery("#decisionTreeResourceContainer2").attr(
      "id",
      jQuery("#decisionTreeResourceContainer2").attr("id") + this.id
    );
    jQuery("#decisionTreeActionName2").attr(
      "id",
      jQuery("#decisionTreeActionName2").attr("id") + this.id
    );
    jQuery("#decisionTreeResouceGain2").attr(
      "id",
      jQuery("#decisionTreeResouceGain2").attr("id") + this.id
    );
    jQuery("#decisionTreeMoneyLoss2").attr(
      "id",
      jQuery("#decisionTreeMoneyLoss2").attr("id") + this.id
    );
    jQuery("#decisionTreeResImg2").attr(
      "id",
      jQuery("#decisionTreeResImg2").attr("id") + this.id
    );

    //Third action of the day
    jQuery("#decisionTreeResourceContainer3").attr(
      "id",
      jQuery("#decisionTreeResourceContainer3").attr("id") + this.id
    );
    jQuery("#decisionTreeActionName3").attr(
      "id",
      jQuery("#decisionTreeActionName3").attr("id") + this.id
    );
    jQuery("#decisionTreeResouceGain3").attr(
      "id",
      jQuery("#decisionTreeResouceGain3").attr("id") + this.id
    );
    jQuery("#decisionTreeMoneyLoss3").attr(
      "id",
      jQuery("#decisionTreeMoneyLoss3").attr("id") + this.id
    );
    jQuery("#decisionTreeResImg3").attr(
      "id",
      jQuery("#decisionTreeResImg3").attr("id") + this.id
    );

    jQuery("#decisionTreeLearnStartingText").attr(
      "id",
      jQuery("#decisionTreeLearnStartingText").attr("id") + this.id
    );
    jQuery("#decisionTreeLifeStartingText").attr(
      "id",
      jQuery("#decisionTreeLifeStartingText").attr("id") + this.id
    );
    jQuery("#decisionTreeHungerStartingText").attr(
      "id",
      jQuery("#decisionTreeHungerStartingText").attr("id") + this.id
    );
  }

  setAttributes() {
    jQuery("#decisionTreeModalItemDay" + this.id).text("Tag " + (this.id + 1));
    jQuery("#decisionTreeActionName1" + this.id).text(
      this.actions[0].action.name
    );

    jQuery("#decisionTreeMoneyLoss1" + this.id).text(
      this.actions[0].action.cost
    );
    jQuery("#decisionTreeResouceGain1" + this.id).text(
      this.actions[0].calcValue
    );

    if (this.actions[1]) {
      jQuery("#decisionTreeActionName2" + this.id).text(
        this.actions[1].action.name
      );

      jQuery("#decisionTreeMoneyLoss2" + this.id).text(
        this.actions[1].action.cost
      );
      jQuery("#decisionTreeResouceGain2" + this.id).text(
        this.actions[1].calcValue
      );
    }

    if (this.actions[2]) {
      jQuery("#decisionTreeActionName3" + this.id).text(
        this.actions[2].action.name
      );

      jQuery("#decisionTreeMoneyLoss3" + this.id).text(
        this.actions[2].action.cost
      );
      jQuery("#decisionTreeResouceGain3" + this.id).text(
        this.actions[2].calcValue
      );
    }

    jQuery("#decisionTreeHungerStartingText" + this.id).text(
      gst.dailyResources[this.id].hungerVal
    );
    jQuery("#decisionTreeLifeStartingText" + this.id).text(
      gst.dailyResources[this.id].lifeVal
    );
    jQuery("#decisionTreeLearnStartingText" + this.id).text(
      gst.dailyResources[this.id].learnVal
    );
  }

  setStyles() {
    jQuery("#decisionTreeResImg1" + this.id).attr(
      "src",
      this.getImageByResource(this.actions[0].action.type)
    );
    if (!this.actions[1]) {
      jQuery("#decisionTreeResourceContainer2" + this.id).css({
        display: "none"
      });
    } else {
      jQuery("#decisionTreeResImg2" + this.id).attr(
        "src",
        this.getImageByResource(this.actions[1].action.type)
      );
    }
    if (!this.actions[2]) {
      jQuery("#decisionTreeResourceContainer3" + this.id).css({
        display: "none"
      });
    } else {
      jQuery("#decisionTreeResImg3" + this.id).attr(
        "src",
        this.getImageByResource(this.actions[2].action.type)
      );
    }
  }

  init() {
    this.makeElementsUnique();
    this.setAttributes();
    this.setStyles();
  }

  /**
   * helpert method to get image by resType
   * @param {} resType
   */
  getImageByResource(resType) {
    console.log(resType);
    switch (resType) {
      case "hunger":
        return "../assets/images/hunger.png";

      case "life":
        return "../assets/images/life.png";
      case "learn":
        return "../assets/images/learn.png";
    }
  }
}
