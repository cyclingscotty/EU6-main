const phraseA = [
    'My dad could call friends when she was my age, but my mum could not.',
    'My mum could sing karaoke when she was my age, but my dad could not.',
    'My dad could invite friends over when he was my age, but my mum could not.',
    'My mum could have a party when she was my age, but my dad could not.',
    'My dad could stay up late when she was my age, but my dad could not.',
    'My mum could watch scary movies when she was my age, but my dad could not.'
]

const part3Pics = [
    'images/part3/callfriends.png',
    'images/part3/singKaraoke.png',
    'images/part3/inviteFriends.png',
    'images/part3/haveAParty.png',
    'images/part3/stayUpLate.png',
    'images/part3/watchScaryMovie.png'
]

document.querySelector('#intro img').addEventListener('click', function(){
    document.querySelector('#intro img').style.display = "none";
})

let subheading1 = document.querySelectorAll('.A1');
let subheading2 = document.querySelectorAll('.A2');
for ( let i = 0; i < subheading1.length; i++){
    subheading1[i].style.display = "none";
    subheading2[i].style.display = "none";
}

document.querySelector('.underline').addEventListener('click', function(){
    subheading1[0].style.display = "block";
    subheading2[0].style.display = 'block';
    subheading2[0].addEventListener('click', function(){
        subheading1[0].style.display = 'none';
        subheading2[0].style.display = 'none';
        subheading1[1].style.display = "block";
        subheading2[1].style.display = "block";
        subheading2[1].addEventListener('click', function(){
            subheading1[1].style.display = "none";
        subheading2[1].style.display = "none";
            showImages();
            choosePic();
        })
    });
    
});



function showImages(){
    for (let i = 0; i  < part3Pics.length; i++){
        document.getElementById("main2Pic"+i).src = part3Pics[i];
    }
}

function choosePic(){
    document.getElementById('main2').addEventListener('click', function (event){
        console.log(event.target.id.slice(-1));
        document.querySelector('.main3-a').innerHTML = '';
        document.querySelector('.main3-b').innerHTML = '';
        words(event.target.id.slice(-1));
        
    })
}

function words(whichSentence){
    let theWords = phraseA[whichSentence].split(' ');
    let theSentenceNumber = whichSentence;
    let theShuffledWords = shuffle(theWords);
    document.querySelector('.main3-a').innerHTML = theShuffledWords.join(' ');
    document.querySelector('.main3-a').addEventListener('click', function (whichSentence){
        document.querySelector('.main3-b').innerHTML = phraseA[theSentenceNumber];
    } );
}



function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;
}


