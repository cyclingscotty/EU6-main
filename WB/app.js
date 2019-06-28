const questions1 = {
    "question1": "Why was her mother happy about the sandals?  <button class='answerButton' id='s1a1'>Answer</button>",
    "answer1": "Her mother was happy because the sandals were the most comfortable ones in the store, but they weren't the most expensive."
}
const questions2 = {
    "question1": "When does he always take a shower and wash his hair? <button class='answerButton' id='s2a1'>Answer</button>",
    "answer1": "He always takes a shower and wash his hair before he goes to bed. <button class='nextButton' id='s2a2'>next</button>",
    "question2": "What won't he take to the class party? <button class='answerButton' id='s2a2'>Answer</button>",
    "answer2": "He won't take soda to the class party."
}

const questions3 = {
    "question1": "What has he already done? <button class='answerButton' id='s3a1'>Answer</button>",
    "answer1": "He has already turned off the computer, done research for his report, uploaded some photos and written some emails. <button class='nextButton' id='s3a2'>next</button>",
    "question2": "What can he do on Saturday? <button class='answerButton' id='s3a2'>Answer</button>",
    "answer2": "He can sleep late."
}

const questions4 = {
    "question1": "Where has she been? <button class='answerButton' id='s4a1'>Answer</button>",
    "answer1": "She's been to New Zealand. <button class='nextButton' id='s4a2'>next</button>",
    "question2": "When did she go to New Zealand? <button class='answerButton' id='s4a2'>Answer</button>",
    "answer2": "She went to New Zealand last summer. <button class='nextButton' id='s4a3'>next</button>",
    "question3": "At first, how did she feel when she learned how to dive? <button class='answerButton' id='s4a3'>Answer</button>",
    "answer3": "At first, she felt nervous. <button class='nextButton' id='s4a4'>next</button>",
    "question4": "Now, does she like scuba diving? <button class='answerButton' id='s4a4'>Answer</button>",
    "answer4": "Yes, she likes it now. <button class='nextPage'>next</button>"
}


const buttons = ["show answer", "next"];

document.querySelector("html").addEventListener('click', whichButton);

function whichButton(event) {
    if (event.target.className == "topLevelButton") {
        let xx = event.target.id.slice(event.target.id.length - 1);
        document.getElementById('displayText').setAttribute("src", "images/pic" + xx + ".jpg");
        clearText();
    } else if (event.target.className == "textPic") {
        let yy = event.target.src.slice(event.target.src.length - 5, event.target.src.length - 4);
        let askAQuest = "questions" + yy + ".question1";
        console.log(askAQuest);
        document.querySelector('.Qq').innerHTML = eval(askAQuest);
    } else if (event.target.className == "answerButton") {
        let yy = event.target.id.slice(1, 2);
        let zz = event.target.id.slice(event.target.id.length - 1);
        let askAQuest = "questions" + yy + ".answer" + zz;
        document.querySelector('.Aa').innerHTML = eval(askAQuest);
        document.querySelector('.answerButton').style.display = 'none';
    } else if (event.target.className == "nextButton") {
        let yy = event.target.id.slice(1, 2);
        let zz = event.target.id.slice(event.target.id.length - 1);
        clearText();
        let askAQuest = "questions" + yy + ".question" + zz;
        console.log(askAQuest);
        document.querySelector('.Qq').innerHTML = eval(askAQuest);
    } else if (event.target.className == "nextPage"){
        window.location.href = "countries.html";
    }

}





function clearText() {
    document.querySelector('.Aa').innerHTML = "";
    document.querySelector('.Qq').innerHTML = "";
}
