const who = [
    "my father", "my sister", "my brother", "my daughter", "my cousin", "my mother"
]

const Idont = [
    "I don't have to clean the bathroom, but my father does.",
    "I don't have to sweep the floor, but my sister does.",
    "I don't have to wash the car, but my brother does.",
    "I don't have to water the plants, but my daughter does.",
    "I don't have to make the bed, but my cousin does.",
    "I don't have to do laundry, but my mother does."
];

const imgs = [
    "images/partf/pic1.jpg",
    "images/partf/pic2.jpg",
    "images/partf/pic3.jpg",
    "images/partf/pic4.jpg",
    "images/partf/pic5.jpg",
    "images/partf/pic6.jpg"
];


function bigListen(){
document.querySelector('#bigRight').addEventListener('click', function(){
    console.log(event.target.innerText);    
    react(event.target.innerText)
})
};

function react(y){
    let x = parseInt(y, 10);
    document.querySelector('#imageBox Img').src = imgs[x-1];
    let p1holder = document.getElementById('p1');
    if( (x - 1) == 0){
        console.log("x is 0");
        p1holder.innerHTML = "<textarea id='theInput' rows='2' cols='30' placeholder = 'I don&#39;t have to clean the bathroom, but my father does.'></textarea>";
        document.getElementById('them').innerHTML = who[x-1];
    } else {
     p1holder.innerHTML = "<textarea id='theInput' rows='2' cols='30' placeholder = 'These chores are in Everybody Up 3'</textarea>";
     document.getElementById('them').innerHTML = who[x-1];
    }
    document.getElementById('checkTheInput').addEventListener('click', function(){
        checkTheInput(x);
    });
};

function checkTheInput(y){
    let storedAns;
    storedAns = Idont[(y-1)];
    console.log(storedAns);
    let typedAns = document.getElementById('theInput').value;
    console.log(typedAns);
    
    if(storedAns == typedAns){
        console.log("Hooray");
        document.getElementById('theInput').style.backgroundColor = "lightgreen";
    }
}

bigListen();