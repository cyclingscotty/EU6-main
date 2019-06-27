

const questions1 = {
    "question1": "Why was her mother happy about the sandals?  <button class='answerButton' id='s1a1'>Answer</button>",
    "answer1": "Her mother was happy because the sandals were the most comfortable ones in the store, but they weren't the most expensive."
}
const questions2 = {
    "question1": "When does he always take a shower and wash his hair? <button class='answerButton' id='s2a1'>Answer</button>", 
    "answer1": "He always takes a shower and wash his hair before he goes to bed. <button class='nextButton' id='s2a2'>next</button>"
}


const buttons = ["show answer", "next"];

document.querySelector("html").addEventListener('click', whichButton);

function whichButton(event){
    if(event.target.className == "topLevelButton"){
        let xx = event.target.id.slice(event.target.id.length-1);
        document.getElementById('displayText').setAttribute("src", "images/pic"+xx+".jpg");
        clearText();
    } else if(event.target.className == "textPic"){
        let yy = event.target.src.slice(event.target.src.length-5, event.target.src.length-4);
        let askAQuest = "questions"+yy+".question1";
        console.log(askAQuest);
        document.querySelector('.Qq').innerHTML = eval(askAQuest);
    } else if(event.target.className == "answerButton"){
        let yy = event.target.id.slice(1,2);
        let zz = event.target.id.slice(event.target.id.length-1);
        let askAQuest = "questions"+yy+".answer"+zz;
        document.querySelector('.Aa').innerHTML = eval(askAQuest);
        document.querySelector('.answerButton').style.display = 'none';
    }
}





function clearText(){
    document.querySelector('.Aa').innerHTML = "";
    document.querySelector('.Qq').innerHTML = "";
}