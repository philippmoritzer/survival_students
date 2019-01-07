var areaAudio;
var intro;

const changeAreaMusic = areaId => {
  if (areaAudio) {
    areaAudio.pause();
    areaAudio.currentTime = 0;
  }

  switch (areaId) {
    case 0:
      areaAudio = new Audio("../assets/audio/home.mp3");
      break;
    case 1:
      areaAudio = new Audio("../assets/audio/foodcourt.mp3");
      break;
    case 2:
      areaAudio = new Audio("../assets/audio/hochschule.mp3");
      break;
    case 3:
      areaAudio = new Audio("../assets/audio/city.mp3");
      break;
    case 4:
      areaAudio = new Audio("../assets/audio/nature.mp3");
      break;
  }

  areaAudio.loop = true;
  areaAudio.volume = 0.05;
  const playPromise = areaAudio.play();
  if (playPromise !== null) {
    playPromise.catch(() => {
      areaAudio.play();
    });
  }
};

const stopAreaMusic = () => {
  if (areaAudio) {
    areaAudio.pause();
    areaAudio.currentTime = 0;
  }
};

const playCashSound = () => {
  var soundAudio;
  soundAudio = new Audio("../assets/audio/cash-register.mp3");
  soundAudio.loop = false;
  soundAudio.volume = 0.3;
  const playPromise = soundAudio.play();
  if (playPromise !== null) {
    playPromise.catch(() => {
      soundAudio.play();
    });
  }
};

/**
 * play intro music. Start at intro.js, stop at game.js loading
 */
const playIntroMusic = () => {
  intro = new Audio("../assets/audio/intro.mp3");
  intro.loop = true;
  intro.volume = 0.2;
  const playPromise = intro.play();
  if (playPromise !== null) {
    playPromise.catch(() => {
      intro.play();
    });
  }
};

/**
 * stop intro music. Execute at game.js loading
 */
const stopIntroMusic = () => {
  if (intro) {
    intro.pause();
    intro.currentTime = 0;
  }
};

const playOpenBackpackSound = () => {
  var audio = new Audio("../assets/audio/backpack.mp3");
  audio.volume = 1;
  audio.loop = false;
  const playPromise = audio.play();
  if (playPromise !== null) {
    playPromise.catch(() => {
      audio.play();
    });
  }
};

const playPopupSound = () => {
  var audio = new Audio("../assets/audio/popup.wav");
  audio.volume = 0.5;
  audio.loop = false;
  const playPromise = audio.play();
  if (playPromise !== null) {
    playPromise.catch(() => {
      audio.play();
    });
  }
};

const playDayChangeMusic = () => {
  var audio = new Audio("../assets/audio/daychange.mp3");

  audio.volume = 0.1;
  audio.loop = false;
  const playPromise = audio.play();
  if (playPromise !== null) {
    playPromise.catch(() => {
      audio.play();
    });
  }
};

const playWinMusic = () => {
  var audio = new Audio("../assets/audio/win.mp3");

  audio.volume = 0.1;
  audio.loop = false;
  const playPromise = audio.play();
  if (playPromise !== null) {
    playPromise.catch(() => {
      audio.play();
    });
  }
};

const playLoseMusic = () => {
  var audio = new Audio("../assets/audio/loss.mp3");

  audio.volume = 0.1;
  audio.loop = false;
  const playPromise = audio.play();
  if (playPromise !== null) {
    playPromise.catch(() => {
      audio.play();
    });
  }
};
