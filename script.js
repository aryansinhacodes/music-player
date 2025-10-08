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

function shareSong() {
  const songUrl = "https://music-player-sepia-five.vercel.app/"; 
  if (navigator.share) {
    navigator.share({
      title: 'Eres Mi Silencio',
      text: 'Listen to this song!',
      url: songUrl,
    }).then(() => console.log('Song shared successfully'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    // Fallback
    navigator.clipboard.writeText(songUrl)
      .then(() => alert('Website link copied to clipboard!'))
      .catch(() => alert('Failed to copy link'));
  }
}

