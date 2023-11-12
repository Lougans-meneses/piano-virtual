const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keyCheck = document.querySelector(".key-check input")

let mapedkeys = [];
let audio = new Audio(".src/tunes/a.wav");

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clickedkey = document.querySelector(`[data-key="${key}"]`);
  clickedkey.classList.add("active");
  setTimeout(() => {
    clickedkey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedkeys.push(key.dataset.key);
});

document.addEventListener("Keydown", (e) => {
  if (mapedkeys.includes(e.key)) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume);


keyCheck.addEventListener("click", showHideKeys)