const messages = [
  "Hai Bu",
  "Matahari tidak selalu", 
  "Menampakkan cahayanya",
  "Pada setiap sorotan hari",
  "Tapi aku percaya..",
  "Ibu selalu menampakkan dirinya",
  "Saat aku membutuhkanya",
  "Ibu Kaulah Malaikatku",
  "Terima Kasih Ibu",
  "Aku Sayang Ibu ❤️"
  // Add more messages here
];

const music = document.getElementById('bg-music');
const music_hide = document.getElementById('music_player');
const playPauseBtn = document.getElementById('play-pause-btn');
const messageElement = document.getElementById('message');
const showVideoButton = document.getElementById('showVideo');
const videoPlayer = document.getElementById('videoPlayer');
const youtubePlayer = document.getElementById('youtubePlayer');
const messageDiv = document.getElementById('message');
const videoDiv = document.getElementById('video');

let index = 0;

function togglePlayPause() {
  if (music.paused || music.ended) {
    music.play();
    playPauseBtn.innerHTML = 'Pause';
showMessage();

  } else {
    music.pause();
    playPauseBtn.innerHTML = 'Play';
  }
}

function displayMessage() {
  if (index < messages.length) {
    messageElement.textContent = messages[index];
    index++;
    setTimeout(displayMessage, 5000); // Change the time here (in milliseconds)
  } else showVideoButton.addEventListener('click'), function() {
    showVideoPlayer= 'block';
  }
}

function showMessage() {
  if (index < messages.length) {
    messageDiv.innerText = messages[index];
    messageDiv.style.display = 'block';
    setTimeout(() => {
      messageDiv.style.display = 'none';
      index++;
      showMessage();
    }, 5000); // Show each message for 5 seconds
  } else {
    videoDiv.style.display = 'block';
    music.pause();
    music_hide.style.display = 'none';
  }
}
  function showVideoPlayer() {
  messageElement.style.display = 'none';
  videoPlayer.style.display = 'click';
  // Replace 'VIDEO_ID' with the YouTube video ID you want to play
  youtubePlayer.src = 'https://www.youtube.com/embed/qHbDhFSEZC0?si=Q4UOt3u7_oZdrM9q';
}

// showMessage();

// Start displaying messages
// displayMessage();
