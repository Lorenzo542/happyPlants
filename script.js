const addBtn = document.getElementById('add-plant');
const plantDiv = document.getElementById('plant-list');
const photoDiv = document.getElementById('photo-div')
const videoEl = document.getElementById('my-video')
let stream = null

addBtn.addEventListener('click', function() {
    
    if (photoDiv.classList.value === 'hide'){
        
        plantDiv.classList.add('hide');
        photoDiv.classList.remove('hide');
        getMedia(e)
    } else {

        plantDiv.classList.remove('hide');
        photoDiv.classList.add('hide');
    }
});

async function getMedia() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: false, 
            video: true
        });
        
    } catch (error) {
        console.log('User denied camera access permission');
        return null;
    }

    videoEl.srcObject = stream;
}