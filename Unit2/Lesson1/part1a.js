const imgs = ['images/responsibilities.jpg'];
const wordBank = [
    'read textbooks',
    'pay bills',
    'go to bed early',
    'repair the house',
    'type a report',
    'scrub the sink'
];


document.querySelector('#mainImage img').setAttribute('src', imgs[0]);


function showTextArea(x){
    console.log('Show area '+x);
    
    
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
            
            if(document.getElementById('word1').style.backgroundColor == "lightgreen" &&
               document.getElementById('word2').style.backgroundColor == "lightgreen" &&
               document.getElementById('word3').style.backgroundColor == "lightgreen" &&
               document.getElementById('word4').style.backgroundColor == "lightgreen" &&
               document.getElementById('word5').style.backgroundColor == "lightgreen" &&
               document.getElementById('word6').style.backgroundColor == "lightgreen"){
                document.getElementById('checkButton').innerText = "Next Page";
                document.getElementById('checkButton').style.backgroundColor = "lightgreen";
                document.getElementById('checkButton').addEventListener('click', function(){
                    location.href="part1b.html";
                });
            }
        }
    }
};
