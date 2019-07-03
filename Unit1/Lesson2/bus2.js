let arr = [
    "How did you get to the library?",
    "We rode the bus."
]

document.querySelector('body').addEventListener('click', function(){
    let theEvent = event.target.id;
    if(theEvent === 'checkQ'){
        compareQ();
    } else if (theEvent === 'checkA'){
        compareA();
    }
});

function compareQ(){
    let storedQ = arr[0];
    let typedQ = document.getElementById('input1').value;
    if (storedQ == typedQ){
        goGreen('Q');
    } else {
        goRed('Q');
    }
}


function compareA(){
    let storedA = arr[1];
    let typedA = document.getElementById('input2').value;
    if (storedA == typedA){
        goGreen('A');
    } else {
        goRed('A');
    }
}


function goGreen(x){
    document.querySelector('.the'+x+' p').style.backgroundColor = "green";
};

function goRed(x){
    document.querySelector('.the'+x+' p').style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector('.the'+x+' p').style.backgroundColor = "white";
    }, 1500);
}