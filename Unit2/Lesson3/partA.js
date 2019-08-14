    const storyParts = document.querySelectorAll('#storyParts div');
    const endParts = document.getElementsByClassName('endParts');
    const eventButtons = document.querySelectorAll('#buttons button');

console.log(eventButtons);

function hideEndParts(){
    for (let i = 0; i < endParts.length; i++){
        endParts[i].style.display = 'none';
    }
}

function addEventListeners(){
    for (let i = 0; i < eventButtons.length; i++){
        eventButtons[i].addEventListener('click', function(){
            for (let j = 0; j < storyParts.length; j++){
                storyParts[j].style.display = 'none';
            
            }
            storyParts[i+1].style.display = 'block';
        });
    }
    
 }

hideEndParts();
addEventListeners();