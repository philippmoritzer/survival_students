var areaAudio;
var intro;

const changeAreaMusic = areaId => {
  audio.pause();
  audio.currentTime = 0;
  switch (areaId) {
    case 0:
      audio = new Audio();
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
  }

  audio.loop = true;
  audio.volume = 0.2;
  audio.play();
};

const playCashSound = () => {
  var soundAudio;
  soundAudio = new Audio("../assets/audio/cash-register.mp3");
  soundAudio.loop = false;
  soundAudio.volume = 0.3;
  soundAudio.play();
};

/**
 * play intro music. Start at intro.js, stop at game.js loading
 */
const playIntroMusic = () => {
  intro = new Audio("../assets/audio/intro.mp3");
  intro.loop = true;
  intro.volume = 0.5;
  intro.play();
};

/**
 * stop intro music. Execute at game.js loading
 */
const stopIntroMusic = () => {
  intro.pause();
  intro.currentTime = 0;
};

const playOpenBackpackSound = () => {
  var audio = new Audio("../assets/audio/backpack.mp3");
  audio.volume = 1;
  audio.loop = false;
  audio.play();
};

const playPopupSound = () => {
  var audio = new Audio("../assets/audio/popup.mp3");
  audio.volume = 1;
  audio.loop = false;
  audio.play();
};
