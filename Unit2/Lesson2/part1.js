let theVocabs = [
    'call friends', 'stay up late', 'invite a friend over', 'watch a scary movie', 'sing karaoke', 'have a party'
];

let theAltVocabs = [
    'invite over a friend'
]


    let howManyVocabs = [];
    howManyVocabs = document.getElementsByClassName('vocab');

function vocabSlots(){
    for (let i = 0; i < theVocabs.length; i++){    
    howManyVocabs[i].innerHTML = theVocabs[i];
}
    document.getElementById('start1').addEventListener('click', clearVocabSlots);
}

function clearVocabSlots(){
    
    for (let i = 0; i < howManyVocabs.length; i++){
    howManyVocabs[i].innerHTML = "<input type='text' size='20'><button>check</button>";
}

}



vocabSlots();


document.querySelector('#vocabSection').addEventListener('click', function(){
    console.log(event.target);
    if(event.target.tagName == "button"){
        
    }
})

function testSpelling(){
}