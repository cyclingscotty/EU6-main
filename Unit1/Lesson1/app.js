let myData = {
    up: {
        "vocab": "up the street",
        "explanation": "'Up' can be indicate the destination is higher OR it can be used to indicate the destination is more northerly.",
        "example": "E.g. To go to school, I need to walk <span class='wordUse'>up</span> a steep hill.",
        "image": "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140304172635-worlds-steepest-street-runner.jpg"
    },
    over: {
        "vocab": "over the bridge",
        "explanation": "'Over' can mean you are moving on the bridge (e.g. walking over) or high above it (e.g. the bird flew over).",
        "example": "E.g. To visit my grandmother, I must take the bus <span class='wordUse'>over</span> the River.",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/0e/35/09/b2/walking-on-bridge.jpg"
    },
    under:  {
        "vocab": "under the train tracks",
        "explanation": "",
        "example": "E.g. If the bridge over the river is closed, we can use the tunnel to drive <span class='wordUse'>under</span> the river.",
        "image": "https://www.alpenwild.com/userfiles/files/Bernina%20Express%20Swiss%20Image.jpg"
},
    
    around:  {
        "vocab": "around the fountain",
        "explanation": "To go around means to move past something but not touch it.",
        "example": "E.g. To go from the front of the school to the back, you need to walk around the buildings.",
        "image": "https://image.shutterstock.com/z/stock-photo-green-arrow-going-around-a-barrier-spelling-a-word-problem-go-around-problem-119729065.jpg"
},
        
    along:  {
        "vocab": "along the river",
        "explanation": "'Along' means to follow something. We can use it if we are unsure if it is 'up' or 'down'.",
        "example": "E.g. We were lost, so we just walked along the highways for hours.",
        "image": "https://previews.123rf.com/images/petarpaunchev/petarpaunchev1210/petarpaunchev121000037/16012049-a-beautiful-young-woman-takes-a-relaxing-walk-along-a-sandy-beach.jpg"
},
    
    
            
    down:  {
        "vocab": "down the stairs",
        "explanation": "'Down' is the opposite of 'up'.",
        "example": "We walked 'down' the stairs then 'up' the street.",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/0c/da/40/4c/giant-stairway.jpg"
}
}

document.getElementById('body').addEventListener("click", whichButton);

function whichButton(event){
    if(event.target.className === "grammarPoint" ){
    let buttonID = event.target.innerHTML;
    let buttonIDarr = [];
    buttonIDarr = buttonID.split(" ");
    buttonIDarrFirst = buttonIDarr[0]; 
    displayPerButton(buttonIDarrFirst)    
    } else if (event.target.id === "nextPageButton"){
               window.location.href="index1.html";
               }
}

function displayPerButton(theButton){
document.getElementById('pic1').setAttribute("src", myData[theButton].image);
document.querySelector('#pic2').children[0].innerHTML = myData[theButton].explanation;
document.querySelector('#pic2').children[1].innerHTML = myData[theButton].example;
}
    
   