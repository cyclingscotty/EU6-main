const vocabTable = document.querySelector('#newVocab');
const symbols = document.querySelector('#symbols');
const mainArticle = document.getElementById('mainArticle');
let theAnswers = document.getElementsByClassName('answ');

function hideAtSetup(){
    vocabTable.style.display = "none";
    symbols.style.display = "none";
    mainArticle.style.display = "none";
    document.getElementById('tableContinue').style.display = 'none';
    document.querySelector('header button').addEventListener('click', function(){
        document.querySelector('header button').style.display = 'none';
        showSymbols();
    
    })
}

function showSymbols(){
    document.querySelector('#symbols').style.display = 'flex';
    const howManySymbols = document.querySelectorAll('.symbols');
    for (let i = 0; i < howManySymbols.length; i++){
        document.querySelector("#symbols"+(i+1)).style.display = 'none';
    }
    let x = 0;
    document.querySelectorAll('.symbols')[x].style.display = 'flex';
    document.querySelectorAll('.symbols')[x].addEventListener('click', function(){
        document.querySelectorAll('.symbols')[x].style.display = 'none';
        x++;
        document.querySelectorAll('.symbols')[x].style.display = 'flex';
    document.querySelectorAll('.symbols')[x].addEventListener('click', function(){
        document.querySelectorAll('.symbols')[x].style.display = 'none';
        x++;
        document.querySelectorAll('.symbols')[x].style.display = 'flex';
        document.querySelectorAll('.symbols')[x].addEventListener('click', function(){
            document.querySelector('#symbols').style.display = 'none';
        setupVocabTable();
        
    })
    })
})
}

function setupVocabTable(){
    vocabTable.style.display = "flex";
    for (let x = 0; x < theAnswers.length; x++){
        theAnswers[x].style.visibility = "hidden"
    }
    addListnersToButtons();
}

function addListnersToButtons(){
    let theButtons = document.querySelectorAll('.clue');
    for (let i = 0; i < theButtons.length; i++){
        theButtons[i].addEventListener('click', function(){
            let answers = vocabTable.querySelectorAll('.answ');
            answers[i].style.visibility = "visible";
            if(answers[0].style.visibility == "visible" &&
              answers[1].style.visibility == "visible" &&
              answers[2].style.visibility == "visible" &&
              answers[3].style.visibility == "visible" &&
              answers[4].style.visibility == "visible" &&
              answers[5].style.visibility == "visible"){
               document.getElementById('tableContinue').style.display = 'flex';
                document.getElementById('tableContinue').addEventListener('click', showArticle);
               }
              
            
        });
    }
}

function showArticle(){
            vocabTable.style.display = "none";
    mainArticle.style.display = "flex";
    
}

hideAtSetup();