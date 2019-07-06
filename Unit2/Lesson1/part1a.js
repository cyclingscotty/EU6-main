const imgs = ['images/responsibilities.jpg'];
const wordBank = [
    'read textbooks',
    'pay bills',
    'go to bed early',
    'repair the house',
    'type a report',
    'scrub the sink'
]


document.querySelector('#mainImage img').setAttribute('src', imgs[0]);


function showTextArea(x){
    console.log('Show area '+x);
    for ( let i = 0; i<6; i++){
        document.getElementById('word'+(i+1)).style.visibility = "hidden";
    }
    
    let whichArea = "word"+x;
    document.getElementById(whichArea).style.visibility = "visible";
    document.getElementById(whichArea).value ="";
}

function checkWords(){
    for (let i = 0; i<6; i++){
        let stored=wordBank[i];
        let typed = document.getElementById('word'+(i+1)).value;
        if(stored === typed){
            console.log('yeah Man');
            document.getElementById('word'+(i+1)).style.backgroundColor = "lightgreen";
            
        }
    }
}
