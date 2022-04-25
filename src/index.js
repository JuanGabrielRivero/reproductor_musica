const songsList = ["https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3"];

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const restartButton = document.querySelector(".restart");

const playSong = () => {
  const url = songsList[0];
  const song = new Audio(url);
  song.play();
  console.log("Reproduciendo");
};

const pauseSong = () => {
  song.pause();
  console.log("Pausando");
};

const updateSongData = () => {
  songList[0];
  const artist = "ToteKing";
};

playButton.addEventListener("click", () => playSong());
pauseButton.addEventListener("click", () => pauseSong());
