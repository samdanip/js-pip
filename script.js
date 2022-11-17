const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Propmt to select media stream
async function selectedMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start PIP
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// onLoad
selectedMediaStream();
