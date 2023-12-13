const messages = [
  "Hai Bu",
  "Matahari tidak selalu menampakkan cahayanya",
  "Tapi aku percaya",
  "Ibu akan selalu menampakkan dirimu",
  "Disaat aku membutuhkannya",
  "Ibu Adalah Malaikatku",
  "Aku sayang ibu ❤️",
  // Add more messages here
];

const music = document.getElementById('bg-music');
const playPauseButton = document.getElementById('playPause');
const messageElement = document.getElementById('message');
const showVideoButton = document.getElementById('showVideo');
const videoPlayer = document.getElementById('videoPlayer');
const youtubePlayer = document.getElementById('youtubePlayer');

let index = 0;
playPauseButton.addEventListener('click', function() {
  if (music.paused) {
    music.play();
    playPauseButton.textContent = 'Pause';
  } else {
    music.pause();
    playPauseButton.textContent = 'Play';
  }
})
function displayMessage() {
  if (index < messages.length) {
    messageElement.textContent = messages[index];
    index++;
    setTimeout(displayMessage, 3000); // Change the time here (in milliseconds)
  } else showVideoButton.addEventListener('click', function() {
    showVideoPlayer= 'block';})
}

function showVideoPlayer() {
  messageElement.style.display = 'none';
  videoPlayer.style.display = 'click';
  // Replace 'VIDEO_ID' with the YouTube video ID you want to play
  youtubePlayer.src = 'https://www.youtube.com/embed/CwGbMYLjIpQ?si=KkUenjX-g__SLbxQ';
}

// Start displaying messages
displayMessage();
