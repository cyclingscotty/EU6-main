const questions1 = {
    "question1": "Why was her mother happy about the sandals?  <button id='Q11A'>Answer</button>",
    "answer1": "Her mother was happy because the sandals were the most comfortable ones in the store, but they weren't the most expensive.  <button id='Q11B'>Next</button>"
}

document.querySelector("html").addEventListener('click', askQuestion);


function askQuestion(event){
    console.log(event.target.id);
    whichQuestion(event.target.id);
}

function whichQuestion(quest){
    switch (quest){
        case 'Q11':
            console.log(quest);
            printQuestion(questions1.question1);
            break;
    }
}

function printQuestion(a){
    document.getElementById("Q11").innerHTML = a;
    document.getElementById("Q11A").addEventListener('click', askAnswer);
}

function askAnswer(event){
    whichAnswer(event.target.id);
}

function whichAnswer(answ){
    switch(answ){
        case "Q11A":
            printAnswer(questions1.answer1);
    }
    
    function printAnswer(a){
        document.getElementById("A11").innerHTML = a;
         document.getElementById("Q11A").style.display = 'none';    
    }
}