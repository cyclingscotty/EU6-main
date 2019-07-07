const Idont = [
    "I <span class='green'>don't have to</span> read textbooks, <span class='red'>but</span> my daugher <span class='red'>does</span>.",
    "I <span class='green'>don't have to</span> pay bills, <span class='red'>but</span> my parents <span class='red'>do</span>.",
    "I <span class='green'>don't have to</span> write a report, <span class='red'>but</span> my daughter <span class='red'>does</span>.",
    "I <span class='green'>don't have to</span> scrub the sink, <span class='red'>but</span> my parents <span class='red'>do</span>.",
    "I <span class='green'>don't have to</span> go to bed early, <span class='red'>but</span> my son <span class='red'>does</span>.",
    "I <span class='green'>don't have to</span> repair the house, <span class='red'>but</span> my parents <span class='red'>do</span>."
];

const imgs = [
    "images/partd/pic1.jpg",
    "images/partd/pic2.jpg",
    "images/partd/pic3.jpg",
    "images/partd/pic4.jpg",
    "images/partd/pic5.jpg",
    "images/partd/pic6.jpg"
];


function bigListen(){
document.querySelector('#bigRight').addEventListener('click', function(){
    console.log(event.target.innerText);    
    react(event.target.innerText)
})
}

function react(y){
    let x = parseInt(y, 10);
    document.querySelector('#imageBox Img').src = imgs[x-1];
    let p1holder = document.getElementById('p1');
     let p2holder = document.getElementById('p2');
    p1holder.innerHTML = "";
    p2holder.innerHTML = "";
document.querySelector('#imageBox img').addEventListener('click', function(){
    let splitSentence = Idont[x-1].split(", ");
    let split1 = splitSentence[0] +',';
    let split2 = splitSentence[1];
    console.log(split1);
    console.log(split2);
    
    p1holder.innerHTML = split1;
    p1holder.addEventListener('click', function(){
       
        p2holder.innerHTML = split2;
        bigListen();    
    })
    
});
    };

bigListen();