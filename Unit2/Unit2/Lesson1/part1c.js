const iHave = [
    "I have to read textbooks,",
    "I have to read textbooks,",
    "I have to go to bed early,",
    "I have to go to bed early,",
    "I have to type a report,",
    "I have to type a report,"
];

const butThey = [
    "but my parents have to pay bills.",
    "and my parents do, too.",
    "but my parents have to repair the house.",
    "and my parents do, too.",
    "but my parents have scrub the sink.",
    "and my parents do, too."
];

const images = [
    'images/partc/pic1.jpg',
    'images/partc/pic2.jpg',
    'images/partc/pic3.jpg',
    'images/partc/pic4.jpg',
    'images/partc/pic5.jpg',
    'images/partc/pic6.jpg'
];

document.querySelector('body').addEventListener('click', function(){
    if(event.target.id == 'nextPage'){
        window.location.href='part1d.html';
    } else if(event.target.className ==='numberB'){
        whichButton(event);
    }
});

function whichButton(x){
    console.log(x);
    let whichQs = x.target.innerText;
    document.getElementById('mainLeftImg').src = images[whichQs-1];
    document.getElementById('iHave').innerHTML = iHave[whichQs-1];
    document.getElementById('iHave').style.visibility = 'hidden';
    document.getElementById('butThey').innerHTML = butThey[whichQs-1];
    document.getElementById('butThey').style.visibility = 'hidden';
    
    document.getElementById('mainLeftImg').addEventListener('click', function(){
       document.getElementById('iHave').style.visibility = 'visible';
        document.getElementById('iHave').addEventListener('click', function(){
              document.getElementById('butThey').style.visibility = 'visible';
        })
    });
    
    
}