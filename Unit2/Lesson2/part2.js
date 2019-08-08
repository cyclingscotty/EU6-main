let whichPic = 0;

let thePhrases = [

    "I can (may) call friends on weekends, but I can't (may not) call friends on weekdays.",
    "I can (may) stay up late on weekends, but I can't (may not) stay up late on weekdays.",
    "I can (may) invite a friend over, but I can't (may not) invite a friend over weekdays.",
    "I can (may) watch a scary movie on weekends, but I can't (may not) watch a scary movie on weekdays.",
    "I can (may) call sing karaoke weekends, but I can't (may not) sing karaoke on weekdays.",
    "I can (may) have a party on weekends, but I can't (may not) have a party on weekdays."
]



let imgSrc = [
    'http://www.ellevsoft.com/_/rsrc/1413581048453/home/doyouhavefriendswhoneveranswerthecall/phone_english600.png',
    'https://cdn.timesmedia.co.id/images/2018/11/01/begadang.jpg',
    'https://herviewfromhome.com/wp-content/uploads/2018/02/shutterstock_506818078.jpg',
    'https://img1.grunge.com/img/gallery/what-happens-to-your-body-when-you-watch-a-scary-movie/intro-1514474000.jpg',
    'https://www.yoyochinese.com/attachment/upload/blog/image/ktv.png',
    'https://static.onecms.io/wp-content/uploads/sites/38/2014/11/12230611/monkey_business_images_9.jpg'
]

document.getElementById('ability2').style.visibility = 'hidden';
document.getElementById('permission2').style.visibility = 'hidden';
document.getElementById('main1').style.visibility = 'hidden';
document.getElementById('mainPic').style.visibility = 'hidden';
document.querySelector('.explain').style.visibility = 'hidden';
document.querySelector('footer').style.visibility = 'hidden';

function showPage(){
let picPlaceHoler=document.querySelector('#mainPic img');
let phrasePlaceHolder = document.querySelector("#main1 div");
phrasePlaceHolder.innerHTML = thePhrases[whichPic];
picPlaceHoler.src=imgSrc[whichPic];
}

document.getElementById('ability1').addEventListener('click', function(){
    document.getElementById('ability2').style.visibility = 'visible';
});
document.getElementById('permission1').addEventListener('click', function(){
    document.getElementById('permission2').style.visibility = 'visible';
});


document.getElementById('permission2').addEventListener('click', function(){
    document.querySelector('.explain').style.visibility = 'visible';
});
document.querySelector('.explain').addEventListener('click', function(){
    document.querySelector('#main1').style.visibility = 'visible';
    document.querySelector('#mainPic').style.visibility = 'visible';
    document.querySelector('footer').style.visibility = 'visible';
});



document.querySelector('footer').addEventListener('click', whichButton);

function whichButton(event){
    let theButton = event.target.innerHTML
    console.log(theButton);
    if (theButton == 'Next'){
        whichPic++;
        if(whichPic >5){whichPic = 5}
    }
    if (theButton == "Previous"){
        whichPic--;
        if(whichPic <0){whichPic = 0}
    }
    showPage();
}

showPage();