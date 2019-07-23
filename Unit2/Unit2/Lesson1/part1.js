let heading1 = ["Lesson <span class='blue'>One</span><br><br><button>Proceed</button>", "Family Life - Responsibilities"];
let question1 = "What is a responsibility?";
let answer1 = "A thing which you must (really should) do to help your (or others) life.";
let responsibities = ["feed the dog", "clean your room", "go to school", "go to work", 'drive safely', 'don\'t waste food', 'brush your teeth', 'don\'t steal', 'be kind'];

let pics = ["<img src='images/question_mark.png'>"]

const headingOne= document.getElementsByTagName('h1')[0];
headingOne.innerHTML = heading1[0];

document.querySelector('h1 button').addEventListener('click', step1);
    





/* PAGE 1 */
function step1(){
document.querySelector('h1 button').removeEventListener('click', step1);
headingOne.innerHTML = heading1[1]; 
let qandatags = document.getElementsByClassName('qanda');
    console.log(qandatags);
    qandatags[0].innerHTML = question1;
    qandatags[1].innerHTML = pics[0];
    qandatags[1].setAttribute('onclick', 'showAnswers()');
};

function showAnswers(){
    let qandatags = document.getElementsByClassName('qanda');
    qandatags[2].innerHTML = answer1 + " <button id='showEG'>show examples</button>";
    document.querySelector('#showEG').addEventListener('click', function(){
        document.querySelector('#showEG').style.display = 'none';
        qandatags[3].innerHTML = responsibities.join(", ");
        document.getElementById('nextPage').innerHTML="<button>Next Page</button>";
        document.getElementById('nextPage').addEventListener('click', function(){
            location.href="part1a.html";
        })
    })
}