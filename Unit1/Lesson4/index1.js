const wordList = [
    "capital", "busy", "similar", "giant panda", "honor", "observe"
];


let wordListUnscrambled=[];
let wordlistScrambled=[];
for (let i = 0; i < wordList.length; i++){
    wordListUnscrambled[i] = wordList[i].split(''); 
    wordlistScrambled[i] = scrambleTheWords(wordListUnscrambled[i]).join('');
    displayScrambledWords(i, wordlistScrambled[i]);
}


function displayScrambledWords(x, theWord){
    document.querySelector('#scrambledWord'+(x+1)).innerHTML = theWord;
}


function scrambleTheWords(x){
    
    
    var i = x.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = x[i];
        x[i] = x[j];
        x[j] = temp;

    }

    return x;
}

document.querySelector('body').addEventListener('click', function(){
    if(event.target.id == 'check'){
        checkSpelling();
    }
});

function checkSpelling(){
    
    for (let i = 0; i < wordList.length; i++){
        document.querySelector('#word'+(i+1)).style.backgroundColor = "white";
        let storedWord = wordList[i];
        let typedWord = document.querySelector('#input'+(i+1)).value;
                
        
        
        console.log(storedWord);
        console.log(typedWord);
        if(storedWord == typedWord || typedWord == "honour" || typedWord == "honour (honor)"){
            document.querySelector('#word'+(i+1)).style.backgroundColor = "lightgreen";
            if(typedWord == "honour" || typedWord == "honour (honor)" || typedWord == "honor"){
            if(document.querySelector('#word5').style.backgroundColor = "lightgreen"){
                document.querySelector('#input5').value = "honour (honor)";
            }
            }
          
}
    }
}