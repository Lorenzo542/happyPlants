const addBtn = document.getElementById('add-plant');
const plantDiv = document.getElementById('plant-list');
const photoDiv = document.getElementById('photo-div')
addBtn.addEventListener('click', function() {
    
    if (photoDiv.classList.value === 'hide'){
        
        plantDiv.classList.add('hide');
        photoDiv.classList.remove('hide');
        navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
            console.log('Got MediaStream:', stream);
        })
        .catch(error => {
            console.error('Error accessing media devices.', error);
        });
    } else {

        plantDiv.classList.remove('hide');
        photoDiv.classList.add('hide');
    }
});