const addBtn = document.getElementById('add-plant');
const plantDiv = document.getElementById('plant-list');
const photoDiv = document.getElementById('photo-div');
const videoEl = document.getElementById('my-video');
let stream = null;


addBtn.addEventListener('click', function() {
    if (photoDiv.classList.value === 'hide'){
        plantDiv.classList.add('hide');
        photoDiv.classList.remove('hide');
        getMedia();
    } else {
        plantDiv.classList.remove('hide');
        photoDiv.classList.add('hide');
        stopMedia();
    }
});

async function getMedia() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            audio: false, 
            video: true
        });
        videoEl.srcObject = stream;
        videoEl.play(); 
    } catch (error) {
        console.log('User denied camera access permission');

        photoDiv.innerHTML = '<p>Camera access denied. Please allow camera access.</p>';
    }
}
function stopMedia() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
        videoEl.srcObject = null;
    }
}