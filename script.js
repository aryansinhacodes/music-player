let progress = document.getElementById("progress")
let song = document.getElementById("song")
let controlIcon = document.getElementById("controls")

song.onloadedmetadata = function() {
  progress.max = song.duration; 
  progress.value = song.currentTime; 

}

function playPause() {
  if (controlIcon.classList.contains("ri-pause-line")) {
    song.pause();
    controlIcon.classList.remove("ri-pause-line")
    controlIcon.classList.add("ri-play-line")
  }
  else {
    song.play();
    controlIcon.classList.remove("ri-play-line")
    controlIcon.classList.add("ri-pause-line")
  }
}

if(song.play) {
setInterval(()=> {
  progress.value = song.currentTime
}, 500)
}

progress.onchange = function() {
song.play();
song.currentTime = progress.value;
controlIcon.classList.remove("ri-play-line")
    controlIcon.classList.add("ri-pause-line")
}
