const messages = [
  "Happy Mother's Day!",
  "You're the best!",
  "Thank you for everything!",
  // Add more messages here
];

const messageElement = document.getElementById('message');
const videoPlayer = document.getElementById('videoPlayer');
const youtubePlayer = document.getElementById('youtubePlayer');

let index = 0;

function displayMessage() {
  if (index < messages.length) {
    messageElement.textContent = messages[index];
    index++;
    setTimeout(displayMessage, 5000); // Change the time here (in milliseconds)
  } else {
    showVideoPlayer();
  }
}

function showVideoPlayer() {
  messageElement.style.display = 'none';
  videoPlayer.style.display = 'click';
  // Replace 'VIDEO_ID' with the YouTube video ID you want to play
  youtubePlayer.src = 'https://www.youtube.com/embed/CwGbMYLjIpQ?si=KkUenjX-g__SLbxQ';
}

// Start displaying messages
displayMessage();
