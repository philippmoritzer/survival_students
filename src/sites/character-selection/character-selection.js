/**
 * Loads the characterslide into a div
 * Needs a CharacterSlide Object which needs to be made unique by calling (makeElementUnique) (e.g. <div id="example">" -> <div id="example1">)
 * The update method needs to be called to transfer the object data to the html page.
 *
 * @param {CharacterSlide} characterslide A CharacterSlide Object
 * @param {String} identifier - the div where the content should be injected in
 * @param {String} htmlpage - the html-page that needs to be injected
 */
const loadCharacterSlides = (characterslide, identifier, htmlpage) => {
  jQuery(document).ready(() => {
    jQuery(identifier).innerHTML = jQuery(identifier).load(htmlpage, () => {
      characterslide.init();
    });
  });
};

//injecting the data
const CHAR_SLIDE_PAGE = "./components/character-slide/character-slide.html";

const slide1 = new CharacterSlide(
  0,
  STARTING_VALUES[0][0],
  STARTING_VALUES[0][1],
  STARTING_VALUES[0][2],
  STARTING_VALUES[0][3]
);
const slide2 = new CharacterSlide(
  1,
  STARTING_VALUES[1][0],
  STARTING_VALUES[1][1],
  STARTING_VALUES[1][2],
  STARTING_VALUES[1][3]
);
const slide3 = new CharacterSlide(
  2,
  STARTING_VALUES[2][0],
  STARTING_VALUES[2][1],
  STARTING_VALUES[2][2],
  STARTING_VALUES[2][3]
);

loadCharacterSlides(slide1, "#character1", CHAR_SLIDE_PAGE);
loadCharacterSlides(slide2, "#character2", CHAR_SLIDE_PAGE);
loadCharacterSlides(slide3, "#character3", CHAR_SLIDE_PAGE);

/**
 * Call this Method from CharacterSlide model
 * The character gets injected when clicked the character's slide
 * CharacterSlide is a ViewHelper Object.
 * Selects the character
 * @param {Slide} slide
 */
const selectCharacter = id => {
  let name = NAME_INDEX_PAIR[id].name;
  let startingValues = STARTING_VALUES[id];

  const character = new Character(
    id,
    name,
    startingValues[0],
    startingValues[1],
    startingValues[2],
    startingValues[3]
  );

  GameStateManager.getInstance().setCharacter(character);
};

const start = () => {
  jQuery("#main").load("./sites/game/game.html", () => {
    console.log("Game starting with character" + JSON.stringify(gst.character));
    gst.startGame();
  });
};
