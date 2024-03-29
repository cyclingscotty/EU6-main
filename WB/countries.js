const country1 = {
    "name": "Egypt",
    "language": "Arabic"
}

const country2 = {
    "name": "Korea",
    "language": "Korean"
}

const country3 = {
    "name": "China",
    "language": "Chinese"
}

const country4 = {
    "name": "Brazil",
    "language": "Portuguese"
}

const country5 = {
    "name": "Japan",
    "language": "Japanese"
}

const country6 = {
    "name": "Spain",
    "language": "Spanish"
}


function checkMouseClick() {
    document.querySelector('body').addEventListener('click', whichFlag);
}

function whichFlag(event) {

    if (event.target.nodeName == "IMG") {
        document.querySelector('#countryName3').removeAttribute('placeholder');
        document.querySelector('#languageName3').removeAttribute('placeholder');
        let flagNumber = event.target.id;
        let theNumber = flagNumber.slice(flagNumber.length - 1);
        checkCountryName(theNumber);
        checkLanguageName(theNumber);
    }
}

function checkCountryName(a) {
    let checkWhichConst = eval("country" + a)["name"];
    let thisCountryName = document.getElementById('countryName' + a).value;
    if (checkWhichConst === thisCountryName) {
        document.getElementById('countryName' + a).style.color = "green";
    }
}

function checkLanguageName(a) {
    let checkWhichConst = eval("country" + a)["language"];
    let thislanguageName = document.getElementById('languageName' + a).value;
    if (checkWhichConst === thislanguageName) {
        document.getElementById('languageName' + a).style.color = "green";
        askFullQ(a);
    }
}

function askFullQ(a){
    document.getElementById('fullA').innerHTML = '';
    let checkWhichConstC = eval("country" + a)["name"];
    let checkWhichConstL = eval("country" + a)["language"];
    let thisCountryName = document.getElementById('countryName' + a).value;
    let thislanguageName = document.getElementById('languageName' + a).value;
    if(checkWhichConstC === thisCountryName && checkWhichConstL === thislanguageName){
        document.getElementById('fullQ').innerHTML= "What language do people speak in "+thisCountryName+"? <button id='fullQButton'>Show Answer</button>";
        document.getElementById('fullQButton').addEventListener('click', function(){
        document.getElementById('fullA').innerHTML = "In "+thisCountryName+", people speak "+thislanguageName+".";
            document.getElementById('fullQButton').style.display = 'none';
        });
    }
    
}

checkMouseClick();
