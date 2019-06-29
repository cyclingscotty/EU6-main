let myData = {
    up: {
        "vocab": "up the street",
        "explanation": "'Up' can be indicate the destination is higher OR it can be used to indicate the destination is more northerly.",
        "example": "E.g. To go to school, I need to walk <span class='wordUse'>up</span> a steep hill",
        "image": "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140304172635-worlds-steepest-street-runner.jpg"
    },
    over: {
        "vocab": "over the bridge",
        "explanation": "'Over' can mean you are moving on the bridge (e.g. walking over) or high above it (e.g. the bird flew over).",
        "example": "E.g. To visit my grandmother, I must take the bus <span class='wordUse'>over</span> the River.",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/0e/35/09/b2/walking-on-bridge.jpg"
    }
}

document.getElementById('pic1').setAttribute("src", myData.up.image);
document.querySelector('#pic2').children[0].innerHTML = myData.up.explanation;
document.querySelector('#pic2').children[1].innerHTML = myData.up.example;
    
    
   