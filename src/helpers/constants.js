//Declaring the starting values for different characters
//possibly easier to change and balance out
//First dimension:
//[0] = Justus
//[1] = Lisa
//[2] = Temp
//Second Dimension:
//[0] = Money
//[1] = hunger
//[2] = lebensgefühl
//[3] = learnlevel
const STARTING_VALUES = [
  [1000, 100, 25, 50],
  [50, 25, 100, 50],
  [200, 50, 25, 100]
];

const NAME_INDEX_PAIR = [
  { index: 0, name: "Justus" },
  { index: 1, name: "Lisa" },
  { index: 2, name: "Temp" }
];

//pre-determined resourcebars
const RESOURCE_BARS = [
  {
    type: "hunger",
    color1: "rgba(27, 94, 32, 0.7)",
    color2: "#388E3C",
    color3: "#4CAF50",
    image: "hunger.png"
  },
  {
    type: "life",
    color1: "rgba(198, 40, 40, 0.7)",
    color2: "#e53935",
    color3: "#ef5350",
    image: "life.png"
  },
  {
    type: "learn",
    color1: "rgba(249, 168, 37, 0.7)",
    color2: "#FDD835",
    color3: "#FFEE58",
    image: "learn.png"
  }
];

let hungerActions = [];
jQuery.getJSON("./actions/hungerActions.json", (data) => {
  hungerActions = data;
  console.log(hungerActions);
});

let lifeActions = [];
jQuery.getJSON("./actions/lifeActions.json", (data) => {
  lifeActions = data;
  console.log(lifeActions);
});

let learnActions = [];
jQuery.getJSON("./actions/learnActions.json", (data) => {
  learnActions = data;
  console.log(learnActions);
});

const actions = [hungerActions, lifeActions, learnActions];