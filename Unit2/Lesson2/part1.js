let theVocabs = [
    'call friends', 'stay up late', 'invite a friend over', 'watch a scary movie', 'sing karaoke', 'have a party'
];

let imgSrc = [
    'http://www.ellevsoft.com/_/rsrc/1413581048453/home/doyouhavefriendswhoneveranswerthecall/phone_english600.png',
    'https://cdn.timesmedia.co.id/images/2018/11/01/begadang.jpg',
    'https://herviewfromhome.com/wp-content/uploads/2018/02/shutterstock_506818078.jpg',
    'https://img1.grunge.com/img/gallery/what-happens-to-your-body-when-you-watch-a-scary-movie/intro-1514474000.jpg',
    'https://www.yoyochinese.com/attachment/upload/blog/image/ktv.png',
    'https://static.onecms.io/wp-content/uploads/sites/38/2014/11/12230611/monkey_business_images_9.jpg'
]

let theAltVocabs = [
    'invite over a friend'
]


let howManyVocabs = [];
howManyVocabs = document.getElementsByClassName('vocab');

let howManyPics = [];
howManyPics = document.getElementsByClassName('vocabPic');

function vocabSlots() {
    for (let i = 0; i < theVocabs.length; i++) {
        howManyVocabs[i].innerHTML = theVocabs[i];
        howManyPics[i].src = imgSrc[i];
    }
    document.getElementById('start1').addEventListener('click', clearVocabSlots);
}

function clearVocabSlots() {

    
    for (let i = 0; i < howManyVocabs.length; i++) {
        howManyVocabs[i].innerHTML = "<input type='text' size='20'><button>check</button>";
        howManyPics[i].src = imgSrc[i];
    
    }
     let VocabButtonNo = document.querySelectorAll('.vocab button');
    for (let i = 0; i < VocabButtonNo.length; i++){
        VocabButtonNo[i].setAttribute('id', 'vocabButtonNumber'+i);
    }
    
document.getElementById('start1').style.visibility = 'hidden'; 
    
}



vocabSlots();


document.querySelector('#vocabSection').addEventListener('click', function () {
    console.log(event.target);
    if (event.target.tagName == "BUTTON") {
let theButtonNumber = event.target.id.slice(length-1);
        console.log(theButtonNumber);
        console.log(document.getElementsByTagName('input')[theButtonNumber].value);
        console.log(theVocabs[theButtonNumber]);
        if (document.getElementsByTagName('input')[theButtonNumber].value == theVocabs[theButtonNumber]) {
            document.getElementsByTagName('input')[theButtonNumber].style.backgroundColor = 'lightgreen';
        }
       
                                                                                                                 }
    }
)

function testSpelling() {}
