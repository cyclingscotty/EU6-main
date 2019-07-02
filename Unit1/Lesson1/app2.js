var myData = [
    "First, walk along the river and turn left. Then, walk under the train tracks and go straight.",
    "How do I get to the movie theater?",
    "First, walk around the fountain. Then, walk down the stairs and turn right.",
    "How do I get to the hotel?",
    "First, walk walk up the street and turn right. Then, walk over the bridge and turn left."
];

document.getElementById('mainBox').addEventListener('click', whichButton);

function whichButton(event){
    if(event.target.className=='stimulusPics'){
    let theButton = event.target.id.slice(event.target.id.length-1);
    reactToButton(theButton);
}
}

function reactToButton(x){
    if(x == 1){
        one(x);
    } else if(x == 2){
        two(x);
    } else if(x == 3){
        three(x);
    }
}

function one(x){
    let stored = myData[0];
    let typed = document.getElementById('input1').value;
    if (stored == typed) {
        goGreen(x);
    } else {
        goRed(x);
    }
};

function two(x){
    let storeda = myData[1];
    let storedb = myData[2];
    let typeda = document.getElementById('input2').value;
    let typedb = document.getElementById('input3').value;
    if (storeda == typeda && storedb == typedb) {
        goGreen(x);
    } else {
        goRed(x);
    }
}


function three(x){
    let storeda = myData[3];
    let storedb = myData[4];
    let typeda = document.getElementById('input4').value;
    let typedb = document.getElementById('input5').value;
    if (storeda == typeda && storedb == typedb) {
        goGreen(x);
    } else {
        goRed(x);
    }
};

function goGreen(x){
    document.getElementById('mainBox').style.backgroundColor = "#bef5bc";
    setTimeout(function(){
            document.getElementById('mainBox').style.backgroundColor = '#ffffff'}, 1000);
}

function goRed(x){
    console.log(x);
        document.getElementById('mainBox').style.backgroundColor = '#ef8080';
    setTimeout(function(){
            document.getElementById('mainBox').style.backgroundColor = '#ffffff'}, 1000);
}