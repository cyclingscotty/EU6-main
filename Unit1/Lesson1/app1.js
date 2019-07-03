const arr = [
    "Walk up the street and turn right.",
    "Walk down the stairs and turn right.",
    "Walk around the fountain and go straight.",
    "Walk over the bridge and turn left.",
    "Walk under the train tracks and go straight.",
    "Walk along the river and turn left."
];

 document.querySelector('body').addEventListener('click', function(){
 if(event.target.className === 'activityPics'){
    let pressedButtonNumber = event.target.id.slice(8,9);
    checkAnswer(pressedButtonNumber);
 } else if (event.target.id === "nextPageButton"){
               window.location.href="index2.html";
               }
});

function checkAnswer(x){
    let inputted = document.querySelector('#answer'+x).value;
    let stored = arr[x-1];
    console.log(inputted);
    console.log(stored);
    
    if( inputted == stored){
        document.getElementById('activity'+x+'QandABox').style.backgroundColor = '#bef5bc';
    } else {
        document.getElementById('activity'+x+'QandABox').style.backgroundColor = '#ef8080';
        setTimeout(function(){
            document.getElementById('activity'+x+'QandABox').style.backgroundColor = '#ffffff'}, 1000);
     
           }
}