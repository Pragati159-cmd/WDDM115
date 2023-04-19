

const mediaContainer = document.getElementById("media-container");

// create an array of media files
const media = [
  "/CN Tower.jpeg",
  "https://example.com/image.jpg",
  "https://example.com/audio.mp3"
];

// loop through the array of media files and create HTML elements for each
for (let i = 0; i < media.length; i++) {
  const file = media[i];

  if (file.endsWith(".mp4")) {
    // create video element
    const video = document.createElement("video");
    video.src = file;
    video.controls = true;
    video.loop = true;
    mediaContainer.appendChild(video);
  } else if (file.endsWith(".jpg")) {
    // create image element
    const image = document.createElement("img");
    image.src = file;
    mediaContainer.appendChild(image);
  } else if (file.endsWith(".mp3")) {
    // create audio element
    const audio = document.createElement("audio");
    audio.src = file;
    audio.controls = true;
    audio.loop = true;
    mediaContainer.appendChild(audio);
  }
}
